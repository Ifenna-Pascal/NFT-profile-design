import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nfts } from "../utils/nft_carousel";

function Hero() {
  const settings = {
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full py-12 h-screen lg:h-[80vh] flex flex-col items-center justify-center bg-cover bg-no-repeat bg-hero">
      <div className="container grid grid-cols-1  lg:grid-cols-2">
        <div className="py-6">
          <div className="w-full lg:w-[75%] py-6">
            <h1 className="font-bold lg:leading-[5rem] mb-4 lg:mb-8 font-manrope text-white text-[2.3rem] lg:text-[4.2rem]">
              Welcome To The Rockstar Apes.
            </h1>
            <span className="text-white text-lg md:text-xl">
              Rock Star Apes is a community of artists who support each other
              through fun and exciting collaborations. One of our goals is to
              help each other find success in our art form. We also have some
              pretty sweet perks every month!
            </span>
          </div>
          <div className="flex mt-3 lg:mt-6 items-center">
            <button className="mr-2 bg-[#E5A301] text-white w-[8rem] text-base font-semibold rounded-md flex flex-col items-center px-4 py-4">
              Mint Now
            </button>
            <button className="bg-[#E5A301] text-white text-base w-[8rem] font-semibold rounded-md flex flex-col items-center px-4 py-4">
              Stake
            </button>
          </div>
        </div>
        <div className="flex w-full h-full flex-col justify-center">
          <Slider {...settings}>
            {nfts.map((x, i) => (
              <Image
                key={i}
                src={x}
                width="100%"
                height="90%"
                layout="responsive"
                objectFit="contain"
                className="skew-y-[6deg]"
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Hero;
