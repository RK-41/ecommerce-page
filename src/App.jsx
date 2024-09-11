import { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Sidebar from './components/Sidebar';

const initialProducts = [
	{ id: 1, name: 'Property A', price: 500000, bedrooms: 3 },
	{ id: 2, name: 'Property B', price: 350000, bedrooms: 2 },
	{ id: 3, name: 'Property C', price: 600000, bedrooms: 4 },
	{ id: 4, name: 'Property D', price: 450000, bedrooms: 3 },
	{ id: 5, name: 'Property E', price: 300000, bedrooms: 2 },
	{ id: 6, name: 'Property F', price: 700000, bedrooms: 5 },
	{ id: 7, name: 'Property G', price: 950000, bedrooms: 6 },
	{ id: 8, name: 'Property H', price: 800000, bedrooms: 4 },
];

function App() {
	const [products, setProducts] = useState(initialProducts);
	const [filters, setFilters] = useState({ price: null, bedrooms: null });
	const [sortOption, setSortOption] = useState(null);

	const handleFilterChange = (newFilters) => {
		setFilters(newFilters);
	};

	const handleSortChange = (newSortOption) => {
		setSortOption(newSortOption);
	};

	const filteredProducts = products.filter((product) => {
		const priceFilter = !filters.price || product.price <= filters.price;
		const bedroomFilter =
			!filters.bedrooms || product.bedrooms === filters.bedrooms;
		return priceFilter && bedroomFilter;
	});

	const sortedProducts = filteredProducts.sort((a, b) => {
		if (sortOption === 'price-asc') return a.price - b.price;
		if (sortOption === 'price-desc') return b.price - a.price;
		return 0;
	});

	return (
		<div className='app'>
			<Sidebar
				onFilterChange={handleFilterChange}
				onSortChange={handleSortChange}
			/>
			<main className='main-content'>
				<h1 className='heading'>Property Listing</h1>
				<ProductList products={sortedProducts} />
			</main>
		</div>
	);
}

export default App;
