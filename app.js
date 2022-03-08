const express = require('express')
const path = require('path')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const Campground = require('./models/campground')

connectDB()

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error'))
// db.once('open', () => {
// 	console.log('Database connected')
// })

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.render('home')
})
app.get('/campgrounds', async (req, res) => {
	const campgrounds = await Campground.find({})
	res.render('campgrounds/index', { campgrounds })
})

app.get('/campgrounds/new', (req, res) => {
	res.render('campgrounds/new')
})

app.post('/campgrounds', async (req, res) => {
	res.send(req.body)
})

app.get('/campgrounds/:id', async (req, res) => {
	const campground = await Campground.findById(req.params.id)
	res.render('campgrounds/show', { campground })
})

app.listen(8000, () => {
	console.log('all is good')
})
