//+build mage

package main

import "github.com/magefile/mage/sh"

// Runs go mod download and then build the binary.
func Build() error {
	if err := sh.Run("go", "mod", "download"); err != nil {
		return err
	}

	return sh.Run("go", "build", "--ldflags", "-s -w", "./")
}
