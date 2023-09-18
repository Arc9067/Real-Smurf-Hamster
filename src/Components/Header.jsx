import React from "react";

function Header() {
  return (
    <header className="w-full py-5 absolute top-0 left-0">
      <nav className="container flex items-center justify-between">
        <a className="text-white text-3xl font-normal font-golf">Fuck Ftx</a>
        <ul className=" justify-between items-center hidden lg:inline-flex gap-14">
          <div className="text-white font-normal font-['Space Grotesk']">
            Home
          </div>
          <div className="text-white font-normal font-['Space Grotesk']">
            About
          </div>
          <div className="text-white font-normal font-['Space Grotesk']">
            Tokenomics
          </div>
        </ul>

        <a className=" px-8 py-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-base font-normal font-golf leading-snug tracking-tight">
            Join Telegram
          </div>
        </a>
      </nav>
    </header>
  );
}

export default Header;
