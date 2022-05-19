import React from "react";

function Team() {
  return (
    <div id="team" className="bg-teams bg-no-repeat bg-center bg-cover">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="flex mb-8 flex-col items-center justify-center">
          <span className="font-bold capitalize lg:leading-[4rem] mb-2 lg:mb-4 font-manrope font-manrope text-white text-[2.1rem] lg:text-[3.6rem]">
            Meet The Team
          </span>
          <span className="lg:text-xl text-center mb-3 text-lg block text-gray-400 font-manrope">
            The ones who are making things happen in the Rockstar Apes Club
            Space
          </span>
        </div>
        <div className="w-full lg:w-[80%] mx-auto grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-6">
          <div className="bg-gradient-to-t py-12 px-6 mr-2 lg:mb-0 mb-6 from-[#50A350] to-[#D8DF88]  flex flex-col items-center justify-center">
            <div className="w-[100%] flex flex-col items-center">
              <img
                src="/imgs/remove1.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectfit="contain"
                className="rounded-full"
              />
            </div>
            <div className="block mt-2 text-center">
              <span className="text-white font-bold my-2 block text-2xl">
                Michi.eth
              </span>
              <span className="text-white font-semibold text-base">
                Founder
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-t py-12 lg:mb-0 mb-6 px-6 mr-2 from-[#E97E2F] to-[#EBB381]  flex flex-col items-center justify-center">
            <div className="w-[100%] flex flex-col items-center">
              <img
                src="/imgs/remove2.png"
                width="100%"
                height="100%"
                objectfit="fill"
                className="rounded-full"
              />
            </div>
            <div className="block text-center">
              <span className="text-white font-bold my-2 block text-2xl">
                {" "}
                Amani
              </span>
              <span className="text-white font-semibold text-base">
                Co-founder
              </span>
            </div>
          </div>
          <div className="bg-gradient-to-t  lg:mb-0 mb-6 from-[#1C4376] to-[#AC2236] py-12 px-6 mr-2  flex flex-col items-center justify-center">
            <div className="w-[100%] flex flex-col items-center">
              <img
                src="/imgs/remove3.png"
                width="100%"
                height="90%"
                layout="responsive"
                objectfit="contain"
                className="rounded-full"
              />
            </div>
            <div className="block text-center ">
              <span className="text-white font-bold my-2 block text-2xl">
                Joseph
              </span>
              <span className="text-white font-semibold text-base">
                Director
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-t py-12 px-6 mr-2 lg:mb-0 mb-6 from-[#C4362C] to-[#E0A028]  flex flex-col items-center justify-center">
            <div className="w-[100%] flex flex-col items-center">
              <img
                src="/imgs/remove4.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectfit="contain"
                className="rounded-full"
              />
            </div>
            <div className="block text-center">
              <span className="text-white font-bold my-2 block text-2xl">
                {" "}
                3motion.studio
              </span>
              <span className="text-white font-semibold text-base">Artist</span>
            </div>
          </div>
          <div className="bg-gradient-to-t py-12 px-6 mr-2 lg:mb-0 mb-6 from-[#C4362C] to-[#E0A028]  flex flex-col items-center justify-center">
            <div className="w-[100%] flex flex-col items-center">
              <img
                src="/imgs/remove5.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectfit="contain"
                className="rounded-full"
              />
            </div>
            <div className="block text-center">
              <span className="text-white font-bold my-2 block text-2xl">
                {" "}
                Large.craftz
              </span>
              <span className="text-white font-semibold text-base">
                Community Manager
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
