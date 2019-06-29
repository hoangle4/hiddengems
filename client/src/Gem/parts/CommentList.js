import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userDB from '../../API/userDB';
const CommentList = ({ comments: { commentMessage, commentTitle, commentUser } }) => {
	const [ user, setUser ] = useState('');
	const getUser = async () => {
		const user = await userDB.userSearch2(commentUser);
		setUser(user.data[0]);
	};
	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className="CommentList_commentbox">
			<Link to={`/profile/${commentUser}`}>
				<img className="Comment_list_img" src={user.avatar} alt={commentTitle} />
			</Link>
			<div className="CommentList_text">
				<h5 className="CommentList_h5">{commentTitle}</h5>
				<p className="CommentList_message">{commentMessage}</p>
			</div>
		</div>
	);
};
export default CommentList;
