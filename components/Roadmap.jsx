import React from "react";
import { Fade } from "react-reveal";

const Phase = ({ heading, desc, title }) => (
  <Fade bottom duration={3000}>
    <div className="relative mb-12 w-[90%]">
      <div className="absolute w-5 md:w-6 h-5 md:w-6 bg-[#E5A301] p-1 -left-[12.5%] top-[50%] flex items-center justify-center rounded-full ">
        <div className="w-3 md:w-4 h-3 md:h-4 rounded-full bg-white"></div>
      </div>
      <div className="">
        <div className="bg-[#E5A301]">
          <div className="p-6 -translate-x-2  -translate-y-2 bg-white">
            <div className="flex items-start justify-start text-left flex-col md:flex-row  md:mb-2 md:items-center md:justify-between">
              <span className="text-[#171835] font-semibold text-xl md:text-[1.75rem] ">
                {heading}
              </span>
              <span className="text-[#E5A301] text-xl md:text-2xl ">{title}</span>
            </div>
            {desc &&
              desc.split("-").map((x, i) => {
                return (
                  x &&
                  x != " " && (
                    <span
                      key={i + 1}
                      className="md:text-2xl mb-1 text-lg tracking-wide font-manrope leading-8 text-[#171835]"
                    >
                      {" "}
                      <br />
                      {`- ${x}`}
                    </span>
                  )
                );
              })}
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
            Alpha sheep club are ready to mint onto the Ethereum Blockchain to
            build an exclusive Community.
          </span>
        </div>
        <div className="max-w-[40rem] flex flex-col items-end relative">
          <div className="absolute left-0 h-full w-3 bg-[#E5A301]"></div>
          <Phase
            heading="Phase 1"
            title="Pre Launch!"
            desc="
            -boost and build a strong, active community
            -Invite contest
            -Sheepie meme contest!
            -Giveaways!
            -Filling up the WL and OG role.
            -Release of mint date
            -website Launch!
            -presale and public sales"
          />
          <Phase
            heading="Phase 2"
            title="Launch"
            desc="-Sheepie Dance & Challenge 
              -Sheepie voice & Video language challenge
              -Giveaway
              -WL & OG 
              -Mint date 
              -Presale and public sale"
          />
          <Phase
            heading="Phase 3"
            title="Benefits"
            desc="-Events and party
-Nft Staking 
-Receives Physical Special gifts
-Exclusive opportunity "
          />
          <Phase
            heading="Phase 4"
            title="Setup Community Funds"
            desc="-Charity
            -Community project "
          />
          <Phase
            heading="Phase 5"
            title="Introducing our other projects"
            desc="-Alpha sheep ewe (ASE)
-Alpha sheep Baby (ASB)
-Alpha sheep verse (ASV)"
          />
          <Phase
            heading="Phase 6"
            title="Metaverse"
            desc="-Events 
            -Party 
            -Headquarters
            -Office
            -Meeting"
          />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
