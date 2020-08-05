package main

import (
	"fmt"

	"github.com/GreatGodApollo/gospacebin"
	"github.com/gofiber/fiber"
	"github.com/spacebin-org/pulsar/config"
)

type createBody struct {
	Content string `json:"content" xml:"content" form:"content"`
}

func registerEndpoints(app *fiber.App) {
	spacebin := gospacebin.NewClient(config.GetConfig().Instance)

	app.Get("/", func(c *fiber.Ctx) {
		if err := c.Render("index", fiber.Map{}); err != nil {
			c.Next(err)
		}
	})

	app.Get("/:id", func(c *fiber.Ctx) {
		document, err := spacebin.GetDocument(c.Params("id"))

		if err != nil {
			if err := c.Render("document", &fiber.Map{
				"Document": err.Error(),
			}); err != nil {
				c.Next(err)
			}
		} else {
			if err := c.Render("document", &fiber.Map{
				"Document": &document.Content,
				"ID":       &document.ID,
			}); err != nil {
				c.Next(err)
			}
		}
	})

	app.Get("/:id/raw", func(c *fiber.Ctx) {
		document, err := spacebin.GetDocument(c.Params("id"))

		if err != nil {
			c.JSON(&fiber.Map{
				"error": err.Error(),
			})
		}

		c.Send(document.Content)
	})

	app.Post("/upload", func(c *fiber.Ctx) {
		body := new(createBody)

		if err := c.BodyParser(body); err != nil {
			c.JSON(&fiber.Map{
				"error": err.Error(),
			})

			return
		}

		if body.Content != "" {
			resp, err := spacebin.CreateDocument(&gospacebin.CreateDocumentOpts{
				Content:   body.Content,
				Extension: "txt",
			})

			if err != nil {
				c.JSON(&fiber.Map{
					"error": err,
				})

				return
			}

			c.Redirect(fmt.Sprintf("/%s", resp.ID))
		}
	})
}
