import React from "react";
import footerLogo from "../assets/footerLogo.svg";

function Footer() {
  return (
    <footer id="footer" className="py-6 w-full">
      <div className="container flex flex-col justify-center items-center gap-5">
        <img src={footerLogo} alt="" />
        <div className="flex items-center flex-wrap gap-8 justify-center lg:justify-start lg:flex-nowrap">
          <a
            href="https://t.me/SMURFhamster"
            className=" px-8 py-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white flex justify-center items-center gap-4 text-base font-normal font-golf leading-snug tracking-tight">
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.51901 7.90388C1.1115 7.76805 1.1076 7.54868 1.52682 7.40894L16.4273 2.44238C16.8402 2.30498 17.0768 2.53606 16.9613 2.94044L12.7035 17.8401C12.5864 18.2531 12.3483 18.2671 12.1735 17.8753L9.36777 11.5613L14.0517 5.31599L7.80645 9.99995L1.51901 7.90388Z"
                  fill="white"
                />
              </svg>
              Telegram
            </div>
          </a>
          <a
            href="https://twitter.com/SMURFhamster"
            className=" px-8 py-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white flex justify-center items-center gap-4 text-base font-normal font-golf leading-snug tracking-tight">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7887 2.85087C22.9416 3.2274 22.0291 3.48097 21.0724 3.59624C22.0502 3.01032 22.7975 2.08438 23.1529 0.979787C22.2385 1.52152 21.2261 1.91533 20.1484 2.12664C19.2878 1.20647 18.0564 0.63208 16.6982 0.63208C13.6438 0.63208 11.4 3.48097 12.0896 6.43937C8.16113 6.2415 4.67445 4.35889 2.34231 1.49847C1.10325 3.62313 1.70069 6.40479 3.80614 7.81291C3.03196 7.78793 2.30389 7.5747 1.66611 7.22123C1.61424 9.41121 3.18565 11.461 5.46015 11.9182C4.79547 12.0987 4.06548 12.141 3.32396 11.9988C3.92525 13.8776 5.67531 15.2435 7.74234 15.2819C5.75023 16.8418 3.24712 17.5391 0.736328 17.2433C2.83026 18.5861 5.31415 19.3679 7.98439 19.3679C16.7674 19.3679 21.7275 11.9508 21.4278 5.29827C22.3537 4.63359 23.1548 3.79987 23.7887 2.85087Z"
                  fill="white"
                />
              </svg>
              Twitter
            </div>
          </a>
        </div>
        <p className="text-white font-normal font-['Space Grotesk'] leading-10">
          Copyright © 2023 rat. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
