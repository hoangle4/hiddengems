import React, { Component } from 'react';
import FromGroup from './FormGroup';
import db from '../../API/db';
import './mapforms.css';
class index extends Component {
	state = {
		placeName: '',
		photos: '',
		category: '',
		description: ''
	};

	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleOnClick = async (e) => {
		const results = await db.createPlace(this.state);
		console.log(results);
	};

	render() {
		const { isPinDropped } = this.props;
		return (
			<div
				className="form-group"
				style={isPinDropped ? { height: '80vh', display: 'block' } : { display: 'none' }}
			>
				<FromGroup value={this.state} handleOnChange={this.handleOnChange} handleOnClick={this.handleOnClick} />
			</div>
		);
	}
}

export default index;
