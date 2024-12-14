import React from "react";
import porudct from "../img/product category.svg";
import car from "../img/car.png";
import carkatta from "../img/uzuncar.png";
import carjicha from "../img/carjicha.svg";
function Katagory() {
  return (
    <>
      <section className="container">
        <h1 className="text-[28px]">Популярные категории</h1>
        <div className="flex items-center justify-between gap-5 mt-5">
          <div className="w-[250px]  h-[250px] bg-[rgb(241,241,241)] rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={porudct} alt="" />
            <p>Стартеры и комплектующие</p>
          </div>

          <div className="w-[250px]  h-[250px] bg-[rgb(241,241,241)] rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={porudct} alt="" />
            <p>Стартеры и комплектующие</p>
          </div>

          <div className="w-[250px]  h-[250px] bg-[rgb(241,241,241)] rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={porudct} alt="" />
            <p>Стартеры и комплектующие</p>
          </div>

          <div className="w-[250px]  h-[250px] bg-[rgb(241,241,241)] rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={porudct} alt="" />
            <p>Стартеры и комплектующие</p>
          </div>

          <div className="w-[250px]  h-[250px] bg-[rgb(241,241,241)] rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={porudct} alt="" />
            <p>Стартеры и комплектующие</p>
          </div>
        </div>
      </section>

      <section className="container">
        <h1 className="text-[32px]">Новости </h1>
        <div className="flex items-center justify-between gap-5 mt-5">
          <div className="w-full  h-auto rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={car} alt="" />
            <p className="text-[#121212] text-[16px]">
              Стартеры и комплектующие Заголовок в две строчки или в три строчки
              Стартеры и комплектующие Заголовок в две строчки или в три строчки
            </p>
          </div>

          <div className="w-full h-auto rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={car} alt="" />
            <p className="text-[rgb(224,100,22)] text-[16px]">
              Стартеры и комплектующие Заголовок в две строчки или в три строчки
              Стартеры и комплектующие Заголовок в две строчки или в три строчки
            </p>
          </div>

          <div className="w-full  h-auto  rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={car} alt="" />
            <p className="text-[#121212] text-[16px]">
              Стартеры и комплектующие Заголовок в две строчки или в три строчки
              Стартеры и комплектующие Заголовок в две строчки или в три строчки
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <img src={carkatta} alt="" />
      </section>

      <section className="container">
        <h1 className="text-[28px]">Популярные категории</h1>
        <div className="flex items-center justify-between gap-5 mt-5">
          <div className="w-[250px]  h-[250px] bg-[rgb(241,241,241)] rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={carjicha} alt="" />
            <p>Стартеры и комплектующие</p>
          </div>

          <div className="w-[250px]  h-[250px] bg-[rgb(241,241,241)] rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={carjicha} alt="" />
            <p>Стартеры и комплектующие</p>
          </div>

          <div className="w-[250px]  h-[250px] bg-[rgb(241,241,241)] rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={carjicha} alt="" />
            <p>Стартеры и комплектующие</p>
          </div>

          <div className="w-[250px]  h-[250px] bg-[rgb(241,241,241)] rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={carjicha} alt="" />
            <p>Стартеры и комплектующие</p>
          </div>

          <div className="w-[250px]  h-[250px] bg-[rgb(241,241,241)] rounded-md flex items-center flex-col gap-2 justify-center">
            <img src={carjicha} alt="" />
            <p>Стартеры и комплектующие</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Katagory;
