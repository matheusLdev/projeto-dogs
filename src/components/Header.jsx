import React from "react";
import styles from "./Header.module.css"
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const { data }  = useSelector(state => state.user);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/projeto-dogs/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/projeto-dogs/conta/">
            {data.username}
          </Link>
        ) : (
          <Link className={styles.login} to="/projeto-dogs/login/">
            Login / Criar Conta
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
