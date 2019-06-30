import React, { useState, useEffect } from 'react';
import userDB from '../../API/userDB';
import firebaseStorage from '../Firebase';
import spinner from '../Spinner/spinner.gif';
import './style.css';
import moment from 'moment';

const UserBanner = ({ user }) => {
	const [ avatar, setAvatar ] = useState('');
	const [ progress, setProgress ] = useState(0);
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

	useEffect(
		() => {
			upLoadImage();
		},
		[ avatar ]
	);

	useEffect(
		() => {
			runAnimation();
		},
		[ progress ]
	);

	const runAnimation = async () => {
		const circle = await document.querySelector('circle');
		const radius = await circle.r.baseVal.value;
		const circumference = (await radius) * 2 * Math.PI;

		circle.style.strokeDasharray = await `${circumference} ${circumference}`;
		circle.style.strokeDashoffset = await `${circumference}`;

		const offset = (await circumference) - progress / 100 * circumference;
		circle.style.strokeDashoffset = offset;
		if (progress == 100)
			setTimeout(() => {
				setProgress(0);
			}, 2000);
	};

	const upLoadImage = async () => {
		if (!isUploaded) return;
		const result = await userDB.updateUserAvatar(avatar);
		if (!result);
		await setAvatar(result.data);
		setIsUploaded(false);
	};

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

		setIsUploaded(true);

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
				});
			}
		);
	};

	return (
		<div className="userBanner">
			<div className="UserBanner_avatar-wrapper">
				<img src={!isUploaded ? avatar : spinner} className="UserBanner_profile-pic" />
				<div className="UserBanner_upload-button">
					<svg className="UserBanner_progress_ring" width="150" height="150">
						<circle
							className="UserBanner_progress_ring_circle"
							stroke="#6f70f5"
							strokeWidth="4"
							fill="transparent"
							r="73"
							cx="0"
							cy="0"
						/>
					</svg>
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
