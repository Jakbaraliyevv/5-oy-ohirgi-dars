import React from "react";
import logo from "../img/logo.svg";
import showcase from "../img/showcase.png";
import { Button, Input } from "antd";
import {
  HeartOutlined,
  MenuOutlined,
  PhoneOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
function Navbar() {
  return (
    <header className="container ">
      <div className="flex items-center justify-between gap-4">
        <img src={logo} alt="" />
        <Button className="">
          <MenuOutlined />
          Katalog
        </Button>
        <form className="flex items-center  w-[50%] h-[30px] border-[1px] border-gray-500 rounded-md pl-2 ">
          <input
            className="border-none outline-none w-[96%] h-full rounded-md"
            type="text"
            placeholder="Search"
          />
          <SearchOutlined classID="w-[4%] " />
        </form>

        <div className="flex items-center flex-col ">
          <HeartOutlined />
          <p>Корзина</p>
        </div>
        <div className="flex items-center flex-col ">
          <ShoppingCartOutlined />
          <p>Избранное</p>
        </div>
        <div className="flex items-center flex-col ">
          <UserOutlined />
          <p>Профиль</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 mt-3">
        <button>Динамично. Надежно. Доступно.</button>

        <select className="border-none outline-none" name="" id="">
          <option value="">Uz</option>
          <option value="">Ru</option>
        </select>

        <select className="border-none outline-none" name="" id="">
          <option value="">О компании</option>
          <option value="">О компании</option>
        </select>
        <select className="border-none outline-none" name="" id="">
          <option value="">О Клиентам</option>
          <option value="">О Клиентам</option>
        </select>
        <p>Сотрудничество</p>
        <p>Контакты</p>

        <a href="tel:+998902006469">+998 90 200 6469</a>
        <Button>
          <PhoneOutlined />
          Заказть звонок
        </Button>
      </div>

      <div className="mt-5">
        <img src={showcase} alt="" />
      </div>
    </header>
  );
}

export default Navbar;
