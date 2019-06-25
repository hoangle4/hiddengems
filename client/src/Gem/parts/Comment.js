import React, { useState } from "react";

const Comment = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const handleOnChange = event => {
    const { parentNode, value } = event.target;
    parentNode.setAttribute("data-text", value);
  };

  const handleComment = event => {
    console.log("commented");
  };
  return (
    <div className="Comment_box">
      <h1 className="Comment_h1"> Comments: </h1>
      <div className="Comment_input_wrapper" data-text="">
        <input
          name="title"
          onChange={e => {
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
          onChange={e => {
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
