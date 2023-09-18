import React from "react";
import smurf from "../assets/smurf.gif";

function About() {
  return (
    <section id="about" className="py-24 w-full">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
        <img src={smurf} alt="" />
        <article className="flex flex-col gap-8">
          <h1 className="text-white text-5xl md:text-6xl font-normal font-golf">
            When did smurfs become hamsters?{" "}
          </h1>
          <p className=" text-white text-base font-normal font-spaceGrotesk leading-loose tracking-tight">
            The project is fully decentralized and community based. We just do
            our best to keep everyone together as an army. If you want to do
            something then do it, if someone asks for a hand out you can tell
            them that Pepe never paid for a thing. The project is fully
            decentralized and community based. <br />
          </p>

          <div className="flex items-center flex-wrap gap-8 justify-center lg:justify-start lg:flex-nowrap">
            <a className=" px-8 py-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-normal font-golf leading-snug tracking-tight">
                Join Telegram
              </div>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
