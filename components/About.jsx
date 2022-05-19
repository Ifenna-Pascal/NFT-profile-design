import React from "react";
import Image from "next/image";

function About() {
  return (
    <div
      id="about"
      className="container gap-x-8 py-24 lg:py-32 grid lg:grid-cols-2 grid-cols-1"
    >
      <div className="w-full p-4 mb-4 md:mb-0 h-full">
        <Image
          src="/imgs/Logo1.png"
          width="100%"
          height="100%"
          className="h-full"
          layout="responsive"
          objectfit="contain"
        />
      </div>
      <div className="text-left h-full max-h-full flex flex-col lg:justify-center lg:px-4 py-3 font-manrope">
        <h1 className="font-bold uppercase lg:leading-[4rem] mb-3 lg:mb-8 font-manrope font-manrope text-white text-[2rem] lg:text-[3.4rem]">
          Who we are
        </h1>
        <span className="uppercase block mb-3 font-manrope text-lg md:text-xl font-bold text-white">
          purpose of the project
        </span>
        <span className="lg:text-2xl mb-3 text-xl block text-gray-400 font-manrope">
          Alpha Sheep Club NFT project is the project of the future sheep
          shepherd, in a world ravaged by war, global warming and pollution,
          Alpha sheep club is taking the beautiful nature of earth to the
          Alphaverse. 
        </span>
        <span className="lg:text-2xl mb-6 text-xl block text-gray-400 font-manrope">
        Join us today and discover how we are going to change and
          become the sheep shepherd to our world ecosystem!
        </span>
        <button className="bg-text-white w-[16rem] text-base bg-[#E5A301] font-semibold rounded-md flex flex-col items-center px-12 uppercase text-white py-4">
          <a
            href="https://discord.gg/m5CsM3hvCY"
            target="_blank"
            rel="noreferrer"
          >
            Join Our Discord{" "}
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
