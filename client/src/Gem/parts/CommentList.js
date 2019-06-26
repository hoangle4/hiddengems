import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const CommentList = ({ comments: { commentMessage, commentTitle, commentUser } }) => {
	useEffect = () => {};
	return (
		<div className="CommentList_commentbox">
			<Link to={`/profile/${commentUser}`}>
				<img className="Comment_list_img" src="..." alt="..." />
			</Link>
			<h5 className="CommentList_h5">{commentTitle}</h5>
			<p>{commentMessage}</p>
		</div>
	);
};
export default CommentList;
