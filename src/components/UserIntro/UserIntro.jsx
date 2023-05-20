import React from "react";
import { Button } from "react-bootstrap";
import avatar from "../../assets/images/Avatar.png";

const UserIntro = () => {
  return (
    <div className="user-intro">
      <div className="user">
        <div>
          <img src={avatar} alt="avatar" />
          <div>Hi, user let's get started</div>
        </div>
        <Button>Join now</Button>
        <Button>Log in</Button>
      </div>
      <div>Get Us $10 off with a new supplier</div>
      <div>Send quoteswith supplier preferences</div>
    </div>
  );
};

export default UserIntro;
