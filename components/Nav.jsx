import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

function Nav() {
  const toggle = () => {
    setShow(!show);
  };
  const [show, setShow] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 120) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <nav
      className={`w-full sticky z-50 bg-[#171835] ${
        scrollNav ? "shadow-xl bg-[#100620]" : "shadow-none"
      }  top-0`}
    >
      <div className="container px-5 lg:px-0 py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            {" "}
            <Image src="/imgs/logo.png" width={60} height={60} />
          </div>
          <div className="lg:block hidden">
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
            >
              <span className="navItem">Home</span>
            </Link>
            <Link
              activeClass="active"
              to="about"
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
            >
              <span className="navItem">About Us</span>
            </Link>
            <Link
              activeClass="active"
              to="map"
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
            >
              <span className="navItem">Roadmap</span>
            </Link>
            <Link
              activeClass="active"
              to="art"
              smooth={true}
              duration={500}
              offset={-84}
              spy
              exact="true"
            >
              <span className="navItem">Artist</span>
            </Link>
            <Link
              activeClass="active"
              to="team"
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
            >
              <span className="navItem">Our Team</span>
            </Link>
            <Link
              activeClass="active"
              to="faq"
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
            >
              <span className="navItem">FAQ</span>
            </Link>
            <Link
              activeClass="active"
              to="terms"
              smooth={true}
              duration={500}
              offset={-84}
              spy={true}
              exact="true"
            >
              <span className="navItem">Terms</span>
            </Link>
          </div>
        </div>
        <div className="lg:flex hidden items-center">
          <span className="iconItem">
            <Link href="https://twitter.com/AlphaSheepClub?t=cJZ09CglTQ6Mw1R5WMcHEA&s=09">
              <a target="_blank">
                <BsTwitter className="w-6 h-6" />
              </a>
            </Link>
          </span>
          <span className="iconItem">
            <Link href="https://discord.gg/m5CsM3hvCY">
              <a target="_blank">
                <FaDiscord className="w-6 h-6" />
              </a>
            </Link>
          </span>

          <span className="iconItem">
            <Link href="https://www.instagram.com/p/CdGV_dIqjve/?igshid=YmMyMTA2M2Y=">
              <a target="_blank">
                <FaInstagram className="w-6 h-6" />
              </a>
            </Link>{" "}
          </span>
          <span className="iconItem">
            <Link href="https://www.reddit.com/u/AlphaSheepClub?utm_medium=android_app&utm_source=share">
              <a target="_blank">
                <FaTelegramPlane className="w-6 h-6" />
              </a>
            </Link>
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
      <div
        className={`duration-300 ${
          show ? "translate-y-0" : "translate-y-full"
        } h-full`}
      >
        {show && (
          <>
            <div
              className={` flex  flex-col items-center justify-center text-center lg:hidden`}
            >
              <Link
                activeClass="active"
                to="home"
                smooth={true}
                duration={500}
                offset={-84}
                spy={true}
                exact="true"
                className="navItem"
              >
                <span onClick={() => setShow(false)}>Home</span>
              </Link>
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                duration={500}
                offset={-84}
                spy={true}
                exact="true"
                className="navItem"
              >
                <span onClick={() => setShow(false)}>About Us</span>
              </Link>
              <Link
                activeClass="active"
                to="map"
                smooth={true}
                duration={500}
                offset={-84}
                spy={true}
                exact="true"
                className="navItem"
              >
                <span onClick={() => setShow(false)}>Roadmap</span>
              </Link>
              <Link
                activeClass="active"
                to="art"
                smooth={true}
                duration={500}
                offset={-84}
                spy={true}
                exact="true"
                className="navItem"
              >
                <span onClick={() => setShow(false)}>Artist</span>
              </Link>
              <Link
                activeClass="active"
                to="team"
                smooth={true}
                duration={500}
                offset={-84}
                spy={true}
                exact="true"
                className="navItem"
              >
                <span onClick={() => setShow(false)}>Our Team</span>
              </Link>
              <Link
                activeClass="active"
                to="faq"
                smooth={true}
                duration={500}
                offset={-84}
                spy={true}
                exact="true"
                className="navItem"
              >
                <span onClick={() => setShow(false)}>FAQ</span>
              </Link>
              <Link
                activeClass="active"
                to="terms"
                smooth={true}
                duration={500}
                offset={-84}
                spy={true}
                exact="true"
                className="navItem"
              >
                <span onClick={() => setShow(false)}>Terms</span>
              </Link>
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
