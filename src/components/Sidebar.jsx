/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ onFilterChange, onSortChange }) => {
	const [price, setPrice] = useState(null);
	const [bedrooms, setBedrooms] = useState(null);
	const [sort, setSort] = useState(null);

	const handleFilterApply = () => {
		onFilterChange({ price, bedrooms });
	};

	const handleSortChange = (e) => {
		setSort(e.target.value);
		onSortChange(e.target.value);
	};

	return (
		<aside className='sidebar'>
			<h3 className='sidebar-title'>Filters</h3>
			<div className='filter-section'>
				<label className='filter-label'>Max Price</label>
				<input
					type='number'
					className='filter-input'
					value={price || ''}
					onChange={(e) => setPrice(Number(e.target.value))}
					placeholder='Enter max price'
				/>
			</div>
			<div className='filter-section'>
				<label className='filter-label'>Bedrooms</label>
				<select
					className='filter-input'
					value={bedrooms || ''}
					onChange={(e) => setBedrooms(Number(e.target.value))}
				>
					<option value=''>Any</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
					<option value='6'>6</option>
				</select>
			</div>
			<button className='apply-btn' onClick={handleFilterApply}>
				Apply Filters
			</button>

			<h3 className='sidebar-title'>Sort by</h3>
			<div className='filter-section sort-section'>
				<label className='filter-label'>
					<input
						type='radio'
						name='sort'
						value='price-asc'
						onChange={handleSortChange}
						checked={sort === 'price-asc'}
					/>
					Price: Low to High
				</label>
				<label className='filter-label'>
					<input
						type='radio'
						name='sort'
						value='price-desc'
						onChange={handleSortChange}
						checked={sort === 'price-desc'}
					/>
					Price: High to Low
				</label>
			</div>
		</aside>
	);
};

export default Sidebar;
