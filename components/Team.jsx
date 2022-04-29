import React from "react";
import Image from 'next/image';

function Team() {
  return (
    <div className="bg-teams bg-no-repeat bg-cover">
      <div className="container py-24 lg:py-32">
        <div className="flex mb-8 flex-col items-center justify-center">
          <span className="font-bold capitalize lg:leading-[4rem] mb-2 lg:mb-4 font-manrope font-manrope text-white text-[2rem] lg:text-[3.6rem]">
            Meet The Team
          </span>
          <span className="lg:text-xl mb-3 text-lg block text-gray-500 font-manrope">
            The one's who are making things happen in the Rockstar Apes Club
            Space
          </span>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-x-4">
          <div className="bg-gradient-to-t py-12 lg:mb-0 mb-4 px-6 mr-2 from-[#E97E2F] to-[#EBB381]  flex flex-col items-center justify-center">
              <div className="w-[100%] flex flex-col items-center">
              <img
                src='/imgs/team1.png'
                width="100%"
                height="100%"
                objectFit="fill"
              />
              </div>
              <div className="block text-center">
                <span className="text-white block text-xl"> Poppy "VEEZY" APE</span>
                <span className="text-white text-base">Founder/Artist</span>
              </div>
          </div>
          <div className="bg-gradient-to-t  lg:mb-0 mb-4 from-[#1C4376] to-[#AC2236] py-12 px-6 mr-2  flex flex-col items-center justify-center">
          <div className="w-[100%] flex flex-col items-center">
              <img
                src='/imgs/team2.png'
                width="100%"
                height="90%"
                layout="responsive"
                objectFit="contain"
              />
              </div>
              <div className="block text-center ">
                <span className="text-white block text-xl"> Poppy "VEEZY" APE</span>
                <span className="text-white text-base">Founder/Artist</span>
              </div>
          </div>
          <div className="bg-gradient-to-t py-12 px-6 mr-2 lg:mb-0 mb-4 from-[#50A350] to-[#D8DF88]  flex flex-col items-center justify-center">

          <div className="w-[100%] flex flex-col items-center">
              <img
                src='/imgs/team3.png'
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              </div>
              <div className="block mt-2 text-center">
                <span className="text-white block text-xl"> Poppy "VEEZY" APE</span>
                <span className="text-white text-base">Founder/Artist</span>
              </div>
          </div>
          <div className="bg-gradient-to-t py-12 px-6 mr-2 lg:mb-0 mb-4 from-[#C4362C] to-[#E0A028]  flex flex-col items-center justify-center">
          <div className="w-[100%] flex flex-col items-center">
              <img
                src='/imgs/team4.png'
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              </div>
              <div className="block text-center">
                <span className="text-white block text-xl"> Poppy "VEEZY" APE</span>
                <span className="text-white text-base">Founder/Artist</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
