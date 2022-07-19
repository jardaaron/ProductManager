const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
	response.json({
		title: 'Product Manager',
	});
};

// ! READ
module.exports.findProductById = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then((oneProduct) => res.json({ product: oneProduct }))
		.catch((err) =>
			res.json({ message: 'Something went wrong', error: err })
		);
};

// ! READ ALL
module.exports.findAllProducts = (req, res) => {
	Product.find()
		.then((allProducts) => res.json({ products: allProducts }))
		.catch((err) =>
			res.json({ message: 'Something went wrong', error: err })
		);
};

// ! CREATE
module.exports.createProduct = (request, response) => {
	const { title, price, description } = request.body;
	Product.create({
		title,
		price,
		description,
	})
		.then((product) => response.json({ status: 'created', product }))
		.catch((err) => response.json(err));
};

// ! UPDATE
module.exports.updateProductById = (request, response) => {
	Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
		new: true,
	})
		.then((updatedProduct) => response.json(updatedProduct))
		.catch((err) => response.json(err));
};

// ! DELETE
module.exports.deleteProductById = (request, response) => {
	Product.deleteOne({ _id: request.params.id })
		.then((deleteConfirmation) =>
			response.json({ status: 'deleted', deleteConfirmation })
		)
		.catch((err) => response.json(err));
};
