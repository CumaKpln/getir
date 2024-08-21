import React from "react";

export default function Cards() {
  const cards = [
    {
      id: 1,
      image:
        "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
      title: "Her siparişine bir kampanya",
      description:
        "Getir’de vereceğin her siparişe uygun bir kampanya  bulabilirsin.",
    },
    {
      id: 2,
      image:
        "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
      title: "Dakikalar içinde kapında",
      description: "Getir’le siparişin dakikalar içinde kapına gelir.",
    },
    {
      id: 3,
      image:
        "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg",
      title: "Binlerce çeşit mutluluk",

      description: "Getir’de binlerce çeşit arasından seçimini yapabilirsin.",
    },
  ];
  return (
      <div className="container mx-auto mt-10 grid grid-cols-3 gap-x-4">
        {cards.length &&
          cards.map((cards) => (
            <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center text-center">
              <img className="" src={cards.image} alt="" />
              <p className="font-semibold text-lg text-[#5d3ebc]">{cards.title}</p>
              <p className="text-base ">{cards.description}</p>
            </div>
          ))}
      </div>
  );
}
