import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
const Update = () => {
	//keep track of what is being typed via useState hook
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/product/${id}`)
			.then((res) => {
				console.log(res.data);
				setTitle(res.data.product.title);
				setDescription(res.data.product.description);
				setPrice(res.data.product.price);
			})
			.catch((err) => console.error(err));
	}, [id]);

	//handler when the form is submitted
	const onSubmitHandler = (e) => {
		//prevent default behavior of the submit
		e.preventDefault();
		//make a post request to create a new product
		axios
			.put(`http://localhost:8080/api/product/${id}`, {
				title,
				description,
				price,
			})
			.then((res) => {
				console.log(res);
				navigate(-1);
			})
			.catch((err) => console.log(err));
	};
	//onChange to update title and description
	return (
		<form onSubmit={onSubmitHandler} className='text-center'>
			<p>
				<label>Title</label>
				<br />
				<input
					type='text'
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</p>
			<p>
				<label>Price</label>
				<br />
				<input
					type='number'
					onChange={(e) => setPrice(e.target.value)}
					value={price}
					step='0.01'
				/>
			</p>
			<p>
				<label>Description</label>
				<br />
				<input
					type='text'
					onChange={(e) => setDescription(e.target.value)}
					value={description}
				/>
			</p>
			<button className='btn btn-primary'>Submit</button>
		</form>
	);
};
export default Update;
