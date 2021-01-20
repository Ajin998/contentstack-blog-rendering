import React from "react";
import styles from "../styles/Header.module.css";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className={styles["header__nav"]}>
      {/* logo */}
      <img
        className={styles["header__logo"]}
        src="https://t3.ftcdn.net/jpg/03/69/72/20/360_F_369722024_ddxHImowV6qAvFUdhari9ucvncbstW9N.jpg"
        alt="blog-logo"
      />
      {/* search */}
      <div className={styles["header__content"]}>
        <input type="text" className={styles["header__search"]} />
        <Button color="primary">
          <SearchIcon style={{ fill: "#CAAB6F" }} />
        </Button>
        {/* navlinks */}
        <a className={styles["links"]} href="/">
          Home
        </a>
        <a className={styles["links"]} href="#">
          About
        </a>
        <a className={styles["links"]} href="/">
          Blogs
        </a>
      </div>
    </nav>
  );
}

export default Header;
