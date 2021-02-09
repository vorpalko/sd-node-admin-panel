const { Router } = require('express')
const UserResult = require('../models/UserResult')
const router = Router()

router.get('/', async (req, res) => {
    const results = await UserResult.find({}).lean()
  
    res.render('index', {
      title: 'Results list',
      isIndex: true,
      results
    })
  })
  
router.get('/create', (req, res) => {
    res.render('create', {
      title: 'Create userResult',
      isCreate: true
    })
})

module.exports = router