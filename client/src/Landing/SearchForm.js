import React, { useState, useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

const SearchForm = () => {
	const [ cityInput, setCityInput ] = useState('');
	const [ stateInput, setStateInput ] = useState('');
	const [ zipcodeInput, setZipcodeInput ] = useState('');
	const [ latLngReady, setLatLngReady ] = useState(false);
	const [ latLngResult, setlatLngResult ] = useState({ lat: 0, lng: 0 });

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
		await setlatLngResult({
			lat: latLng.results[0].geometry.location.lat,
			lng: latLng.results[0].geometry.location.lng
		});
		setLatLngReady(true);
	};

	console.log(latLngResult);
	return (
		<Fragment>
			{!latLngReady ? (
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
			) : (
				<Redirect to={`/map/${latLngResult.lat}/${latLngResult.lng}`} />
			)}
		</Fragment>
	);
};
export default SearchForm;
