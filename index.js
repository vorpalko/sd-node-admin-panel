const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const daoRoutes = require('./routes/dao')
const renderingRoutes = require('./routes/rendering')
const { env } = require('process')
require('dotenv').config();

const PORT = process.env.PORT || 80

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(daoRoutes)
app.use(renderingRoutes)

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useFindAndModify: false
      }
    )
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()