import React, { Fragment } from 'react';
import './mapgem.css';
import Spinner from '../Spinner';
export default function index({ isMarkerClicked, isMarkerData, data: { photos, placeName, description, _id } }) {
	return (
		<Fragment>
			<div className={`gemCard ${isMarkerClicked ? 'card-active' : ''}`}>
				<div className="card">
					{isMarkerData ? (
						<Fragment>
							<img src={photos} className="card-img-top" alt="..." />
						</Fragment>
					) : (
						<Spinner />
					)}
					<div className="card-body">
						<h5 className="card-title">{placeName}</h5>
						<p className="card-text">{description}</p>
						<div className="btn-div" style={{ textAlign: 'center' }}>
							<a href={`/gem/${_id}`} className="btn-learnmore">
								Read More
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
