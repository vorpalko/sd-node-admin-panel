const express = require('express')
const { Router } = require('express')
const bodyParser = require('body-parser')
const UserResult = require('../models/UserResult')
const router = Router()

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post('/create', async (req, res) => {
  const newUser = new UserResult({
    reference: req.body.reference,
    name: req.body.name,
    result: req.body.result,
    time: getCurrentTime()
  })
  await newUser.save()

  res.redirect('/')
})

router.post('/update', async (req, res) => {
  const user = await UserResult.findById(req.body.id)
  user.result = !!req.body.result
  await user.save()

  res.redirect('/')
})


function getCurrentTime() {
  return (new Date()).toString().substr(0, 24)
}

module.exports = router