package main

import (
	"github.com/gofiber/cors"
	"github.com/gofiber/fiber"
	"github.com/gofiber/fiber/middleware"
	"github.com/gofiber/template/html"
	"github.com/spacebin-org/pulsar/config"
)

func main() {
	app := fiber.New(&fiber.Settings{
		Views: html.New("./views", ".html"),
	})

	app.Static("/", "./static")

	registerEndpoints(app)
	registerMiddleware(app)

	app.Listen(config.GetConfig().Port)
}

func registerMiddleware(app *fiber.App) {
	app.Use(middleware.Compress(middleware.CompressConfig{
		Level: config.GetConfig().CompressionLevel,
	}))

	app.Use(cors.New())
	app.Use(middleware.Logger())

	app.Use(func(c *fiber.Ctx) {
		// Set some security headers:
		c.Set("X-Download-Options", "noopen")
		c.Set("X-DNS-Prefetch-Control", "off")
		c.Set("X-Frame-Options", "SAMEORIGIN")
		c.Set("X-XSS-Protection", "1; mode=block")
		c.Set("X-Content-Type-Options", "nosniff")
		c.Set("Referrer-Policy", "no-referrer-when-downgrade")
		c.Set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload")
		c.Set("Cache-Control", "max-age=31536000")

		if config.GetConfig().EnableCSP == true {
			c.Set("Content-Security-Policy", "default-src 'self' https:; frame-ancestors 'none'; base-uri 'none'; form-action 'self';")
		}

		// Go to next middleware:
		c.Next()
	})
}
