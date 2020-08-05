package main

import "github.com/gofiber/fiber"

func registerEndpoints(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) {
		if err := c.Render("index", fiber.Map{}); err != nil {
			c.Next(err)
		}
	})
}
