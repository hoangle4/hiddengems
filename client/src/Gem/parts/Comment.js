import React, { Fragment, useState } from 'react';
import placeDB from '../../API/placeDB';
const Comment = ({ placeID }) => {
	const [ title, setTitle ] = useState('');
	const [ message, setMessage ] = useState('');
	const handleOnChange = (event) => {
		const { parentNode, value } = event.target;
		parentNode.setAttribute('data-text', value);
	};

	const handleComment = async (event) => {
		event.preventDefault();
		const comment = await placeDB.addComment(title, message, placeID);
		console.log(comment);
		if (!comment) return console.error({ err: 'Error Commenting' });
		setTitle('');
		setMessage('');
	};
	return (
		<div className="Comment_box">
			<h1 className="Comment_h1">Add A Comment</h1>
			<div className="Comment_input_wrapper" data-text="">
				<input
					name="title"
					onChange={(e) => {
						handleOnChange(e);
						setTitle(e.target.value);
					}}
					className="Comment_input"
					type="text"
					placeholder="Title..."
					required
					value={title}
				/>
			</div>
			<div className="Comment_textarea_wrapper" data-text="">
				<textarea
					name="message"
					onChange={(e) => {
						setMessage(e.target.value);
						handleOnChange(e);
					}}
					className="Comment_textarea"
					type="text"
					placeholder="Comment..."
					required
					value={message}
				/>
			</div>
			<button onClick={handleComment} className="Comment_button">
				Comment
			</button>
		</div>
	);
};
export default Comment;
