package config

import (
	"log"

	"github.com/knadh/koanf"
	"github.com/knadh/koanf/parsers/json"
	"github.com/knadh/koanf/providers/confmap"
	"github.com/knadh/koanf/providers/file"
)

var k = koanf.New(".")

// Config is the configuration object
type Config struct {
	Port             int    `koanf:"port"`
	Host             string `koanf:"host"`
	CompressionLevel int    `koanf:"compressionLevel"`
	EnableCSP        bool   `koanf:"enableCSP"`
	Instance         string `koanf:"instance"`
}

var configuration Config

// Load configuration from file
func Load() error {
	// Set some default values
	k.Load(confmap.Provider(map[string]interface{}{
		"port":              3000,
		"host":              "0.0.0.0",
		"compression_level": -1,
		"enable_csp":        true,
		"instance":          "https://api.spaceb.in",
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
