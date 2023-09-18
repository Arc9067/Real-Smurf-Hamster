import React from "react";
import logo from "../assets/logo.webp";
import Marquee from "react-fast-marquee";
import dextool from "../assets/dextool.svg";
import dexview from "../assets/dexview.svg";
import etherscan from "../assets/etherscan.svg";
import uniswap from "../assets/uniswap.svg";

function Hero() {
  return (
    <section id="hero" className="w-full pb-12 ">
      <div className="container py-32 grid-cols-1 grid lg:grid-cols-2 gap-16 items-center justify-center">
        <article className="flex flex-col gap-8">
          <h1 className="text-white text-5xl md:text-6xl font-normal font-golf">
            WHAT THE F@$# IS A SMURF HAMSTER?!{" "}
          </h1>
          <p className=" text-white text-base font-normal font-spaceGrotesk leading-loose tracking-tight">
            It’s real… HE IS REAL! The realest Smurf Hamster to ever exist. This
            blue creature was born hundreds of years ago and made its way onto
            the ethereum blockchain.
          </p>

          <div className="flex items-center flex-wrap gap-8 justify-center lg:justify-start lg:flex-nowrap">
            <a className=" px-8 py-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-normal font-golf leading-snug tracking-tight">
                Join Telegram
              </div>
            </a>
            <a className=" px-8 py-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-normal font-golf leading-snug tracking-tight">
                Join Telegram
              </div>
            </a>
          </div>
        </article>
        <img src={logo} alt="" />
      </div>

      <Marquee className="w-full flex gap-7 items-center ">
        <div className="flex justify-between items-center gap-16">
          <img src={dextool} alt="" />
          <img src={dexview} alt="" />
          <img src={etherscan} alt="" />
          <img src={uniswap} alt="" />
        </div>
      </Marquee>
    </section>
  );
}

export default Hero;
