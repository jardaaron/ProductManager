import React, { useState } from 'react';
import axios from 'axios';
const ProductForm = () => {
	//keep track of what is being typed via useState hook
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	//handler when the form is submitted
	const onSubmitHandler = (e) => {
		//prevent default behavior of the submit
		e.preventDefault();
		//make a post request to create a new product
		axios
			.post('http://localhost:8080/api/product', {
				title,
				description,
				price,
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	//onChange to update title and description
	return (
		<form onSubmit={onSubmitHandler}>
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
export default ProductForm;
