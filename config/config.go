package config

import (
	"log"

	"github.com/knadh/koanf"
	"github.com/knadh/koanf/parsers/json"
	"github.com/knadh/koanf/providers/confmap"
	"github.com/knadh/koanf/providers/file"
)

var k = koanf.New(".")

// Server is the configuration object for anything server-related
type Server struct {
	Port             int
	Host             string
	CompressionLevel int
	EnableCSP        bool
}

// Config is the configuration object
type Config struct {
	Server
}

var configuration Config

// Load configuration from file
func Load() error {
	// Set some default values
	k.Load(confmap.Provider(map[string]interface{}{
		"Server.Port":             3000,
		"Server.Host":             "0.0.0.0",
		"Server.CompressionLevel": -1,
		"Server.EnableCSP":        true,
	}, "."), nil)

	f := file.Provider("./config.json")

	// Load configuration from JSON on top of said default values
	if err := k.Load(f, json.Parser()); err != nil {
		log.Fatalf("error loading config: %v", err)
	}

	k.Unmarshal("", &configuration)

	return nil
}

// GetConfig returns the entire configuration object
func GetConfig() Config {
	return configuration
}
