const ProductList = ({ products }) => {
	return (
		<ul>
			{products.map((product, i) => (
				<li key={i}>{product.title}</li>
			))}
		</ul>
	);
};
export default ProductList;
