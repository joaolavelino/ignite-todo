import React from "react";
import logo from "../media/logo.png";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo of todo" />
    </header>
  );
};

export default Header;
