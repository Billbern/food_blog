import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="footer">
      <span>Copyright &copy; Simple Food 2020</span>
      <div className="follow_us">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon className="ig" icon={faInstagram} />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon className="tw" icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
