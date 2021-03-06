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
    <div
      id="home"
      className="w-full  bg-center h-screen lg:h-[80vh] flex flex-col overlay  items-center justify-center bg-cover bg-no-repeat bg-hero"
    >
      <div className="container py-12 grid grid-cols-1 overlay lg:grid-cols-2">
        <div className="py-6 ">
          <div className="w-full text-center md:text-left  lg:w-[75%] py-6">
            <h1 className="font-bold lg:leading-[5.5rem] mb-4 lg:mb-8 font-manrope leading-[3rem] text-white text-[2.4rem] lg:text-[4.5rem]">
              Welcome To Alpha Sheep Club.
            </h1>
            <span className="text-white text-lg md:text-xl">
              Alpha sheep club a team of talented designers and marketing
              specialists with extensive contacts among major internet
              technology businesses, was inspired by the potential of NFT and
              metaverse.
            </span>
          </div>
          <div className="flex mt-3 mb-8 lg:mb-0 lg:mt-6 justify-center md:justify-start  items-center">
            <button className="mr-1 lg:mr-2 bg-green-700 hover:bg-green-900 duration-300 text-white w-[12rem] text-sm md:text-lg font-semibold rounded-md flex flex-col items-center lg:px-4 lg:py-4 px-3 py-3">
              Mint Now
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
                height="85%"
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

export default Hero;
