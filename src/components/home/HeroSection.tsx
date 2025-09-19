import React from 'react';
import { BuyToken } from '../ui/buy-token';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import WebmImage from '../ui/WebmImage';

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className=" min-h-[1598px] xl:min-h-[1100px] pt-[147px] xl:pt-[200px] relative z-[4]">
      <Image
        width={1000}
        height={1000}
        src="/assets/Baclground 1 back 2-min.png"
        className="absolute object-cover top-0 w-full h-full z-[-1] hidden md:block"
        alt=""
      />
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/Baclground 1 back 2.png"
        className="absolute object-cover top-0 w-full h-full z-[-1]  md:hidden"
        alt=""
      />

      <WebmImage
        src="/gif/roadmap.webm"
        alt="Roadmap GIF"
        width="1000"
        height="1000"
        className="w-auto max-w-[300px] md:max-w-[450px] largeScreen:max-w-[547px] h-auto absolute right-16 lg:right-[20%] bottom-[-23px] md:bottom-[0%] lg:bottom-16 largeScreen:bottom-0"
      />

      <Image
        width={1000}
        height={1000}
        src="/assets/hero1.png"
        className="w-auto max-w-[200px] md:max-w-[300px] largeScreen:max-w-[464px] h-auto absolute right-12 lg:right-[18%] largeScreen:right-[16%] bottom-[4%] lg:bottom-[23%] largeScreen:bottom-[20%]"
        alt="Roadmap GIF"
      />

      {/* <Image
        width={1000}
        height={1000}
        src="/assets/IMG_0971.png"
        className="absolute lg:block hidden max-md:max-w-[200px] max-md:h-auto max-lg:max-w-[296px] max-largeScreen:max-w-[350px] max-w-[421px] max-md:bottom-[104px] bottom-10 z-[1] xl:bottom-[60px]   right-[-30px]"
        alt=""
      /> */}
      {/* <Image
        width={1000}
        height={1000}
        src="/assets/IMG_1923.png"
        className="absolute max-w-[800px] largeScreen:max-w-[1041px] w-full h-auto right-[-60px] xl:right-0 bottom-32 mediumScreen:bottom-0"
        alt=""
      /> */}
      <Image
        width={1000}
        height={1000}
        src="/assets/IMG_0969 1.svg"
        className="absolute hidden lg:block max-sm:max-w-[231px] max-lg:max-w-[252px] max-largeScreen:max-w-[336px] xl:hidden md:left-8 max-w-[425px] w-full max-md:bottom-[101px] bottom-[60px] xl:bottom-[110px] z-[0] max-xxs:left-[-20px] max-lg:left-0 largeScreen:right-[30%]"
        alt=""
      />

      {/* <Image
        width={1000}
        height={1000}
        src="/assets/IMG_0969 2.png"
        className="absolute  xl:block hidden right-[32%] largeScreen:right-[40%] max-w-[380px] largeScreen:max-w-[425px] w-full bottom-[60px] xl:bottom-[27%] mediumScreen:bottom-[20%] z-[2] "
        alt=""
      /> */}
      <Image
        width={1000}
        height={1000}
        src="/assets/small monster 1.svg"
        className="absolute max-lg:max-w-[28px] max-w-[47px] w-full max-md:bottom-[72px] bottom-14 max-xl:left-3 left-[44%] xl:bottom-[162px] z-[2]  "
        alt=""
      />

      <img
        width={1000}
        height={1000}
        src="/assets/alien-dance3.png"
        className="absolute max-w-[161px] max-lg:max-w-[100.515869140625px] bottom-10 xl:bottom-14 max-lg:right-0  xl:left-[43%]  largeScreen:left-[48%]   "
        alt=""
      />

      <img src="/assets/bush 2.svg" className="absolute bottom-[10%] xl:bottom-[-80px] left-0 z-[-1]" alt="" />
      <div className="max-w-[1663px] largeScreen:px-4 px-16 xl:flex-row flex-col-reverse gap-[68px] xl:gap-0 mx-auto max-lg:px-4 w-full flex justify-between items-start">
        <BuyToken />
        <div className="flex flex-col max-lg:items-center max-xl:max-w-[500px] xl:max-w-[650px]   largeScreen:max-w-[850px] largeScreen:ml-auto w-full ">
          <h1 className=" text-[44.9px] max-lg:max-w-[344px] w-full mx-auto max-lg:leading-[94%] xl:text-[48px] font-normal font-koulen text-white text-center ">
            {t('LAYERBRETTISUNLEASHING')}
          </h1>
          <img src="/assets/future.svg" className="hidden xl:block" alt="" />
          <img src="/assets/fututrMob.svg" alt="" className="lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
