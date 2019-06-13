import React from 'react';
import './mapforms.css';
function index() {
	return (
		<div className="form-group">
			<ul>
				<li>
					<label htmlFor="placeName">Place Name</label>
					<input name="placeName" placeholder="" />
				</li>
				<li>
					<label htmlFor="category">Category</label>
					<select name="category">
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="fiat">Fiat</option>
						<option value="audi">Audi</option>
					</select>
				</li>
				<li>
					<label htmlFor="placeName">Place Name</label>
					<input name="placeName" placeholder="" />
				</li>
				<li>
					<label htmlFor="placeName">Place Name</label>
					<input name="placeName" placeholder="" />
				</li>
				<li>
					<label htmlFor="placeName">Place Name</label>
					<input name="placeName" placeholder="" />
				</li>
			</ul>
		</div>
	);
}

export default index;
