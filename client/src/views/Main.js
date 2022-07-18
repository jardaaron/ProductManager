import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = () => {
	const [products, setProducts] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		axios
			.get('http://localhost:8080/api/product')
			.then((res) => {
				setProducts(res.data);
				setLoaded(true);
			})
			.catch((err) => console.error(err));
	}, [products]);

	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<ProductForm />
			<hr />
			{loaded && <ProductList products={products.products} />}
		</div>
	);
};
export default Main;
