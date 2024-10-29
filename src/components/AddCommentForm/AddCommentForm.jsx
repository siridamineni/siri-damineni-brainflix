import React, { useState } from "react";
import IconButton from "../IconButton/IconButton";
import AddCommentIcon from "../../assets/icons/AddCommentIcon";
import UserAvatar from "../UserAvatar/UserAvatar";
import FormField from "../FormField/FormField";
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

    //reset the form
    setAddComment("");
  };
  return (
    <form className="new-comment-form" onSubmit={handleSubmit}>
      <div className="new-comment-form__img-container">
        <UserAvatar userImg={userImage} />
      </div>
      <div className="new-comment-form__formfields">
        <FormField
          isTextArea
          label={"join the conversation"}
          id={"comment"}
          name="comment"
          placeholder="Add a New Comment"
          inputValue={addComment}
          handleChange={handleChange}
        />
        <div className="new-comment-form__btn-container">
          <IconButton icon={<AddCommentIcon />} text="COMMENT" type="submit" />
        </div>
      </div>
    </form>
  );
}

export default AddCommentForm;
