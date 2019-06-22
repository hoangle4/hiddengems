import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default ({ getUser }) => (
	<Fragment>
		<img
			onLoad={getUser}
			src={spinner}
			style={{ width: '200px', margin: 'auto', display: 'block', zIndex: 99 }}
			alt="Loading..."
		/>
	</Fragment>
);
