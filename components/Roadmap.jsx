import React from "react";

const Phase = ({ heading, percentage, desc }) => (
  <div className="relative">
    <div className="border-l-4 space-y-12 border-[#E5A301]">
      <div className=" ml-[3rem]  mb-8 bg-[#E5A301] max-w-[30rem]">
        <div className="p-8 bg-white top-3  right-3">
          <div className="flex mb-4 items-center justify-between">
            <span className="text-[#171835] font-semibold text-2xl ">
              {heading}
            </span>
            <span className="text-[#E5A301] font-semibold text-2xl">{`${percentage}%`}</span>
          </div>
          <span className="text-lg tracking-wide font-manrope leading-8 text-[#171835]">
            {desc}
          </span>
        </div>
      </div>
    </div>
  </div>
);

function Roadmap() {
  return (
    <div className="bg-road bg-no-repeat bg-cover">
      <div className="container py-24">
        <div className="flex mb-8 flex-col mb-12 items-start justify-start">
          <span className="font-bold capitalize lg:leading-[4rem] mb-2 lg:mb-4 font-manrope font-manrope text-white text-[2rem] lg:text-[3.3rem]">
            Growth Roadmap
          </span>
          <span className="lg:text-lg text-left mb-3 max-w-[40%]  text-lg block text-gray-500 font-manrope">
            7,777 Rockstar Apes are ready to mint onto the Ethereum Blockchain
            to build an exclusive Community.
          </span>
        </div>
        <div className="relative">
          <Phase
            heading="Phase 1"
            desc="Phase 1 of the roadmap will be involving the building of our community! During this phase, we will be marketing the Rockstar Apes on social media to grow our community following. We will be collaborating with other large projects within the NFT space before and after launch!"
            percentage="20"
          />
          <Phase
            heading="Phase 1"
            desc="Phase 1 of the roadmap will be involving the building of our community! During this phase, we will be marketing the Rockstar Apes on social media to grow our community following. We will be collaborating with other large projects within the NFT space before and after launch!"
            percentage="20"
          />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
