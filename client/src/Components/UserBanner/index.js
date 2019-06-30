import React, { useState, useEffect } from 'react';
import firebaseStorage from '../Firebase';
import './style.css';
import moment from 'moment';

const UserBanner = ({ user }) => {
	const [ avatar, setAvatar ] = useState('');
	const [ progress, setProgress ] = useState('');
	const [ isUploaded, setIsUploaded ] = useState(false);
	const [ dateCreated, setDataCreated ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	useEffect(() => {
		setAvatar(user.avatar);
		setDataCreated(user.dateCreated);
		setFirstName(user.firstName);
		setLastName(user.lastName);
	}, []);

	const handleFileChange = (e) => {
		if (!e.target.files[0]) {
			console.error({ uploadErr: ' file not found, please upload file again' });
			return;
		}
		const { files } = e.target;
		const { name, type, size } = files[0];

		if (!files || size > 5000000) {
			console.error({ uploadErr: ' file too big, maximum size : 5mb' });
			return;
		}

		const storageRef = firebaseStorage.ref('placePhotos/' + name);
		const upLoadFile = storageRef.put(files[0], { type });

		upLoadFile.on(
			'state_changed',
			async (results) => {
				let progressing = (await (results.bytesTransferred / results.totalBytes)) * 100;
				// console.log("Upload is " + progress + "% done");
				setProgress(progressing);
			},
			(err) => console.log(err),
			() => {
				// Upload completed successfully, now we can get the download URL
				upLoadFile.snapshot.ref.getDownloadURL().then((downloadURL) => {
					setAvatar(downloadURL);
					setIsUploaded(true);
				});
			}
		);
	};

	return (
		<div className="userBanner">
			<div className="UserBanner_avatar-wrapper">
				<img src={avatar} className="UserBanner_profile-pic" />
				<div className="UserBanner_upload-button">
					<i
						className="fa fa-arrow-circle-up"
						aria-hidden="true"
						onClick={(e) => e.target.parentNode.nextElementSibling.click()}
					/>
				</div>
				<input className="UserBanner_file-upload" type="file" accept="image/*" onChange={handleFileChange} />
			</div>
			<div className="userBanner-display-info">
				<p>
					{firstName} {lastName}
				</p>
				<small>Member Since: {moment(new Date(dateCreated)).format('MM/YYYY')}</small>
			</div>
		</div>
	);
};

export default UserBanner;
