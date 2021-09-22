import React from "react";
import { Link } from "wouter";

import ushieruIconSvg from "./../assets/ushieru-icon.svg";

const Navbar = () => {
  return (
    <div className="flex items-center p-5 sm:py-0 sm:mt-4 container m-auto">
      <div className="flex-grow">
        <Link to="/">
          <a>
            <img
              src={ushieruIconSvg}
              alt="ushieruIconSvg"
              className="h-16 sm:h-20 p-2 inline-block"
            />
          </a>
        </Link>
      </div>
      <div className="flex-shrink text-lg md:text-2xl font-bold">
        <Link to="/blog">
          <a className="mr-5 md:mr-14">Blog</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
