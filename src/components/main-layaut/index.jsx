import React from "react";
import Navbar from "../navbar";
import { Outlet } from "react-router-dom";

const MainLayaut = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <div className="shop_bottom">
          <div className="bottom_box">
            <div className="box_item">
              <p className="bottom_title">Контакты</p>
              <p className="call_title">Call-центр</p>
              <p className="left_title">+998-78 555-35-00</p>
              <div className="call_title">Эл. почта</div>
              <p className="left_title">info@zon.uz</p>

              <p className="call_title">График работы</p>
              <div className="title_bottom_flex">
                <div className="divv">
                  <p className="bottom_title_mini">В будние</p>
                  <p className="bottom_title_mini">В с 09:00 до 18:00</p>
                </div>
                <div className="divv">
                  <p className="bottom_title_mini">В Суббота</p>
                  <p className="bottom_title_mini">В с 09:00 до 18:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom_box">
            <div className="box_item">
              <p className="bottom_title bottom">Компания</p>
              <p className="comp_title">О нас</p>
              <p className="comp_title">Реквизиты</p>
              <p className="comp_title">Контакты</p>
              <p className="comp_title">Карта сайта</p>
              <p className="comp_title">Публичная оферта</p>
              <p className="comp_title">Продавайте на Zon.uz</p>
              <p className="comp_title">Вакансии</p>
            </div>
          </div>
          <div className="bottom_box">
            <div className="box_item">
              <p className="bottom_title bottom">Помощь</p>
              <p className="comp_title">О нас</p>
              <p className="comp_title">Вопросы и ответы</p>
              <p className="comp_title">Контакты</p>
              <p className="comp_title">Способ оптлаты</p>
              <p className="comp_title">Доставка</p>
              <p className="comp_title">Возврат товаров</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainLayaut;
