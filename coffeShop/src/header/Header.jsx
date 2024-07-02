import React from "react";
import style from "../header/header.module.css";
import Logo from '../img/logo.svg'
const Header = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.left}>
          <img src={Logo} alt="" />
        </div>
        <div className={style.right}>
          <ul>
            <li>About Us</li>
            <li>Our Product</li>
            <li>Delivery</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
