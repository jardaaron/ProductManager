const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
	response.json({
		title: 'Product Manager',
	});
};

module.exports.createProduct = (request, response) => {
	const { firstName, lastName } = request.body;
	Product.create({
		firstName,
		lastName,
	})
		.then((product) => response.json(product))
		.catch((err) => response.json(err));
};
