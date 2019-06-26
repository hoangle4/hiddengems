import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchForm = () => {
	const [ cityInput, setCityInput ] = useState('');
	const [ stateInput, setStateInput ] = useState('');
	const [ zipcodeInput, setZipcodeInput ] = useState('');
	const handleFormSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<form onSubmit={handleFormSubmit} className="Landing-search-form">
			<input
				required
				name="cityInput"
				type="text"
				className="Landing-searchbox"
				id="Landing-searchbox-city"
				placeholder="Enter City - Example: Portland "
				value={cityInput}
				onChange={(e) => setCityInput(e.target.value)}
			/>
			<input
				required
				name="stateInput"
				type="text"
				className="Landing-searchbox"
				id="Landing-searchbox-state"
				placeholder="Enter State - Example: OR"
				value={stateInput}
				onChange={(e) => setStateInput(e.target.value)}
			/>
			<input
				name="zipcodeInput"
				type="number"
				className="Landing-searchbox"
				id="Landing-searchbox-zipcode"
				placeholder="Zipcode (Optional)"
				value={zipcodeInput}
				onChange={(e) => setZipcodeInput(e.target.value)}
			/>
			<button type="submit" className="Landing-search-button">
				Search
			</button>
		</form>
	);
};
export default SearchForm;
