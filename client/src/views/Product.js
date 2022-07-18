import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Product = () => {
	const [product, setProduct] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/product/${id}`)
			.then((res) => {
				console.log(res.data);
				setProduct(res.data.product);
			})
			.catch((err) => console.error(err));
	}, [id]);

	return (
		<div className='text-center'>
			<h1>{product.title}</h1>
			<h3>{product.price}</h3>
			<h3>{product.description}</h3>
			<button onClick={() => navigate(-1)}>GO Back</button>
		</div>
	);
};
export default Product;
