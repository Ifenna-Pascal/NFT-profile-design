import React, { useState } from "react";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const toggle = () => {
    setShow(!show);
  };
  const [show, setShow] = useState(false);
  return (
    <nav className="w-full sticky z-50 bg-[#171835] top-0">
      <div className="container px-5 lg:px-0 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            {" "}
            <Image src="/imgs/logo.png" width={60} height={60} />
          </div>
          <div className="lg:block hidden">
            <span className="navItem"> Home </span>
            <span className="navItem"> AboutUs </span>
            <span className="navItem"> Roadmap </span>
            <span className="navItem"> Artist </span>
            <span className="navItem"> OurTeam </span>
            <span className="navItem"> FAQ </span>
            <span className="navItem"> Terms </span>
          </div>
        </div>
        <div className="lg:flex hidden items-center">
          <span className="iconItem">
            <BsTwitter className="w-5 h-5" />
          </span>
          <span className="iconItem">
            <FaDiscord className="w-5 h-5" />
          </span>
          <span className="iconItem">
            <FaInstagram className="w-5 h-5" />
          </span>
          <span className="iconItem">
            <FaTelegramPlane className="w-5 h-5" />
          </span>
          <button className="bg-[#E5A301] rounded-lg px-8 ml-3 py-4 flex items-center flex-col font-semibold text-white">
            Connect Wallet
          </button>
        </div>
        <div
          className="lg:hidden flex items-center flex-col duration-300 "
          onClick={toggle}
        >
          {" "}
          <AiOutlineMenu className="w-8 h-8 text-white" />{" "}
        </div>
      </div>
      <div className={`duration-300 ${show ? 'translate-y-0' : 'translate-y-full'} h-full`}>
      {show && (
       <> 
          <div
            className={` flex  flex-col items-center justify-center text-center lg:hidden`}
          >
            <span className="navItem"> Home </span>
            <span className="navItem"> About Us </span>
            <span className="navItem"> Roadmap </span>
            <span className="navItem"> Artist </span>
            <span className="navItem"> Our Team </span>
            <span className="navItem"> FAQ </span>
            <span className="navItem"> Terms </span>
          </div>
          <div
            className={`flex my-8 flex-col justify-center text-center items-center`}
          >
            <div className="flex items-center justify-center mb-4">
              <span className="iconItem">
                <BsTwitter className="w-5 h-5" />
              </span>
              <span className="iconItem">
                <FaDiscord className="w-5 h-5" />
              </span>
              <span className="iconItem">
                <FaInstagram className="w-5 h-5" />
              </span>
              <span className="iconItem">
                <FaTelegramPlane className="w-5 h-5" />
              </span>
            </div>
            <button className="bg-[#E5A301] rounded-lg px-8 my-4 py-3 hover:bg-[#856410]  flex items-center flex-col font-semibold text-white">
              Connect Wallet
            </button>
          </div>
         </>
      )}
      </div>
    </nav>
  );
}

export default Nav;
