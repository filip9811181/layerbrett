'use client';
import React, { useState } from 'react';
import WebmImage from '../ui/WebmImage';

const Tokenomics = () => {
  const fullAddress = '0x11a8e4b44d3ba2e0b367cd55df83539c215b2610'; // full address
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <div className="    min-h-[2800px] lg:min-h-[1337px]      ">
      <img
        src="/assets/backgrounds 1-min.png"
        className="absolute hidden lg:block top-0 bottom-0 object-cover w-full h-full z-[-1]"
        alt=""
      />
      <img
        src="/assets/bgRemove.png"
        className="max-w-full h-[862px] w-full md:object-cover absolute z-[0] top-0 lg:hidden"
        alt=""
      />
      <img
        src="/assets/Group 1597885817.svg"
        className="max-w-full h-[1950px] w-full absolute object-cover z-[-1] bottom-[100px] lg:hidden"
        alt=""
      />
      <img
        src="/assets/alien12 1.svg"
        className=" max-w-[93px] lg:max-w-[252px]  block w-full absolute top-[8%] lg:top-[15%] left-[4%] lg:left-[7%]"
        alt=""
      />
      <img
        src="/assets/alien10 1.svg"
        className="max-w-[112.15146971926202px] lg:max-w-[269px]  block w-full absolute top-[8%] lg:top-[15%] right-[4%] lg:right-[7%]"
        alt=""
      />
      <img
        src="/assets/alien9 1.svg"
        className="max-w-[112.15146971926202px] lg:max-w-[206px]  block w-full absolute max-lg:top-[20%] lg:bottom-[19%] left-[9%]"
        alt=""
      />
      <img
        src="/assets/alien11 1.svg"
        className="max-w-[112.15146971926202px] lg:max-w-[206px]    lg:hidden w-full absolute max-lg:top-[19%] lg:bottom-[19%] right-[9%]"
        alt=""
      />
      <img
        src="/assets/Group 1597885818 (1).svg"
        className="absolute left-1/2 -translate-x-1/2 top-[25%] lg:hidden max-w-full z-[1] h-auto"
        alt=""
      />

      <img
        src="/assets/alien13.png"
        className="max-xxs:max-w-[80px] max-w-[97px] w-full absolute lg:hidden right-3 -scale-x-100   top-[40%]"
        alt=""
      />
      <img
        src="/assets/alien16.png"
        className="max-xxs:max-w-[100px] max-w-[128px] w-full absolute lg:hidden right-3 top-[60%]"
        alt=""
      />
      {/* Centered GIF */}
      <WebmImage
        src="/gif/roadmap.webm"
        alt="Roadmap GIF"
        className="absolute left-1/2 top-[15%] lg:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto max-lg:max-w-[322px] max-w-full h-auto object-contain pointer-events-none max-lg:z-[2] z-[-1]"
      />
      {/* Mobile background image */}
      <img
        src="/assets/tokenomics2 1.png"
        alt=""
        className="absolute left-1/2 lg:hidden z-[2] transform top-[11%] -translate-x-1/2 w-full max-w-[444px]"
      />

      <div className="max-w-[1163px]  xl:hidden z-[999]  left-1/2 -translate-x-1/2 mx-auto w-full p-3 absolute bottom-[228px] lg:bottom-0 rounded-[15px] bg-[#0487AB] border-[4px] border-[#003E58] shadow-outerDesk">
        <div className="w-full border-[4px] border-[#003E58]  shadow-custom-inset bg-[#005870] p-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] font-bold text-white font-obriton">Symbol:</h2>
              <div className="max-w-[316px] leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                LBRETT
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] font-bold text-white font-obriton">Starting Price:</h2>
              <div className="max-w-[316px] leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                $0.004
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] font-bold text-white font-obriton">Chain:</h2>
              <div className="max-w-[316px] leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                Ethereum (ERC-20)
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] font-bold relative z-[2] text-white font-obriton">Contract Address:</h2>
              <div className="max-w-[316px] relative leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 xl:px-[48px] text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                0x11...215b2610
                <img
                  src="/assets/solar_copy-bold.png"
                  width={24}
                  height={24}
                  onClick={handleCopy}
                  className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
                  alt="Copy address"
                />
                {copied && <span className="absolute -top-6 right-4 text-white text-sm">Copied!</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] font-bold text-white font-obriton">Supply:</h2>
              <div className="max-w-[316px] leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 xl:px-[48px] text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                10,000,000,000
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[20px] font-bold text-white font-obriton">Decimals:</h2>
              <div className="max-w-[316px] leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 xl:px-[48px] text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                18
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative pt-[80px] lg:pt-[150px]">
        {/* Title Image */}
        <img src="/assets/Tokenomics.svg" className="max-w-[381px] lg:max-w-[528px] mx-auto w-full" alt="" />

        {/* Large screen background image */}
        <img
          src="/assets/Group 1597885481.png"
          alt=""
          className="absolute left-1/2 hidden lg:block transform top-[300px] -translate-x-1/2 w-full max-w-[1387px]"
        />
      </div>
    </div>
  );
};
export default Tokenomics;
