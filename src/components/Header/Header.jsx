import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

import "./Header.scss";

import SocialButton from "../SocialButton/SocialButton";

const Header = props => {
  console.log(props);

  return (
    <div className="Header">
      <Link className="link" to="/">
        <div style={{ paddingLeft: "20px" }}>{props.appTitle}</div>
      </Link>

      {props.socialButtons ? (
        <div className="social">
          {props.socialButtons.map(button => (
            <SocialButton
              key={button.path}
              path={button.path}
              // label={button.label}
              icon={button.icon}
            />
          ))}
        </div>
      ) : (
        ""
      )}

      {props.currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  );
};

export default Header;
