import React from "react";
import logo from "../img/fooer.svg";
function Footer() {
  return (
    <div className="mt-12 pt-5 pb-5 bg-[rgb(241,241,241)]">
      <footer className="container flex items-start justify-between">
        <div className="flex flex-col gap-4 ">
          <div>
            <img src={logo} alt="" />
          </div>
          <p>Оптовая продажа запчастей на все виды автотранспортных средств</p>
          <p>ИП Хомченко Максим Альбертович ОГРНИП 000000000 </p>
          <p>О1993 - 2022 © АвтоЭлектрикатотранспортных средств</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[22px]">О компании</p>
          <a className="text-[17px]" href="#">
            Документы и реквизиты
          </a>
          <a className="text-[17px]" href="#">
            Бренды
          </a>
          <a className="text-[17px]" href="#">
            Сотрудники
          </a>
          <a className="text-[17px]" href="#">
            Контакты
          </a>
          <a className="text-[17px]" href="#">
            Карьера
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[22px]">О компании</p>
          <a className="text-[17px]" href="#">
            Документы и реквизиты
          </a>
          <a className="text-[17px]" href="#">
            Бренды
          </a>
          <a className="text-[17px]" href="#">
            Сотрудники
          </a>
          <a className="text-[17px]" href="#">
            Контакты
          </a>
          <a className="text-[17px]" href="#">
            Карьера
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[22px]">О компании</p>
          <a className="text-[17px]" href="#">
            Документы и реквизиты
          </a>
          <a className="text-[17px]" href="#">
            Бренды
          </a>
          <a className="text-[17px]" href="#">
            Сотрудники
          </a>
          <a className="text-[17px]" href="#">
            Контакты
          </a>
          <a className="text-[17px]" href="#">
            Карьера
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
