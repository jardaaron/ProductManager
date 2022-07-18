import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
	return (
		<div className='text-center'>
			<h1>Product List:</h1>
			{products.map((product, i) => (
				<Link key={i} to={`/api/products/${product._id}`}>
					<p>{product.title}</p>
				</Link>
			))}
		</div>
	);
};
export default ProductList;
