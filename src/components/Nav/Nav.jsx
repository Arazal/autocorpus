import React from "react";
import "./Nav.scss";

import NavButton from "../NavButton/NavButton";

const Nav = props => (
  <div className="Nav">
    {props.navButtons.map(button => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
  </div>
);

export default Nav;
