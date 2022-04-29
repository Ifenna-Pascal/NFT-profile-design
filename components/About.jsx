import React from "react";
import Image from 'next/image';

function About() {
  return (
    <div className="container gap-x-8 py-24 lg:py-32 grid lg:grid-cols-2 grid-cols-1">
      <div className="w-full h-full">
        <Image
          src="/imgs/about.png"
          width="100%"
          height="100%"
          className="h-full"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="text-left h-full max-h-full flex flex-col lg:justify-center lg:px-4 py-3 font-manrope">
        <h1 className="font-bold uppercase lg:leading-[4rem] mb-4 lg:mb-8 font-manrope font-manrope text-white text-[2.3rem] lg:text-[3.6rem]">
          What is the
        </h1>
        <span className="uppercase block mb-3 font-manrope text-xl font-bold text-white">
          purpose of the project
        </span>
        <span className="lg:text-xl mb-3 text-lg block text-gray-500 font-manrope">
          Rock Star Apes are a community of artists who support each other
          through fun and exciting collaborations. One of our goals is to help
          each other find success in our art form. We also have some pretty
          sweet perks every month! We give away free passes to music festivals,
          backstage passes to concerts, concert tickets, etc. You name it! If
          you love music and art, join our discord!
        </span>
        <span className="lg:text-xl mb-6 text-base block text-gray-500 font-manrope">
          Rock Star Apes are a community of artists who support each other
          through fun and exciting collaborations. One of our goals is to help
          each other find success in our art form. We also have some pretty
          sweet perks every month! We give away free passes to music festivals,
          backstage passes to concerts, concert tickets, etc. You name it! If
          you love music and art, join our discord!
        </span>
        <button className="bg-text-white w-[16rem] text-base bg-[#E5A301] font-semibold rounded-md flex flex-col items-center px-12 uppercase text-white py-4">
          Join our Discord
        </button>
      </div>
    </div>
  );
}

export default About;
