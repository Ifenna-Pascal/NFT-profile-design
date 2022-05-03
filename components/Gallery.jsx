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
    infinite: true,
    dots: true,
    arrows: false,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 300
  };
  return (
    <div className="bg-section2 bg-no-repeat bg-cover">
      <div className="container py-24 lg:py-32">
        <div className="flex mb-8 flex-col mb-12 items-center justify-center">
          <span className="font-bold capitalize lg:leading-[4rem] mb-2 lg:mb-4 font-manrope font-manrope text-white text-[2rem] lg:text-[3.6rem]">
            Rockstar Apes Collectibles
          </span>
          <span className="lg:text-lg text-center mb-3 max-w-[70%] mx-auto text-lg block text-gray-500 font-manrope">
            Entering The Rockstar Society means joining an family full of people
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
                objectFit="contain"
              />
            ))}
        </Slider>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
 