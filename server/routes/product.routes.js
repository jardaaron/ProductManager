const ProductController = require('../controllers/product.controller');
module.exports = function (app) {
	app.get('/api', ProductController.index);
	// ! READ
	app.get('/api/product', ProductController.findAllProducts);
	app.get('/api/product/:id', ProductController.findProductById);
	// ! CREATE
	app.post('/api/product', ProductController.createProduct);
	// ! PUT
	app.put('/api/product/:id', ProductController.updateProductById);
	// ! DELETE
	app.delete('/api/product/:id', ProductController.deleteProductById);
};
