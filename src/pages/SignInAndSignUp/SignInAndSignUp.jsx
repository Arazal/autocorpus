import React from "react";

import SignIn from "../../components/SignIn/SignIn";

import SignUp from "../../components/SignUp/SignUp";

import "./SignInAndSignUp.scss";

const SignInAndSignUpPage = () => (
  <div className="signinandsignup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
