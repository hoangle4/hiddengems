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
		const showUsers = this.state.users.length > 0;
		return (
			<div className="Search">
				<div className="Search-container">
					<form className="Search-form" onSubmit={this.userSearch}>

 						<h3 className="Search-input-label">First Name</h3>
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
				<div>
				{showUsers ?(
					<div className = "userResults">
						<div className = "Results-container">							
							{this.state.users.map(user => (
							<a key={user._id} href={`/gem/${user._id}`} className="gemLink">
							<div className = "userBox">
								<img
								style={{ width: "200px", height: "200px" }}
								src={user.photos}
								alt={user.userName}
								/>
								<h3>{user.userName}</h3>
								<p classname="truncGem">{user.description}</p>
							</div>
							</a>
							))}
						</div>
					</div>
					):(<div></div>)};
				</div>				
			</div>			
		)};
};


export default UserSearch;
