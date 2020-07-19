const Joi = require('@hapi/joi')
const config = require('./config')

module.exports = {
  validateGet: () => {
    const schema = Joi.object({
      id: Joi.string().length(config.idLength).insensitive().required()
    })

    return (req, res, next) => {
      const { error } = schema.validate(req.params)

      if (error) {
        res.status(400).send({
          message: error.details[0].message
        })
      } else {
        next()
      }
    }
  },
  validatePost: () => {
    const schema = Joi.object({
      content: Joi.string().max(config.maxDocumentLength).required().insensitive()
    })

    return (req, res, next) => {
      const { error } = schema.validate(req.body)

      if (error) {
        res.status(400).send({
          message: error.details[0].message
        })
      } else {
        next()
      }
    }
  }
}
