import React, { useState } from "react";
import IconButton from "../IconButton/IconButton";
import AddCommentIcon from "../../assets/icons/AddCommentIcon";
import UserAvatar from "../UserAvatar/UserAvatar";
import userImage from "../../assets/images/Mohan-muruge.jpg";
import "./AddCommentForm.scss";
function AddCommentForm() {
  const [addComment, setAddComment] = useState("");
  //handle input change
  const handleChange = (e) => {
    setAddComment(e.target.value.toString());
  };
  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //add post api to submit the form
  };
  return (
    <form className="new-comment-form" onSubmit={handleSubmit}>
      <UserAvatar userImg={userImage} />
      <div className="new-comment-form__formfields">
        <div className="new-comment-form__container">
          <label className="new-comment-form__label" htmlFor="newComment">
            JOIN THE CONVERSATION
          </label>
          <textarea
            className="new-comment-form__input"
            id="newComment"
            name="addComment"
            placeholder="Add a new comment"
            value={addComment}
            onChange={handleChange}></textarea>
        </div>
        <IconButton icon={<AddCommentIcon />} text="COMMENT" type="submit" />
      </div>
    </form>
  );
}

export default AddCommentForm;
