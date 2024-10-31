/* eslint-disable react/prop-types */
import './ProductList.css';

const ProductList = ({ products }) => {
	return (
		<div className='product-list'>
			{products.length === 0 ? (
				<p className='no-products'>Oops. No products found.</p>
			) : (
				products.map((product) => (
					<div key={product.id} className='product-card'>
						<h4 className='product-name'>{product.name}</h4>
						<p className='product-price'>
							Price: ${product.price.toLocaleString()}
						</p>
						<p className='product-details'>Bedrooms: {product.bedrooms}</p>
					</div>
				))
			)}
		</div>
	);
};

export default ProductList;
