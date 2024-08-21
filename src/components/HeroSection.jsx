import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ReactFlagsSelect from "react-flags-select";

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };
  const settings = {
    dots: false,
    fade: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div className="relative before:bg-gradient-to-r before:from-[#5d3ebc] before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      <Slider {...settings}>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
            alt=""
          />
        </div>{" "}
        <div>
          <img
            className="w-full h-[500px] object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            alt=""
          />
        </div>
      </Slider>
      <div className="container absolute top-0 left-1/2 -translate-x-1/2 h-full z-20 flex justify-between items-center">
        <div>
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="mt-8 text-4xl text-white font-semibold">
            Dakikalar içinde kapında{" "}
          </h3>
        </div>

        <div className="w-[400px] rounded-lg bg-gray-50 p-6">
          <h5 className="text-center text-[#5d3ebc] font-semibold fw-600">
            Giriş yap veya kayıt ol
          </h5>
          <div className="flex mt-5 gap-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              placeholder="Select Language"
              onSelect={(code) => setSelected(code)}
              selected={selected}
            />

            <input
              type="text"
              placeholder="Telefon Numarası"
              className="outline-[#5d3ebc] h-11 px-4 border-2 border-gray-200 rounded w-full justify-center"
            />
          </div>
          <button className="bg-[#ffd300] w-full p-3 rounded-lg mt-2 text-[#5d3ebc] font-semibold text-sm hover:bg-[#5d3ebc] hover:text-[#ffd300] transition duration-300">
            Telefon Numarası ile Devam Et
          </button>
        </div>
      </div>
    </div>
  );
}
