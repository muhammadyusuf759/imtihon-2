import {
  BadgeAlert,
  Earth,
  FolderClosed,
  MapPin,
  Menu,
  Phone,
  Rows4,
  ShoppingBag,
  ShoppingCart,
  Store,
} from "lucide-react";
import React, { useContext } from "react";
import logo from "../../assets/img/header_logo.svg";
import link from "../../assets/img/Link.svg";
import { Badge, Button } from "antd";
import { ShopContext } from "../../context/shop-context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { state, _ } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <>
      <header className="container header">
        <div className="first_box">
          <li className="first_boxs_items">
            <MapPin className="icons" />
            <p className="first_box_title">Город</p>
            <p className="first_box_link">Ташкент</p>
          </li>
          <li className="first_boxs_items">
            <Store className="icons" />
            <p className="first_box_linkk">Продавайтена Zon.uz</p>
          </li>
          <li className="first_boxs_items">
            <FolderClosed className="icons" />
            <p className="first_box_title">Покупать как юрлицо</p>
          </li>
          <li className="first_boxs_items">
            <p className="first_box_title">Помощь</p>
          </li>
          <li className="first_boxs_items">
            <p className="first_box_title">Контакты </p>
          </li>
        </div>
        <div className="div">
          <Menu className="menu" />
        </div>

        <div className="left_box">
          <Phone className="icons" />
          <p className="number-title">+998-78 555-35-00</p>
        </div>
      </header>
      <hr />
      <nav className="navbar">
        <div className="container">
          <div className="big_navbar">
            <div className="navbar_first_box">
              <img src={logo} alt="" className="logo" />
              <img src={link} alt="" className="link" />
              <form>
                <input
                  type="text"
                  placeholder="Найти товары"
                  className="form"
                />
              </form>
            </div>
            <div className="navbar_left_box">
              <div onClick={() => navigate("/shop")}>
                <Badge count={state.data.length}>
                  <ShoppingBag className="nav_icons" />
                </Badge>
              </div>
              <div className="navbarr">
                <Earth className="nav_icons" />
                <p className="lang">RU</p>
              </div>

              <BadgeAlert className="nav_icons" />
              <Rows4 className="nav_icons" />
              <Button type="primary">Войти</Button>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
