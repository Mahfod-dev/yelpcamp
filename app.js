const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('Hello from yelp')
})

app.get('/api/', (req, res) => {
	res.send('Hello from yelp')
})

app.listen(8000, () => {
	console.log('all is good')
})
