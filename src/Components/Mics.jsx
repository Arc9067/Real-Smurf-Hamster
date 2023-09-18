import React from "react";
import chart from "../assets/chart.svg";

function Mics() {
  return (
    <section id="mics" className="py-24 w-full">
      <div className="container">
        <div className="w-full bg-[#2D2D5E] rounded-2xl py-8 px-5 items-center grid grid-cols-1 lg:grid-cols-2 justify-between gap-16">
          <article className="flex flex-col gap-8">
            <h1 className="text-yellow-300 text-2xl font-normal font-golf">
              Total Supply : 100,000,000.
            </h1>
            <p className=" text-white text-xl font-medium font-spaceGrotesk">
              Contract: 0x000000000000.....
            </p>
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="justify-start items-center gap-5 inline-flex">
                <div className="w-6 h-6 relative bg-blue-400 rounded-full" />
                <div className="justify-center items-center gap-3 flex">
                  <div className="text-white text-2xl font-medium font-['Space Grotesk']">
                    Buy and Sell{" "}
                  </div>
                  <div className="text-white text-3xl font-normal font-golf">
                    10%
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-5 inline-flex">
                <div className="w-6 h-6 relative bg-amber-300 rounded-full" />
                <div className="justify-center items-center gap-3 flex">
                  <div className="text-white text-2xl font-medium font-['Space Grotesk']">
                    Buy and Sell{" "}
                  </div>
                  <div className="text-white text-3xl font-normal font-golf">
                    10%
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-5 inline-flex">
                <div className="w-6 h-6 relative bg-red-400 rounded-full" />
                <div className="justify-center items-center gap-3 flex">
                  <div className="text-white text-2xl font-medium font-['Space Grotesk']">
                    Buy and Sell{" "}
                  </div>
                  <div className="text-white text-3xl font-normal font-golf">
                    10%
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="flex flex-col gap-12">
            <h1 className="text-white text-5xl font-normal font-golf leading-10 tracking-wider">
              Tokenomics
            </h1>
            <img src={chart} alt="" />
          </article>
        </div>
      </div>
    </section>
  );
}

export default Mics;
