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
				setProduct(res.data.product);
			})
			.catch((err) => console.error(err));
	}, [id]);

	const removeHandler = (productId) => {
		setProduct(product.filter((prdct) => prdct._id !== productId));
	};
	const deleteProduct = () => {
		console.log(product);
		axios
			.delete(`http://localhost:8080/api/product/${id}`)
			.then((res) => {
				navigate(-1);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className='text-center'>
			<h1>{product.title}</h1>
			<h3>{product.price}</h3>
			<h3>{product.description}</h3>
			<button onClick={() => navigate(-1)}>GO Back</button>
			<button onClick={() => navigate(`/product/${id}/edit`)}>
				Edit
			</button>
			<button onClick={deleteProduct}>Delete</button>
		</div>
	);
};
export default Product;
