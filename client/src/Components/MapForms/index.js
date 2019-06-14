import React, { Component } from 'react';
import FromGroup from './FormGroup';
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

	render() {
		const { isPinDropped } = this.props;
		return (
			<div
				className="form-group"
				style={isPinDropped ? { height: '80vh', display: 'block' } : { display: 'none' }}
			>
				<FromGroup value={this.state} handleOnChange={this.handleOnChange} />
			</div>
		);
	}
}

export default index;
