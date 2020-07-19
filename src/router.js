const express = require('express')
const { validateGet, validatePost } = require('./validate')
const got = require('got')
const config = require('./config')
const multer = require('multer')

const router = express.Router()
const upload = multer()

router.get('/', async (req, res) => {
  res.render('home', {
    instance: config.instance
  })
})

router.get('/:id', validateGet(), async (req, res) => {
  try {
    const response = await got(`${config.instance}/document/${req.params.id}`).json()

    if (response.error !== {}) {
      res.render('document', {
        content: response.payload.content
      })
    } else {
      res.status(404).send({
        message: response.error || 'That document does not exist.'
      })
    }
  } catch (err) {
    res.status(400).send({
      message: err
    })
  }
})

router.post('/upload', upload.none(), validatePost(), async (req, res) => {
  try {
    const response = await got.post(`${config.instance}/document/`, {
      json: {
        content: req.body.content
      }
    }).json()

    if (response.error !== {}) {
      res.redirect(`/${response.payload.id}`)
    } else {
      res.status(500).send({
        message: response.error
      })
    }
  } catch (err) {
    res.status(400).send({
      message: err
    })
  }
})

module.exports = router
