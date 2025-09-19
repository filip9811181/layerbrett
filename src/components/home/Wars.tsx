import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WebmImage from '../ui/WebmImage';

const Wars = () => {
  const { t } = useTranslation();

  return (
    <div className="relative   max-mini:min-h-[1000px] mini:min-h-[1456px]">
      <img
        src="/assets/Ads6.png"
        className="absolute top-[5%] lg:hidden  right-[4%] max-w-[180px] w-full h-auto"
        alt=""
      />

      <img src="/assets/planetMob.svg" className="max-w-full h-auto w-full lg:hidden" alt="" />
      <img
        src="/assets/t fighter 8.svg"
        className="max-w-[60.04169614028814px] absolute top-10 left-10 h-auto w-full lg:hidden"
        alt=""
      />

      <img
        src="/assets/t fighter 78.svg"
        className="max-w-[45.51641241902347px] absolute top-10 right-10 h-auto w-full lg:hidden"
        alt=""
      />
      {/* Background image */}
      <img src="/assets/background9 1.svg" className="absolute top-0 left-0 object-cover w-full h-full z-[-1]" alt="" />

      {/* Fighter image */}
      <img
        src="/assets/t fighter 7.svg"
        className="absolute hidden lg:block top-[100px] left-10 max-w-[197px] w-full h-auto"
        alt=""
      />

      {/* War image */}
      <WebmImage
        width={1000}
        height={1000}
        src="/gif/war.webm"
        className="max-w-[1612px] w-full mx-auto relative z-[1] -mt-[150px] h-auto"
        alt=""
      />

      {/* Div below war image */}
      <div className="lg:hidden px-4">
        <img src="/assets/Group 1597885788.png" className="max-w-full h-auto w-full" alt="" />
        <div className="flex flex-col lg:flex-row gap-[23px] justify-center items-center">
          <button
            onClick={() => window.open('/whitepaper.pdf', '_blank')}
            className="bg-[#FFB3E8] text-[#003E57] rounded-[5px] lg:max-w-[181px] w-full h-[93px] lg:h-[47px] flex items-center justify-center font-koulen font-normal text-[43.19px] lg:text-lg border-[7.93px] lg:border-[4px] border-[#EF53C0C0] transition-all duration-200 ease-in-out hover:bg-[#f7a8dc] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
            style={{
              boxShadow: '-8px 8px 0px 0px #003E58',
            }}
          >
            {t('whitepaper')}
          </button>

          <button
            className="bg-[#00D2ED] text-[#003E57] rounded-[5px] lg:max-w-[181px] w-full h-[93px] lg:h-[47px] flex items-center justify-center font-koulen font-normal text-[43.19px] lg:text-lg border-[7.93px] lg:border-[4px] border-[#009BAF] transition-all duration-200 ease-in-out hover:bg-[#00c6e0] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
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
      <div className="relative z-[2] max-w-[1163px] hidden lg:block mx-auto w-full lg:mt-[-50px]">
        <img src="/assets/Group 1597885486 (1).svg" className="w-full h-auto" alt="" />
        <button
          className="bg-[#FFB3E8] absolute top-[39%] left-[28%] text-[#003E57] rounded-[5px] max-w-[480px] w-full h-[57px] flex items-center justify-center font-koulen font-normal text-lg border-[4px] border-[#EF53C0C0] transition-all duration-200 ease-in-out hover:bg-[#f7a8dc] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
          style={{
            boxShadow: '-8px 8px 0px 0px #003E58',
          }}
        >
          {t('ComingSoon')}
        </button>
        <div className="flex absolute bottom-10 w-full gap-[23px] justify-center items-center">
          <button
            onClick={() => window.open('/whitepaper.pdf', '_blank')}
            className="bg-[#FFB3E8] text-[#003E57] rounded-[5px] max-w-[181px] w-full h-[47px] flex items-center justify-center font-koulen font-normal text-lg border-[4px] border-[#EF53C0C0] transition-all duration-200 ease-in-out hover:bg-[#f7a8dc] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
            style={{
              boxShadow: '-8px 8px 0px 0px #003E58',
            }}
          >
            {t('whitepaper')}
          </button>

          <button
            className="bg-[#00D2ED] text-[#003E57] rounded-[5px] max-w-[181px] w-full h-[47px] flex items-center justify-center font-koulen font-normal text-lg border-[4px] border-[#009BAF] transition-all duration-200 ease-in-out hover:bg-[#00c6e0] hover:shadow-[inset_-8px_8px_0px_0px_#003E58]"
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

export default Wars;
