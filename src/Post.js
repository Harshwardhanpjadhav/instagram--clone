import React from "react";
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function Post(props) {
  return (
    <div className="post">
      {/* username and icon */}
      <header className="post-header">
       
        <Stack direction="row" spacing={3} className="account-circle">
         <Avatar
        alt={props.username}
        src={props.imageUrl}
        sx={{ width: 46, height: 46 }}
      />
    </Stack>
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
