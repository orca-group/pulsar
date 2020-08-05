package main

import (
	"github.com/GreatGodApollo/gospacebin"
	"github.com/gofiber/fiber"
	"github.com/spacebin-org/pulsar/config"
)

func getDocument(id string) (*gospacebin.Document, error) {
	spacebin := gospacebin.NewClient(config.GetConfig().Instance)

	return spacebin.GetDocument(id)
}

func registerEndpoints(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) {
		if err := c.Render("index", fiber.Map{}); err != nil {
			c.Next(err)
		}
	})

	app.Get("/:id", func(c *fiber.Ctx) {
		document, err := getDocument(c.Params("id"))

		if err != nil {
			if err := c.Render("document", fiber.Map{
				"Document": err.Error(),
			}); err != nil {
				c.Next(err)
			}
		} else {
			if err := c.Render("document", fiber.Map{
				"Document": &document.Content,
				"ID":       &document.ID,
			}); err != nil {
				c.Next(err)
			}
		}
	})

	app.Get("/:id/raw", func(c *fiber.Ctx) {
		document, err := getDocument(c.Params("id"))

		if err != nil {
			c.JSON(fiber.Map{
				"error": err,
			})
		}

		c.Send(document.Content)
	})
}
