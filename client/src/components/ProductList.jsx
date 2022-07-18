const ProductList = ({ products }) => {
	return (
		<div className='text-center'>
			<h1>Product List:</h1>
			{products.map((product, i) => (
				<p key={i}>{product.title}</p>
			))}
		</div>
	);
};
export default ProductList;
