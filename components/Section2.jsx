import React from "react";

function Section2() {
  return (
    <div className="bg-section bg-no-repeat py-24 bg-center overlay bg-cover">
      <div className="flex w-full text-center flex-col items-center justify-center">
        <h1 className="font-bold  lg:leading-[4rem] mb-1 lg:mb-4 font-manrope font-manrope text-white text-[1.9rem] lg:text-[3.2rem]">
          Join The Alpha Sheep Club
        </h1>
        <span className="lg:text-2xl mb-4 md:mb-6 text-lg block text-gray-400 font-manrope">
          Join a genuine community of Designers
        </span>
        <button className="bg-text-white uppercase mr-4 inline mt-4 md:mt-0 text-sm md:text-base  duration-300 bg-green-700 hover:bg-green-900 font-semibold rounded-md flex flex-col items-center px-12 uppercase text-white py-3 md:py-4">
          {/* <Link href="https://discord.gg/m5CsM3hvCY"> */}
            {" "}
            <a href="https://discord.gg/m5CsM3hvCY" target="_blank" rel="noreferrer">Join Our Discord </a>
          {/* </Link>/ */}
        </button>
      </div>
    </div>
  );
}

export default Section2;
