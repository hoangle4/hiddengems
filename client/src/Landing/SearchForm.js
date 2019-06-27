import React, { useState, useEffect } from 'react';

const SearchForm = () => {
	const [ cityInput, setCityInput ] = useState('');
	const [ stateInput, setStateInput ] = useState('');
	const [ zipcodeInput, setZipcodeInput ] = useState('');

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		const results = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${cityInput},${stateInput},${zipcodeInput}&key=${process
				.env.REACT_APP_GOOGLE_MAP_API}`,
			{
				method: 'GET'
			}
		);
		const latLng = await results.json();
		console.log(latLng);
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
