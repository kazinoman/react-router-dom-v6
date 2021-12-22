import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <Link to="/" className={styles.Nav_item}>
        Home
      </Link>
      <Link to="/about" className={styles.Nav_item}>
        About
      </Link>
      <Link to="/welcome" className={styles.Nav_item}>
        Welcome
      </Link>
    </div>
  );
};

export default Header;
