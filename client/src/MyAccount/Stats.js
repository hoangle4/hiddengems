import React, { useState, useEffect } from "react";
import "./stats.css";
const Statistics = ({ user: { follower, following, placeCreated }, user }) => {
  const [comments, setComments] = useState(0);
  const [likes, setLikes] = useState(0);
  let commentCount = 0;
  let likeCount = 0;
  const count = () => {
    placeCreated.forEach(place => {
      commentCount += place.comments.length;
      likeCount += place.likes.length;
    });
    setComments(commentCount);
    setLikes(likeCount);
  };
  useEffect(() => count(), []);
  console.log(placeCreated);
  return (
    <div className="Stats">
      <div className="Stats_Main">
        <div className="Stats_Left">
          <div className="Stats_Comments">
            <i className="fa fa-comments  Stats_Icon" />
            <h2 className=" Stats_Count_Title ">{comments}</h2>
            <div className="Stats_Line_Black" />
            <p className="Stats_Text">Comments</p>
          </div>

          <div className="Stats_Views">
            <i className="fas fa-eye  Stats_Icon" />
            <h2 className=" Stats_Count_Title ">367</h2>
            <div className="Stats_Line_Black" />
            <p className="Stats_Text">Views</p>
          </div>

          <div className="Stats_Views">
            <i className="fas fa-igloo  Stats_Icon" />
            <h2 className=" Stats_Count_Title ">{placeCreated.length}</h2>
            <div className="Stats_Line_Black" />
            <p className="Stats_Text">Stories</p>
          </div>
        </div>

        <div className="Stats_Right">
          <div className="Stats_Likes">
            <i className="fas fa-thumbs-up  Stats_Icon" />
            <h2 className=" Stats_Count_Title ">{likes}</h2>
            <div className="Stats_Line_Black" />
            <p className="Stats_Text">Likes</p>
          </div>

          <div className="Stats_Followers">
            <i className="fas fa-rss Stats_Icon" />
            <h2 className=" Stats_Count_Title ">{follower.length} </h2>
            <div className="Stats_Line_Black" />
            <p className="Stats_Text">Follower</p>
          </div>
          <div className="Stats_Folling">
            <i className="fas fa-user Stats_Icon" />
            <h2 className=" Stats_Count_Title ">{following.length} </h2>
            <div className="Stats_Line_Black" />
            <p className="Stats_Text">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
