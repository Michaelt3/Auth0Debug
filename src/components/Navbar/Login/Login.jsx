import React, { Fragment } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function Login() {
  return (
    <Fragment>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </Fragment>
  );
}

export default Login;
