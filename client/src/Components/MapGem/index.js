import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truncate } from '../../Helper';
import Spinner from '../Spinner';
import './style.css';
function SideGem({ data: { photos, placeName, description, _id }, handleCloseSideBar }) {
	const [ truncatedTitle, setTruncatedTitle ] = useState('');
	// console.log(placeName);
	useEffect(() => {
		if (!placeName) return;
		console.log(Truncate(placeName, 10));
	}, []);
	return (
		<Fragment>
			<ul className="MainMap_Sidenav">
				<li>
					<b>
						<Link className="MapGem_Title" to={`/gem/${_id}`}>
							{truncatedTitle}
						</Link>
					</b>
				</li>
				<li>
					<img src={photos} className="MapGem_Img" alt="..." />
				</li>

				<li className="MapGem_Description">
					<b>{description}</b>
				</li>
				<li>
					<Link to={`/gem/${_id}`}>
						<i className="fa fa-book-reader" />
						<b>Read More</b>
					</Link>
				</li>
				<li>
					<a href="#" onClick={handleCloseSideBar}>
						<i className="fa fa-times" />
						<b>Close</b>
					</a>
				</li>
			</ul>
		</Fragment>
	);
}
export default SideGem;
