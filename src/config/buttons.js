import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faPhoneSquareAlt,
  faImages,
  faCogs
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faTwitter,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const navButtons = [
  {
    label: "Услуги",
    path: "/services",
    icon: <FontAwesomeIcon icon={faCogs} />
  },
  {
    label: "На карте",
    path: "/nearme",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />
  },
  // {
  //   label: "Галерея",
  //   path: "/gallery",
  //   icon: <FontAwesomeIcon icon={faImages} />
  // },
  {
    label: "О нас",
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
    label: "Phone",
    // path: "https://www.instagram.com/avtokorpus/",
    rel: "nofollow",
    path: "tel:+79175155515",
    icon: <FontAwesomeIcon icon={faPhoneSquareAlt} />
  }
  // {
  //   label: "Twitter",
  //   path: "/twitter",
  //   icon: <FontAwesomeIcon icon={faTwitter} />
  // },
  // {
  //   label: "Facebook",
  //   path: "/fb",
  //   icon: <FontAwesomeIcon icon={faFacebook} />
  // }
];

export default navButtons;
