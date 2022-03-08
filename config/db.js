const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI)
		console.log(`MONGO DB connection: ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.log(`Error : ${error.message}`.red.bold)
		process.exit(1)
	}
}

module.exports = connectDB
