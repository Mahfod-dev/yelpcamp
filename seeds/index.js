const connectDB = require('../config/db')
const cities = require('../seeds/cities')
const { descriptors, places } = require('../seeds/seedsHelpers')
const colors = require('colors')
const dotenv = require('dotenv').config()
const Campground = require('../models/campground')

connectDB()

const sample = (array) => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
	await Campground.deleteMany({})
	for (let i = 0; i < 50; i++) {
		const random1000 = Math.floor(Math.random() * 1000)
		const camp = await new Campground({
			location: `${cities[random1000].city},${cities[random1000].state}`,
			title: `${sample(descriptors)} ${sample(places)}`,
		})
		await camp.save()
	}
}

seedDB().then(() => {
	mongoose.connection.close()
})
