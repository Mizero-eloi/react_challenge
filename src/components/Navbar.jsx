import React from "react";
import logo from "./logo.svg";
import discord from "./discord.svg";
import twitter from "./twitter.svg";
import { ImHome3 } from "react-icons/im";
import { BsPieChartFill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-around">
      {/* logo */}
      <img src={logo} alt="logo" />

      {/* Navigation links */}

      <div className="flex justify-between w-[25%] items-center text-white">
        <p className="flex text-[#483969] items-center gap-2 ">
          HOME <ImHome3 />{" "}
        </p>
        <p className="flex text-[#483969] items-center gap-2 ">
          STATS <BsPieChartFill />{" "}
        </p>
        <p className="flex text-[#483969] items-center gap-2 ">
          ABOUT US <IoPeopleSharp />{" "}
        </p>
      </div>

      {/* ICONS  + BUTTON*/}
      <div className="flex w-[20%] justify-between items-center">
        <div className="flex gap-2">
          {/* icons */}
          <img className="w-[45%]" src={discord} alt="discord svg" />
          <img className="w-[45%]" src={twitter} alt="twitter svg" />
        </div>

        {/* login button */}
        <button className="py-[16px] px-[43px] h-[37px] rounded-lg bg-blue-500 flex justify-center items-center text-white  uppercase text-sm">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
