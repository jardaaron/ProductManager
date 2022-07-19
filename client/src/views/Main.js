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

	const removeHandler = (productId) => {
		setProducts(products.filter((product) => product._id !== productId));
	};

	return (
		<div className='d-flex flex-column justify-content-center align-items-center'>
			<ProductForm />
			<hr />
			{loaded && (
				<ProductList
					products={products.products}
					removeFromDom={removeHandler}
				/>
			)}
		</div>
	);
};
export default Main;
