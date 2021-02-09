const { Router } = require('express')
const UserResult = require('../models/UserResult')
const router = Router()


router.post('/create', async (req, res) => {
  //const user = new UserResult({
  //  reference: "", 
  //  name: "",
  //  result: "",
  //  time: getCurrentTime()
  //})  

  //const user2 = await UserResult.find( { reference: req.reference } )
  //if(user2 != null) {
  //  user
  //}
  //else {

  let userRef
  if(req.reference == null) {
    userRef = "aaa"
  }
  else {
    userRef = req.reference
  }


  let userName 
  if(req.name == null) {
    userName = "Greshnyak"
  }
  else {
    userName = req.name
  }

  let userResult
  if(req.result == null) {
    userResult = "5/16"
  }
  else {
    userResult = req.result
  }

    const newUser = new UserResult({
      reference: userRef,
      name: userName,
      result: userResult,
      time: getCurrentTime()
    })
    await newUser.save()
  //}

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