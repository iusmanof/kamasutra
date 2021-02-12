import React from "react";
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={`${style.header}`}>
      <img className={`${style.header__img}`} src="https://www.freelogodesign.org/Content/img/logo-samples/flooop.png" />
      <h1 className={`${style.header__title}`}>Install and config CyberArk</h1>
    </header>
  );
};


export default Header;