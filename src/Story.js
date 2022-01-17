import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "./Story.css";
import logo from './st.jpeg';

export default function Story() {
  return (
    <div className="story">
      <span className="user1">
      <Stack direction="row" spacing={3}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
      </span>
      
      <span className="user1">
      <Stack direction="row" spacing={3}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814_1280.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
      </span>
      

      <span className="user1">
      <Stack direction="row" spacing={3}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2021/06/25/13/22/girl-6363743_1280.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
      </span>
      

      <span className="user1">
      <Stack direction="row" spacing={3}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
      </span>
      


      <span className="user1">
      <Stack direction="row" spacing={3}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn.pixabay.com/photo/2014/10/06/17/30/child-476507_1280.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
      </span>
      

      <span className="user1">
      <Stack direction="row" spacing={3}>
        <Avatar
          alt="Remy Sharp"
          src={logo}
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
      
      </span>
      

     

     
    </div>
  );
}
