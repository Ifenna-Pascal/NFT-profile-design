import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord, FaInstagram, FaTelegramPlane } from "react-icons/fa";

function Section() {
  return (
    <div className="bg-section2 bg-no-repeat py-20 bg-cover">
      <div className="flex w-full text-center flex-col items-center justify-center">
        <h1 className="font-bold  lg:leading-[4rem] mb-3 lg:mb-4 font-manrope font-manrope text-white text-[2.3rem] lg:text-[3.2rem]">
          RAC
        </h1>
        <span className="lg:text-xl mb-7 text-xl block text-white w-[70%] mx-auto font-manrope">
          Our exclusive community is a family full of investors and nft
          enthusiasts who will always be sharing the best tips about e-commerce,
          crypto, NFT, trading, growth, YouTube content creation and much more
        </span>
        <div className="flex items-center justify-center mb-4">
          <span className="iconItem">
            <BsTwitter className="w-6 h-6" />
          </span>
          <span className="iconItem">
            <FaDiscord className="w-6 h-6" />
          </span>
          <span className="iconItem">
            <FaInstagram className="w-6 h-6" />
          </span>
          <span className="iconItem">
            <FaTelegramPlane className="w-6 h-6" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section;
