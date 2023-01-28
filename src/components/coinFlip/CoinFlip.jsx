import React from "react";
import blx from "./blx.svg";
import { FaDatabase } from "react-icons/fa";

const CoinFlip = () => {
  return (
    <div>
      <p className="text-center uppercase text-white mt-4 flex justify-center items-center gap-4">
        Coinflip{" "}
        <span>
          <FaDatabase />
        </span>
      </p>

      <div className="w-[90%] h-[600px] bg-[#1B1D32] rounded-lg m-auto mt-4">
        {/* Gamers */}

        <div className="flex justify-between py-[2em] px-[12em]">
          {/* game one  */}
          <div className="flex gap-4 items-center">
            <div className="w-[3.5em] h-[3.5em] bg-[#9877FE] rounded-full flex justify-center items-center">
              <div className="w-[3em] h-[3em] bg-[#1B1D32] rounded-full"></div>
            </div>
            <p className=" text-white">GAMER21</p>
          </div>
          {/* game two  */}
          <div className="flex gap-4 items-center">
            <div className="w-[3.5em] h-[3.5em] bg-[#9877FE] rounded-full flex justify-center items-center">
              <div className="w-[3em] h-[3em] bg-[#1B1D32] rounded-full"></div>
            </div>
            <p className=" text-white">GAMER21</p>
          </div>
        </div>

        {/* Items cards */}

        <div className="flex p-10 mt-4">
          {/* your items card */}
          <div className="w-[30%] h-[310px] bg-[#0D111D] rounded-3xl p-2">
            <p className="text-center uppercase  text-white">Your Items</p>

            <div className="flex gap-3 flex-wrap py-4 px-10">
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
            </div>
            <p className="text-center uppercase  text-white">
              {" "}
              WORTH <span className="text-[#5DDB5E] ">130r$</span>{" "}
            </p>

            <p className="text-center uppercase text-[#232D4F]  text-3xl mt-2">
              {" "}
              Unready{" "}
            </p>
          </div>

          {/* your items card */}
          <div className="w-40% h-[405px] rounded-3xl p-2 bg-gradient-to-r from-[#8801B9] via-[#5BBAFF] to-[#A35BFF] mt-[-96px]">
            <div className="bg-[#0D111D] rounded-3xl p-5 flex flex-col gap-1 ">
              <div className="flex justify-center items-center">
                <div className="w-full h-[78%]  bg-[#0F1424] flex justify-center items-center">
                  <img src={blx} alt="blx" />
                </div>
              </div>

              {/* ptential  bwin */}
              <div className="py-[16px] px-[43px] h-[37px] rounded-3xl bg-[#0F1424] flex justify-center items-center text-white  uppercase mt-[-50px]">
                potential win : <span className="text-[#5DDB5E] ">250R$</span>
              </div>
            </div>
          </div>

          {/* your items card */}
          <div className="w-[30%] h-[310px] bg-[#0D111D] rounded-3xl p-2">
            <p className="text-center uppercase  text-white">Enemy Items</p>

            <div className="flex gap-3 flex-wrap py-4 px-10">
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
              {/* item */}
              <div className="w-[4.5em] h-[4.5em] bg-[#1B1D32] rounded-full"></div>
            </div>
            <p className="text-center uppercase  text-white">
              {" "}
              WORTH <span className="text-[#5DDB5E] ">130r$</span>{" "}
            </p>

            <p className="text-center uppercase text-[#232D4F]  text-3xl mt-2">
              {" "}
              Unready{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinFlip;
