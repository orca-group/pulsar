<p align="center">
  <img
    width="800"
    src="https://github.com/spacebin-org/wiki/blob/master/assets/spacebin-text-logo/github-banner.png?raw=true"
    alt="spacebin - pastebin server focused stability and maintainability"
  />
</p>

# 🔭 Pulsar

Pulsar is a simplistic, light-weight web client for Spacebin: text sharing for the final frontier. Check out our [public hosted instance](https://spaceb.in) or read more about [Spacebin](https://docs.spaceb.in).

## Table of Contents

- [🔭 Pulsar](#-pulsar)
  - [Table of Contents](#table-of-contents)
  - [Documentation](#documentation)
    - [Self-hosting](#self-hosting)
    - [Configuration](#configuration)
    - [Other Environment Variables](#other-environment-variables)
  - [Code Style](#code-style)
    - [Commits](#commits)
  - [License](#license)

## Documentation

### Self-hosting

**Requires: Docker**

```sh
# Pull and run Docker image on port 80
$ sudo docker pull spacebinorg/pulsar:latest
$ sudo docker run -d -p 80:3000 -e PULSAR_INSTANCE="https://spaceb.in/api/v1" spacebinorg/pulsar:latest
```

### Configuration

This variable dictates what API server Pulsar uses. Make sure you provide the entire URL, including the `/api/v1` section. **DO NOT** include a trailing backslash.

### Other Environment Variables

As Pulsar makes use of `@sveltejs/adapter-node` for our integrated web server you can use any environment variable that it provides such as `PORT`, `HOST`, or `ORIGIN`. For a reference of these variables, see: [Environment Variables](https://github.com/sveltejs/kit/tree/master/packages/adapter-node#environment-variables).

## Code Style

### Commits

Please only use the `@commitlint/config-conventional` standard while committing your changes. Read it here on the [Github page](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional). Please also make sure you sign all your commits with GPG.

## License

Pulsar is made available to the public under the terms of the MIT license. A copy of this license can be found in [LICENSE](LICENSE) file included in this repository.
