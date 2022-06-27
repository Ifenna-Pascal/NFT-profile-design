import React from "react";

function Footer() {
  return (
    <div className="md:max-w-[60%] max-w-[80%] text-center mx-auto flex flex-col items-center justify-center text-lg lg:text-xl  text-gray-400 py-16">
      <span className="mb-1 text-base">contact us: <a type="email">info@alphasheepclub.xyz</a></span>
      <span className="mb-1 text-base ">Address: Na Celné 3, 150 00 Praha 5-Anděl</span>
      <span className="text-sm">
        © 2022 Alpha sheep club | All Rights Reserved{" "}
      </span>
    </div>
  );
}

export default Footer;
