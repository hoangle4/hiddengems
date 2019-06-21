import React from 'react';
import './style.css';

function userBanner({ background, user: { avatar } }) {
	return (
		<div className="userBanner" style={{ backgroundImage: `URL('${background}')` }}>
			<img src={avatar} alt="smallProfile" className="profileImage" />
		</div>
	);
}

export default userBanner;
