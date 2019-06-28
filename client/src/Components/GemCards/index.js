import React from 'react';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function GemCards({ placeCreated, user, deleteClick }) {
	const showCrud = user._id === placeCreated[0].createdBy;
	console.log(showCrud);

	return (
		<div className="GemCards-gemContainer">
			{placeCreated.map((place) => (
				<div key={place._id} className="gemLink">
					<a href={`/gem/${place._id}`}>
						<div className="GemCards-gemBox">
							<img style={{ width: '200px', height: '200px' }} src={place.photos} alt={place.placeName} />
							<div className="GemCards-text-container">
								<h3 className="GemCards-Name">{place.placeName}</h3>
								<p className="GemCards-truncGem">{place.description}</p>
							</div>
						</div>
					</a>
					<div>
						{showCrud ? (
							<div className="GemCards-button-container">
								<button type="submit" className="GemCards-editBtn" id={place._id}>
									<i className="fas fa-edit" />
								</button>
								<button
									type="submit"
									className="GemCards-deleteBtn"
									id={place._id}
									onClick={() => deleteClick(place._id)}
								>
									<i className="fas fa-trash" />
								</button>
							</div>
						) : null}
					</div>
				</div>
			))}
		</div>
	);
}

export default GemCards;
