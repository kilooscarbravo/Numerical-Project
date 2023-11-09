import React from "react";
import { Link } from "react-scroll";
import { FcLikePlaceholder } from "react-icons/fc";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between fixed top-0 w-full p-5 lg:px-3 px-5 bg-gradient-to-l from-backgroundColor to brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer gap-2">
            <span>
              <FcLikePlaceholder size={30} />
            </span>
            <h1 className="text-xl font-semibold">
              mai mee jai wa
            </h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="bisection"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Bisection
            </Link>
            <Link
              to="graphical"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Graphical
            </Link>
            <Link
              to="false_position"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              False Position
            </Link>
            <Link
              to="one_point"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              One-Point Iteration
            </Link>
            <Link
              to="newton"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Newton Raphson
            </Link>
            
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
