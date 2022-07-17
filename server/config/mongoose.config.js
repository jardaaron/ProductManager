const mongoose = require('mongoose');

const DATABASE = 'productmanager';

mongoose
	.connect(`mongodb://localhost/${DATABASE}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		console.log(`Established a connection to database: ${DATABASE}`)
	)
	.catch((err) =>
		console.log('Something went wrong when connecting to the database', err)
	);
