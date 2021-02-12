const express = require('express')
const { Router } = require('express')
const bodyParser = require('body-parser')
const UserResult = require('../models/UserResult')
const router = Router()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.post('/update', async (req, res) => {
  const user = await UserResult.findById(req.body.id)
  user.result = !!req.body.result
  await user.save()

  res.redirect('/')
})

router.post('/create', async (req, res) => {
  const newRef = req.body.reference
  const newName = req.body.name
  const newResult = req.body.result

  //const oldUser = UserResult.findById(newRef)
  //if(oldUser == null) {
  //  addNew()
  //}
  //else {
  //    if(oldUser.name == newName) {
  //      updateUser()
  //    }
  //    else {
  //      updateNameChange()
  //    }
  //}

  const newUser = new UserResult({
    reference: newRef,
    name: newName,
    result: newResult,
    time: getCurrentTime()
  })
  await newUser.save()

  res.redirect('/')
})



function getCurrentTime() {
  return (new Date()).toString().substr(0, 24)
}

module.exports = router