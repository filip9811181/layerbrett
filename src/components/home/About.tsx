import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[1307px] relative z-[3] mt-[-9.5px] lg:pt-[62px]">
      {/* Background and decorative images */}
      <img
        src="/assets/IMG_1921.png"
        className=" max-w-[520px] xl:max-w-[921px] block   right-[50%] translate-x-1/2 bottom-20 lg:-bottom-5 absolute z-[0]"
        alt=""
      />

      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/Baclground 2 1-min.png"
        className="absolute top-0 hidden lg:block bottom-0 object-cover w-full h-full z-[-1]"
        alt=""
      />
      <img
        src="/assets/Baclground 2 1.png"
        className="absolute top-0  lg:hidden bottom-0 object-cover w-full h-full z-[-1]"
        alt=""
      />
      <div className="flex flex-col  ">
        <p className="font-nunito font-[900] text-center max-xl:mt-2.5 text-2xl text-[#003E57] uppercase">
          {t('featuredin')}
        </p>
        <Marquee gradient={false} speed={40} pauseOnHover={true} loop={0} autoFill className="py-4">
          <div className="inline-flex gap-[54px] items-center">
            <img src="/assets/1.png" className="max-w-[159px] h-auto" alt="News" />
            <img src="/assets/2.png" className="max-w-[274px] h-auto" alt="News" />
            <img src="/assets/3.png" className="max-w-[236px] h-auto" alt="News" />
            <img src="/assets/4.png" className="max-w-[93px] h-auto" alt="News" />
            <img src="/assets/5.png" className="max-w-[136px] h-auto" alt="News" />
            <img src="/assets/7.png" className="max-w-[372px] h-auto" alt="News" />
            <div className="w-[34px]" />
          </div>
        </Marquee>
      </div>

      {/* Content */}
      <div className="max-w-[711px] px-4 pt-10 lg:pt-[50px] w-full max-xl:mx-auto xl:ml-auto xl:mr-[241px] largeScreen:mr-[370px]">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-[30px] lg:items-center">
          <span className="uppercase text-[#003E57] font-normal text-[40.3px] xl:text-[48px] font-koulen">
            {t('about')}
          </span>
          <img src="/assets/LayerBrett.svg" className="max-w-[360px] w-full h-auto" alt="" />
        </div>
        <p className="font-koulen mt-[10px] mb-4  leading-[130%] text-[24px] font-normal text-[#003E57]">
          {t('welcome')}
        </p>

        {/* Mobile-only image */}

        {/* Button container (fixed) */}
        <div className="flex flex-col lg:flex-row mx-auto max-lg:absolute bottom-[-130px] w-full max-w-[358px] left-1/2 max-lg:transform -translate-x-1/2 px-4 gap-[23px] lg:items-center">
          <button
            onClick={() => window.open('/whitepaper.pdf', '_blank')}
            className="bg-[#FFB3E8] text-[#003E57] rounded-[5px] lg:max-w-[181px] w-full h-[93px] lg:h-[47px] flex items-center justify-center font-koulen font-normal text-[35.68px] lg:text-lg border-[7.93px] lg:border-[4px] border-[#EF53C0C0] transition-all duration-200 ease-in-out hover:bg-[#f7a8dc] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
            style={{
              boxShadow: '-8px 8px 0px 0px #003E58',
            }}
          >
            {t('whitepaper')}
          </button>

          <button
            className="bg-[#00D2ED] text-[#003E57] rounded-[5px] lg:max-w-[181px] w-full h-[93px] lg:h-[47px] flex items-center justify-center font-koulen font-normal text-[35.68px] lg:text-lg border-[7.93px] lg:border-[4px] border-[#009BAF] transition-all duration-200 ease-in-out hover:bg-[#00c6e0] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
            style={{
              boxShadow: '-8px 8px 0px 0px #003E58',
            }}
            onClick={() => {
              document.getElementById('buy-token')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }}
          >
            {t('buynow')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
