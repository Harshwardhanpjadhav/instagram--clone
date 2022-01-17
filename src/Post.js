import React from "react";
import "./Post.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Post(props) {
  return (
    <div className="post">
      {/* username and icon */}
      <header className="post-header">
        <AccountCircleIcon className="account-circle" />
        {props.username}
      </header>

      {/* post image */}

      <img
        className="postimage"
        src={props.imageUrl}
        alt=""
      />

      {/* comment and username */}

      <div className="post-comment">
        <h4 className="comment">
          <strong> {props.username}: </strong>Captions: {props.comment}
        </h4>
      </div>
    </div>
  );
}
