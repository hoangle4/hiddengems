import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import userDB from "../../API/userDB";
const CommentList = ({
  comments: { commentMessage, commentTitle, commentUser }
}) => {
  const [user, setUser] = useState("");
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
        {!user ? (
          <Spinner />
        ) : (
          <img
            className="Comment_list_img"
            src={user.avatar}
            alt={commentTitle}
          />
        )}
      </Link>
      <div>
        <h5 className="CommentList_h5">{commentTitle}</h5>
        <p>{commentMessage}</p>
      </div>
    </div>
  );
};
export default CommentList;
