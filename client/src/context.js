import React, { Component, useEffect } from 'react';
import setAuthToken from './Helper/setAuthToken';
import axios from 'axios';
const Context = React.createContext();

const getUser = async (dispatch, payload) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	} else {
		if (!payload)
			return dispatch({
				type: 'AUTH_ERROR',
				payload: null
			});
		setAuthToken(payload.token);
	}
	const result = await axios.get('/api/getUser');
	dispatch({
		type: 'USER_LOADED',
		payload: result.data
	});
};

const reducer = (action, state) => {
	switch (action.type) {
		case 'REGISTER_SUCCESS':
		case 'LOGIN_SUCCESS':
			localStorage.setItem('token', action.payload);
			return {
				...state,
				isAuthenticated: true,
				loading: false
			};
		case 'REGISTER_FAIL':
		case 'LOGIN_FAIL':
		case 'AUTH_ERROR':
		case 'LOG_OUT':
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false
			};
		case 'USER_LOADED':
			console.log('gothere');
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload
			};
		case 'GET_USER':
			axios.get('/api/getUser').then((result) => {
				return {
					user: result
				};
			});
			break;
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user: null,
		dispatch: (action) => this.setState((state) => reducer(action, state))
	};

	componentDidMount = () => {
		getUser(this.state.dispatch, this.state.token);
	};

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
