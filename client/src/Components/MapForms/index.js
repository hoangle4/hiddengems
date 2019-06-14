import React from 'react';
import './mapforms.css';
function index({ isPinDropped }) {
	return (
		<div className="form-group" style={isPinDropped ? { height: '80vh', display: 'block' } : { display: 'none' }}>
			<h5>Place Details</h5>
			<div className="input-container">
				<label className="label" htmlFor="placeName">
					Place Name
				</label>
				<input className="input" name="placeName" placeholder="" />
			</div>
			<div className="input-container">
				<label className="label" htmlFor="placeName">
					Photos
				</label>
				<input type="file" className="input" name="photos" accept="image/*" />
			</div>
			<div className="input-container">
				<label className="label" htmlFor="category">
					Category
				</label>
				<select className="input" name="category">
					<option value="restaurants">Restaurants</option>
					<option value="auto">Auto</option>
					<option value="bars">Bars</option>
					<option value="reacreationalarea">Recreational Area</option>
				</select>
			</div>
			<div className="input-container">
				<label className="label" htmlFor="placeName">
					Description
				</label>
				<textarea className="input" name="placeName" placeholder=" Story, Description ..." />
			</div>
		</div>
	);
}

export default index;
