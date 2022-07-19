import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = ({ products, removeFromDom }) => {
	const deleteProduct = (productId) => {
		axios
			.delete(`http://localhost:8080/api/product/${productId}`)
			.then((res) => {
				removeFromDom(productId);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className='text-center'>
			<h1>Product List:</h1>
			{products.map((product, i) => (
				<div key={i}>
					<Link to={`/product/${product._id}`}>{product.title}</Link>
					<button
						className='btn btn-primary'
						onClick={(e) => deleteProduct(product._id)}
					>
						Remove
					</button>
				</div>
			))}
		</div>
	);
};
export default ProductList;
