import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const navButtons = [
  {
    label: "Services",
    path: "/services",
    icon: <FontAwesomeIcon icon={faCompass} />
  },
  {
    label: "Near Me",
    path: "/nearme",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  {
    label: "Gallery",
    path: "/gallery",
    icon: <FontAwesomeIcon icon={faShoppingCart} />
  },
  {
    label: "About",
    path: "/about",
    icon: <FontAwesomeIcon icon={faUser} />
  }
];

export const socialButtons = [
  {
    label: "Instagram",
    path: "https://www.instagram.com/avtokorpus/",
    rel: "nofollow",
    target: "_blank",
    icon: <FontAwesomeIcon icon={faInstagram} />
  },
  {
    label: "Twitter",
    path: "/twitter",
    icon: <FontAwesomeIcon icon={faTwitter} />
  },
  {
    label: "Facebook",
    path: "/fb",
    icon: <FontAwesomeIcon icon={faFacebook} />
  }
];

export default navButtons;
