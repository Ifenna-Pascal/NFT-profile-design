import React from "react";
import { Fade } from "react-reveal";

const Phase = ({ heading, desc }) => (
 <Fade bottom duration={3000} >
    <div className="relative mb-12 w-[90%]">
    <div className="absolute w-5 md:w-6 h-5 md:w-6 bg-[#E5A301] p-1 -left-[12.5%] top-[50%] flex items-center justify-center rounded-full ">
      <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-white"></div>
    </div>
    <div className="">
      <div className="bg-[#E5A301]">
        <div className="p-6 -translate-x-2  -translate-y-2 bg-white">
          <div className="flex mb-2 md:mb-4 items-center justify-between">
            <span className="text-[#171835] font-semibold text-xl md:text-[1.75rem] ">
              {heading}
            </span>
          </div>
          <span className="md:text-2xl text-lg tracking-wide font-manrope leading-8 text-[#171835]">
            {desc}
          </span>
        </div>
      </div>
    </div>
  </div>
 </Fade>
);

function Roadmap() {
  return (
    <div id="map" className="bg-road bg-no-repeat bg-center bg-cover">
      <div className="container py-12 lg:py-24">
        <div className="flex mb-8 flex-col mb-12 items-start justify-start">
          <span className="font-bold capitalize lg:leading-[4rem] mb-2 lg:mb-4 font-manrope font-manrope text-white text-[2.1rem] lg:text-[3.3rem]">
            Growth Roadmap
          </span>
          <span className="lg:text-lg text-left mb-3  lg:max-w-[40%]  text-lg block text-gray-400 font-manrope">
            Alpha sheep club are ready to mint onto the Ethereum Blockchain
            to build an exclusive Community.
          </span>
        </div>
        <div className="max-w-[35rem] flex flex-col items-end relative">
          <div className="absolute left-0 h-full w-3 bg-[#E5A301]"></div>
          <Phase
            heading="Phase 1"
            desc="Build a strong and healthy community"
          />
          <Phase heading="Phase 2" desc="Setup our community funds " />
          <Phase heading="Phase 3" desc="Utilities" />
          <Phase
            heading="Phase 4"
            desc="Design and launch our 2rd generation nft"
          />
          <Phase heading="Phase 5" desc="Design our 3rd generation nft" />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
