import React, { Component } from 'react';
import './style.css';
import API from '../../API/userDB';
import Spinner from '../Spinner';

class UserSearch extends Component {
	state = {
		firstName:'',
		users:[]
	};

	handleOnChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	userSearch = async (event) => {
		event.preventDefault();
		const results = await API.userSearch(this.state.firstName);
		console.log(results)
		if(!results) return; 
		this.setState({
			users:results.data
		});
	};

	render() {
		console.log(this.state.users)
		return (

			<div className="Search">
				<div className="Search-container">
					<form className="Search-form" onSubmit={this.userSearch}>

 						<p className="Search-input-label">First Name</p>
						<input
							required
							className="Search-form-field"
							type="text"
							name="firstName"
							value={this.state.firstName}
							onChange={this.handleOnChange}/>
						<button className="Search-submit-btn" type="submit">
							Search for Portlandian
						</button>
					</form>
				</div>
			</div>
		)}
};


export default UserSearch;
