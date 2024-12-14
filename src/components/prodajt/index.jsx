import React from "react";
import aksiya from "../img/photo.png";
import uzun from "../img/uzuncar.png";
import uzun1 from "../img/product category.svg";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
function Prodajt() {
  return (
    <section className="container">
      <h2 className="text-[30px]">Хиты продаж</h2>
      <div className="flex items-center justify-between gap-5 mt-10">
        <div className="flex flex-col gap-5 ">
          <div>
            <img src={aksiya} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[22px]">999999 ₽</h1>
            <p className="text-[17px]">
              Фара светодиодная дополнительная круглая, направленный свет, 14
              диодов, 42W, (115х42х142){" "}
            </p>
            <p className="text-[17px]">Кат. номер: AE42R-14LED-42HC</p>

            <Button>
              <ShoppingCartOutlined />В корзину
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-5 ">
          <div>
            <img src={aksiya} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[22px]">999999 ₽</h1>
            <p className="text-[17px]">
              Фара светодиодная дополнительная круглая, направленный свет, 14
              диодов, 42W, (115х42х142){" "}
            </p>
            <p className="text-[17px]">Кат. номер: AE42R-14LED-42HC</p>

            <Button>
              <ShoppingCartOutlined />В корзину
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-5 ">
          <div>
            <img src={aksiya} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[22px]">999999 ₽</h1>
            <p className="text-[17px]">
              Фара светодиодная дополнительная круглая, направленный свет, 14
              диодов, 42W, (115х42х142){" "}
            </p>
            <p className="text-[17px]">Кат. номер: AE42R-14LED-42HC</p>

            <Button>
              <ShoppingCartOutlined />В корзину
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-5 ">
          <div>
            <img src={aksiya} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[22px]">999999 ₽</h1>
            <p className="text-[17px]">
              Фара светодиодная дополнительная круглая, направленный свет, 14
              диодов, 42W, (115х42х142){" "}
            </p>
            <p className="text-[17px]">Кат. номер: AE42R-14LED-42HC</p>

            <Button>
              <ShoppingCartOutlined />В корзину
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-5 ">
          <div>
            <img src={aksiya} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[22px]">999999 ₽</h1>
            <p className="text-[17px]">
              Фара светодиодная дополнительная круглая, направленный свет, 14
              диодов, 42W, (115х42х142){" "}
            </p>
            <p className="text-[17px]">Кат. номер: AE42R-14LED-42HC</p>

            <Button>
              <ShoppingCartOutlined />В корзину
            </Button>
          </div>
        </div>
      </div>

      <img className="mt-12" src={uzun} alt="" />

      <div className="flex items-center justify-between gap-7 mt-10">
        <div className="border-[1px] border-gray-500 flex items-center gap-7 rounded-md p-5">
          <img src={uzun1} alt="" />
          <div className="flex flex-col gap-3">
            <h2 className="text-[rgb(245,110,30)]">Динамично</h2>
            <p>
              Мы предлагаем более 15000 наименований запчастей на все виды
              автотранспортных средств, тракторную и сельхозтехнику,
              спецтехнику.
            </p>
          </div>
        </div>
        <div className="border-[1px] border-gray-500 flex items-center gap-7 rounded-md p-5">
          <img src={uzun1} alt="" />
          <div className="flex flex-col gap-3">
            <h2 className="text-[rgb(245,110,30)]">Динамично</h2>
            <p>
              Мы предлагаем более 15000 наименований запчастей на все виды
              автотранспортных средств, тракторную и сельхозтехнику,
              спецтехнику.
            </p>
          </div>
        </div>
        <div className="border-[1px] border-gray-500 flex items-center gap-7 rounded-md p-5">
          <img src={uzun1} alt="" />
          <div className="flex flex-col gap-3">
            <h2 className="text-[rgb(245,110,30)]">Динамично</h2>
            <p>
              Мы предлагаем более 15000 наименований запчастей на все виды
              автотранспортных средств, тракторную и сельхозтехнику,
              спецтехнику.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prodajt;
