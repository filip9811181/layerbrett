'use client';
import React, { useState } from 'react';
import ResponsiveImage from '../ui/ResponsiveImage';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Presale = () => {
  const { t } = useTranslation();
  const fullAddress = '0x11a8e4b44d3ba2e0b367cd55df83539c215b2610'; // full address
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  const features = [
    {
      imgSrc: '/assets/Ethereum.svg',
      imgWidth: 48,
      imgHeight: 48,
      mobileWidth: 32,
      mobileHeight: 32,
      text: t('presale_text1'),
    },
    {
      imgSrc: '/assets/Digital key.svg',
      imgWidth: 60,
      imgHeight: 60,
      mobileWidth: 40,
      mobileHeight: 40,
      text: t('presale_text2'),
    },
  ];
  const benefits = [
    {
      imgSrc: '/assets/Coins.svg',
      imgWidth: 51,
      imgHeight: 51,
      mobileWidth: 36,
      mobileHeight: 36,
      text: t('presale_text3'),
    },
    {
      imgSrc: '/assets/Bridge.svg',
      imgWidth: 68,
      imgHeight: 68,
      mobileWidth: 44,
      mobileHeight: 44,
      text: t('presale_text4'),
    },
  ];

  return (
    <div className=" min-h-[1600px] xl:min-h-[1153px]    overflow-hidden">
      <img
        src="/assets/ads5.png"
        className="max-w-full 3xl:block hidden h-auto absolute bottom-[-60px] right-0"
        alt=""
      />
      <img
        width={1000}
        height={1000}
        loading="lazy"
        src="/assets/alien-dance3.png"
        className="max-lg:max-w-[111px]  max-w-[161px] h-auto absolute max-lg:bottom-[40px] bottom-[-100px] max-sm:left-[-10px] left-0 "
        alt=""
      />
      <img
        width={1000}
        height={1000}
        loading="lazy"
        src="/assets/alien-dance2 4.png"
        className="max-w-[111px] xl:max-w-[200px]   h-auto absolute max-lg:bottom-[80px] bottom-[-61px] left-20 lg:left-[10%]"
        alt=""
      />
      <img
        src="/assets/alien7.svg"
        className="max-w-full xl:block hidden h-auto absolute bottom-[-40%] 3xl:bottom-[-45%] left-0"
        alt=""
      />
      <img
        src="/assets/yoda 1.svg"
        className="max-largeScreen:max-w-[200px] max-w-full h-auto absolute max-largeScreen:-bottom-10 bottom-6 hidden xl:block right-[450px]"
        alt=""
      />
      <img
        src="/assets/medium 1.svg"
        className="absolute left-[69%] xl:left-[48.8%] top-[5%] xl:top-[18%] max-w-[100px] xl:max-w-[152px] w-full"
        alt=""
      />
      <div className="border-[#B9B9B9] border-[3.04px] uppercase bg-[#E9E9E9] absolute bottom-[28%] xl:bottom-[20%] mediumScreen:bottom-[38%]  largeScreen:bottom-[47%] right-[40%] xl:right-[13%] mediumScreen:right-[15%] largeScreen:right-[15%] text-center max-w-[198.66293334960938px] h-[69.265625px] rounded-[11.42px] text-[#003E57] text-[18.27px] font-koulen font-normal flex items-center justify-center leading-[80%]">
        {t('presale_title1')}
      </div>
      <div className="absolute max-xl:bottom-[6%] bottom-[-12%] right-0">
        <img
          src="/assets/ads5.png"
          className=" max-sm:max-w-[250px] xl:max-w-[353px] mediumScreen:max-w-[500px]  largeScreen:max-w-full h-auto 3xl:hidden max-xl:bottom-0 max-md:bottom-10 max-2xl:bottom-[-30px] relative     "
          alt=""
        />
      </div>
      <img
        src="/assets/yoda 1.svg"
        className="max-w-[148px] h-[179px] xl:hidden    absolute max-md:bottom-[12%] bottom-[9%] max-md:left-[18%] left-[20%]"
        alt=""
      />
      <div className="max-w-[1163px] hidden xl:block z-[999]  left-1/2 -translate-x-1/2 mx-auto w-full p-5 absolute top-[-110px] rounded-[15px] bg-[#0487AB] border-[4px] border-[#003E58] shadow-outerDesk">
        <div className="w-full border-[4px] border-[#003E58]  shadow-custom-inset bg-[#005870] p-6 grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white font-obriton">{t('Symbol')}:</h2>
              <div className="max-w-[316px] leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                LBRETT
              </div>
            </div>

            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white font-obriton">{t('StartingPrice')}:</h2>
              <div className="max-w-[316px] leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                $0.004
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white font-obriton">{t('Chain')}:</h2>
              <div className="max-w-[316px] leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                Ethereum (ERC-20)
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-bold relative z-[2] text-white font-obriton">{t('ContractAddress')}:</h2>
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
                {copied && <span className="absolute -top-6 right-4 text-white text-sm">{t('Copied')}!</span>}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white font-obriton">{t('Supply')}:</h2>
              <div className="max-w-[316px] leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 xl:px-[48px] text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                10,000,000,000
              </div>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-[20px] font-bold text-white font-obriton">{t('Decimals')}:</h2>
              <div className="max-w-[316px] leading-none bg-[#0487AB] rounded-[15px] border-[4px] border-[#003E58] shadow-shadowSm py-2 px-4 xl:px-[48px] text-[33.33px] text-[#D6FF00] font-koulen underline-offset-0 w-full">
                18
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[200px]">
        <div className="px-4">
          <img
            src="/assets/presale.svg"
            className=" max-w-[366px] xl:max-w-[608px] w-full xl:mr-auto h-[160px] -ml-10 xl:h-[266px] xl:ml-[10%] largeScreen:ml-[19%]"
            alt=""
          />
          <div className="max-w-[1098px] pt-[30px] xl:pt-[60px] flex flex-col gap-6 xl:gap-10 w-full xl:mr-auto xl:ml-[5%]">
            <div className="max-w-[362px] md:max-w-[1027px] w-full max-md:mx-auto lg:mt-[28px] md:ml-auto grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-[33px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#0487AB] shadow-saleMob xl:shadow-outerDesk p-4 xl:p-5 gap-5 flex items-center rounded-[15px] border-[4px] border-[#003E58]"
                >
                  <div
                    className="w-[72.10865020751953px] xl:w-[99px] flex-shrink-0 h-[72.10865020751953px] xl:h-[99px] flex items-center justify-center bg-[#FFB3E8] border-[4px] border-[#EF53C0C0] rounded-[5px]"
                    style={{
                      boxShadow: '-8px 8px 0px 0px #003E58',
                    }}
                  >
                    <ResponsiveImage
                      src={feature.imgSrc}
                      width={feature.imgWidth}
                      height={feature.imgHeight}
                      mobileWidth={feature.mobileWidth}
                      mobileHeight={feature.mobileHeight}
                      alt=""
                    />
                  </div>
                  <p className="text-white text-[15px] xl:text-[24px] font-normal leading-[120%] xl:leading-[85%] font-koulen">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="max-w-[362px] md:max-w-[1027px] w-full max-md:mx-auto md:mr-auto grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-[33px]">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[#0487AB] shadow-saleMob xl:shadow-outerDesk  p-5 gap-5 flex items-center rounded-[15px] border-[4px] border-[#003E58]"
                >
                  <div
                    className="w-[72.10865020751953px] xl:w-[99px] flex-shrink-0 h-[72.10865020751953px] xl:h-[99px] flex items-center justify-center bg-[#FFB3E8] border-[4px] border-[#EF53C0C0] rounded-[5px]"
                    style={{
                      boxShadow: '-8px 8px 0px 0px #003E58',
                    }}
                  >
                    <ResponsiveImage
                      src={benefit.imgSrc}
                      width={benefit.imgWidth}
                      height={benefit.imgHeight}
                      mobileWidth={benefit.mobileWidth}
                      mobileHeight={benefit.mobileHeight}
                      alt=""
                    />
                  </div>
                  <p className="text-white text-[15px] xl:text-[24px] font-normal leading-[120%] xl:leading-[85%] font-koulen">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="max-w-[708px] text-[#252367] font-normal font-koulen text-[20px] xl:text-[29.77px] mx-auto text-center leading-[100%]">
              {t('presale_title2')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presale;
