import React from "react";
import styles from "../Styles/socialMedia.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function SocialMedia() {
  return (
    <div className={styles.socialMedia}>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      </a>
    </div>
  );
}

export default SocialMedia;
