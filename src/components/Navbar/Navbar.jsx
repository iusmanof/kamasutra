import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${style.list}`}>
      <ul>
        <li className={`${style.list__item}`}>
          <NavLink
            className={`${style.link}`}
            activeClassName={style.link__active}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className={`${style.list__item}`}>
          <NavLink
            className={`${style.link}`}
            activeClassName={style.link__active}
            to="/dialogs"
          >
            Dialogs
          </NavLink>
        </li>
        <li className={`${style.list__item}`}>
          <NavLink className={`${style.link}`} to="/Vault">
            Vault
          </NavLink>
        </li>
        <li className={`${style.list__item}`}>
          <NavLink className={`${style.link}`} to="/PVWA">
            PVWA
          </NavLink>
        </li>
        <li className={`${style.list__item}`}>
          <NavLink className={`${style.link}`} to="/CPM">
            CPM
          </NavLink>
        </li>
        <li className={`${style.list__item}`}>
          <NavLink className={`${style.link}`} to="/PSM">
            PSM
          </NavLink>
        </li>
        <li className={`${style.list__item}`}>
          <NavLink className={`${style.link}`} to="/PTA">
            PTA
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
