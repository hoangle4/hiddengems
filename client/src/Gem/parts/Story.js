import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Chip from "./Chip";
import Spinner from "../../Components/Spinner";
import { Consumer } from "../../context";
import placeDB from "../../API/placeDB";

const Story = ({
  story: { description, placeName, _id, coordinates, dateCreated, likes },
  author,
  photos,
  getGem
}) => {
  console.log(author);
  return (
    <Consumer>
      {value => {
        const { user, isAuthenticated } = value;
        return (
          <Fragment>
            {!isAuthenticated ? (
              <Spinner onLoad={() => setTimeout(() => window.reload(), 3000)} />
            ) : (
              <Fragment>
                {!user ? (
                  <Spinner />
                ) : (
                  <div className="Story_box">
                    <div className="Story_box_container">
                      <h1 className="Story_h1">{placeName}</h1>
                      <div className="Story-sub-header">
                        {author ? (
                          <Chip author={author} />
                        ) : (
                          <div>Author does not exist</div>
                        )}
                        <img className="Story_image" alt="Gem" src={photos} />
                      </div>
                      <div className="Story-textbox">
                        <i className="fas fa-quote-left fa2" />
                        <i
                          className="far fa-thumbs-up Story_Like_Btn"
                          onClick={async () => {
                            const liked = await placeDB.addLike(_id, user._id);
                            if (!liked) return;
                            console.log(liked);
                            getGem();
                          }}
                        >
                          <span className="Story_Like_Btn_Span">
                            {likes.length}
                          </span>
                        </i>
                        <p className="Story_p">{description}</p>
                        <i className="Story_Signed">
                          {author.firstName} {author.lastName}:{" "}
                          {moment(new Date(dateCreated)).format("MM/DD/YYYY")}
                        </i>
                        <i className="fas fa-quote-right fa1" />
                      </div>
                    </div>
                  </div>
                )}
              </Fragment>
            )}
          </Fragment>
        );
      }}
    </Consumer>
  );
};

export default Story;
