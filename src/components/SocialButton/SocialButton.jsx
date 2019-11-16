import React from "react";
import "./SocialButton.scss";

const SocialButton = props => (
  <a href={props.path} className="atag">
    <div className="SocialButton">
      <div className="Icon">{props.icon}</div>
      <span className="Label">{props.label}</span>
    </div>
  </a>
);

export default SocialButton;
