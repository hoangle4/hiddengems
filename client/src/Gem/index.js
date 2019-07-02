import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Story from "./parts/Story";
import Comment from "./parts/Comment";
import GemNearby from "./parts/GemNearby";
import CommentList from "./parts/CommentList";

import Spinner from "../Components/Spinner";
import { Consumer } from "../context";
import placeDB from "../API/placeDB";

import BubbleNav from "../Components/BubbleNav";

import "./style.css";

class Gem extends Component {
  state = {
    dataReady: false,
    isLoggedIn: false,
    data: {},
    comments: []
  };
  componentDidMount = () => {
    this.getGem();
  };

  getGem = async () => {
    const result = await placeDB.findOnePlace(this.props.match.params.id);
    if (!result) return;
    this.setState({
      data: result.data,
      comments: result.data.comments,
      dataReady: true,
      placeID: this.props.match.params.id
    });
  };

  updateComment = async comments => {
    this.setState({ comments });
  };

  render() {
    const {
      dataReady,
      data: { photos, createdBy },
      data,
      placeID,
      comments
    } = this.state;
    return (
      <Consumer>
        {value => {
          const { isAuthenticated, loading } = value;
          return (
            <Fragment>
              {!loading && isAuthenticated && dataReady ? (
                <Fragment>
                  <div className="Gem_container">
                    <Story story={data} author={createdBy} photos={photos} />
                    {/* <GemNearby /> */}
                    <Comment
                      placeID={placeID}
                      updateComment={this.updateComment}
                    />
                    <div className="CommentList_box">
                      <h1 className="CommentList_h1"> Comments </h1>
                      {comments.length !== 0 ? (
                        <Fragment>
                          {comments.map(comment => (
                            <CommentList key={comment._id} comments={comment} />
                          ))}
                        </Fragment>
                      ) : (
                        <p>
                          This place has no comments. Do you want to be the
                          first to comment ?
                        </p>
                      )}
                    </div>
                  </div>
                  <BubbleNav />
                </Fragment>
              ) : (
                <Fragment>
                  {this.state.isLoggedIn ? (
                    <Fragment>
                      <Spinner
                        onLoad={() =>
                          setTimeout(
                            () => this.setState({ isLoggedIn: true }),
                            5000
                          )
                        }
                      />
                      <Spinner onLoad={this.getGem} />
                    </Fragment>
                  ) : (
                    <h5>
                      You're not login, plese <Link to="/login">log in</Link> to
                      see the story.
                    </h5>
                  )}
                </Fragment>
              )}
            </Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Gem;
