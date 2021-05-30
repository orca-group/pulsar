<p align="center">
  <img
    width="800"
    src="https://github.com/spacebin-org/wiki/blob/master/assets/spacebin-text-logo/github-banner.png?raw=true"
    alt="spacebin - pastebin server focused stability and maintainability"
  />
</p>

> **🔭 Pulsar is a light-weight and simple web client for Spacebin.**
> \
> \
> [**🌎 View Live**](https://spaceb.in) | [**🚀 More Information and DOcumentation**](https://docs.spaceb.in)
> 
---

## 🚀 What is Spacebin?

Spacebin is a highly-reliable pastebin server, built with Go, that's capable of serving notes, novels, code or any other form of text!

Pastebin's are a type of online content storage service where users can store plain text document, e.g. program source code.

For more information and the history of Pastebin see Wikipedia's [article on them](https://en.wikipedia.org/wiki/Pastebin).

## ✍ Contributing

If you're looking to contribute to Pulsar, great! We'd love new contributors. We just ask you follow a few basic guidelines and principles, all of which are defined in the [`CONTRIBUTING.md`](CONTRIBUTING.md).

## 🖨️ Self-hosting

**Requires: Docker**

```sh
# Pull and run docker image on port 80 using official Spirit instance
$ sudo docker pull spacebinorg/pulsar:latest
$ sudo docker run -d -p 80:3000 spacebinorg/pulsar:latest -e PULSAR_INSTANCE='https://spaceb.in/api'
```

More in-depth instructions are available on the [Spacebin Wiki](https://docs.spaceb.in).

## 👥 Contributors

Pulsar development is lead by [Luke Whrit](https://github.com/lukewhrit), other team members, and various contributors from the open source community.

Here's a list of notable contributors to Pulsar:

* [Luke Whrit <lukewhrit@pm.me>](https://github.com/lukewhrit) - Primary developer and maintainer.

## 👮 Vulnerabilities

The Spacebin team takes security very seriously. If you detect a vulnerability please contact <lukewhrit@pm.me>.

We ask that you do not publish any vulnerabilities after they have been patched or after a 30 day period since being reported has passed.

## 📑 License and Copyright

Pulsar is licensed under the MIT license. A copy of this license can be found in the [`LICENSE`](LICENSE) file.
