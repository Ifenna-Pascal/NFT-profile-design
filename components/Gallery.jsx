import React from "react";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gallery } from "../utils/nft_carousel";


function Gallery() {
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    focusOnSelect: true,
    draggable: true,
    infinite: true,
    arrows: false,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 300
  };
  return (
    <div id="art" className="bg-no-repeat bg-center bg-cover">
      <div className="container py-16 lg:py-32">
        <div className="flex mb-8 flex-col mb-12 items-center justify-center">
          <span className="font-bold capitalize lg:leading-[4.3rem] leading-[2.6rem] mb-4 lg:mb-4 text-center font-manrope text-white text-[2.1rem] lg:text-[3.8rem]">
            Alpha Sheep Club Collectibles
          </span>
          <span className="lg:text-lg text-center mb-3 max-w-full md:max-w-[60%] mx-auto text-lg block text-gray-400 font-manrope">
            Entering the Alpha Sheep Club means joining an family full of people
            who believe in the future of Cryptocurrencies and the Blockchain
            technology.
          </span>
        </div>
        <div className="flex w-full h-full flex-col justify-center">
          <Slider {...settings}>
          {gallery.map((x, i) => (
              <Image
                key={i}
                src={x}
                width="100%"
                height="90%"
                layout="responsive"
                objectfit="contain"
              />
            ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
 