import React from "react";
import Image from "next/image";

function Section1() {
  return (
    <div className="container gap-x-8 py-24 lg:py-32 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full h-full">
        <Image
          src="/imgs/77day.gif"
          width="100%"
          height="100%"
          className="h-full"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="text-left h-full max-h-full flex flex-col lg:justify-center lg:px-4 py-3 font-manrope">
        <h1 className="font-bold uppercase lg:leading-[4rem] mb-4 lg:mb-8 font-manrope font-manrope text-white text-[2.3rem] lg:text-[3.2rem]">
          77 Days of Giveaways
        </h1>

        <span className="lg:text-xl mb-3 text-lg block text-gray-500 font-manrope">
          For 77 days after the mint of the Rockstar Apes collection, the team
          have decided to giveaway 77 prestigious NFTs from other great well
          known communities for our Holders only!
        </span>
        <span className="lg:text-xl mb-6 text-base block text-gray-500 font-manrope">
          Giveaway will be hosted on our Discord and we are doing this to give
          back to the community.
        </span>
        <div className="flex">
          <button className="bg-text-white uppercase mr-4 inline text-base bg-[#E5A301] font-semibold rounded-md flex flex-col items-center px-12 uppercase text-white py-4">
            Mint Now
          </button>
          <button className="bg-text-white  uppercase  text-base bg-[#E5A301] font-semibold rounded-md flex flex-col items-center px-12 uppercase text-white py-4">
            Stake
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
