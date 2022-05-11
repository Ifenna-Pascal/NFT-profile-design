import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

function Section() {
  return (
    <div
      id="terms"
      className="bg-section2 bg-no-repeat py-12 md:py-20 bg-center bg-cover"
    >
      <div className="flex w-full text-center flex-col items-center justify-center">
        <h1 className="font-bold  lg:leading-[4rem] mb-3 lg:mb-4 font-manrope font-manrope text-white text-[2rem] lg:text-[3.2rem]">
          RAC
        </h1>
        <span className="lg:text-xl mb-7 text-xl block text-white w-[90%]  md:w-[85%] mx-auto font-manrope">
          Our exclusive community is a family full of investors and nft
          enthusiasts who will always be sharing the best tips about e-commerce,
          crypto, NFT, trading, growth, YouTube content creation and much more
        </span>
        <div className="flex items-center justify-center mb-4">
          <span className="iconItem">
            <Link href="https://twitter.com/AlphaSheepClub?t=cJZ09CglTQ6Mw1R5WMcHEA&s=09">
              <a  target="_blank">
                <BsTwitter className="w-6 h-6" />
              </a>
            </Link>
          </span>
          <span className="iconItem">
            <Link href="https://discord.gg/m5CsM3hvCY" >
              <a  target="_blank">
                <FaDiscord className="w-6 h-6" />
              </a>
            </Link>
          </span>

          <span className="iconItem">
            <Link href="https://www.instagram.com/p/CdGV_dIqjve/?igshid=YmMyMTA2M2Y=">
              <a  target="_blank">
                <FaInstagram className="w-6 h-6" />
              </a>
            </Link>{" "}
          </span>
          <span className="iconItem">
            <Link href="https://www.reddit.com/u/AlphaSheepClub?utm_medium=android_app&utm_source=share">
              <a  target="_blank">
                <FaTelegramPlane className="w-6 h-6" />
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Section;
