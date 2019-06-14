import React, { Fragment } from 'react';

function FormGroup({ placeName, photos, category, description, handleOnChange }) {
	return (
		<Fragment>
			<h5>Place Details</h5>
			<div className="input-container">
				<label className="label" htmlFor="placeName">
					Place Name
				</label>
				<input
					className="input"
					name="placeName"
					placeholder="Place name"
					value={placeName}
					onChange={handleOnChange}
				/>
			</div>
			<div className="input-container">
				<label className="label" htmlFor="photos">
					Photos
				</label>
				<input
					type="file"
					className="input"
					name="photos"
					accept="image/*"
					value={photos}
					onChange={handleOnChange}
				/>
			</div>
			<div className="input-container">
				<label className="label" htmlFor="category">
					Category
				</label>
				<select className="input" name="category" value={category} onChange={handleOnChange}>
					<option value="restaurants">Restaurants</option>
					<option value="auto">Auto</option>
					<option value="bars">Bars</option>
					<option value="reacreationalarea">Recreational Area</option>
				</select>
			</div>
			<div className="input-container">
				<label className="label" htmlFor="description">
					Description
				</label>
				<textarea
					className="input"
					name="description"
					placeholder=" Story, Description ..."
					value={description}
					onChange={handleOnChange}
				/>
			</div>
			<div className="input-container">
				<a className="create-btn"> Create Place</a>
			</div>
		</Fragment>
	);
}

export default FormGroup;
