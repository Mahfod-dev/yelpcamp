const mongoose = require('mongoose')

const CampGroundSchema = mongoose.Schema({
	title: {
		type: String,
	},
	price: {
		type: String,
	},
	description: {
		type: String,
	},
	location: {
		type: String,
	},
})

module.exports = mongoose.model('Campground', CampGroundSchema)
