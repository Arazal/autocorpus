import React from "react";
// import Link from "next/link";
// import { withRouter } from "next/router";
import { Link, withRouter } from "react-router-dom";

import "./NavButton.scss";

const NavButton = props => {
  console.log(props);
  return (
    <Link to={props.path}>
      <div
        className={`NavButton ${
          props.history.location.pathname === props.path ? "active" : ""
        }`}
      >
        <div className="Icon">{props.icon}</div>
        <span className="Label">{props.label}</span>
      </div>
    </Link>
  );
};

export default withRouter(NavButton);
