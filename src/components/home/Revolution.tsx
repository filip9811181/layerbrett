import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Revolution = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: '/assets/Fast forward.svg',
      title: t('revolution_title1'),
      description: t('revolution_title1_des'),
    },
    {
      icon: '/assets/World.svg',
      title: t('revolution_title2'),
      description: t('revolution_title2_des'),
    },
    {
      icon: '/assets/Fees.svg',
      title: t('revolution_title3'),
      description: t('revolution_title3_des'),
    },
    {
      icon: '/assets/Programmer.svg',
      title: t('revolution_title4'),
      description: t('revolution_title4_des'),
    },
    {
      icon: '/assets/Team.svg',
      title: t('revolution_title5'),
      description: t('revolution_title5_des'),
    },
  ];

  return (
    <div className="min-h-[1666px] lg:min-h-[1313px] px-4">
      <img
        src="/assets/t fighter 6.svg"
        className="absolute bottom-[11%] lg:block hidden right-[15%] max-w-[102px] w-full h-auto"
        alt=""
      />
      <img
        src="/assets/Ads6.png"
        className="absolute bottom-[0%] lg:block hidden right-[20%] max-w-[280px] w-full h-auto"
        alt=""
      />

      <img
        src="/assets/planet 1.svg"
        className="max-w-[1500px] lg:block hidden absolute bottom-[-42%] left-1/2 translate-x-[-50%] z-[-1] w-full h-auto"
        alt=""
      />

      <img
        src="/assets/Brett Wars.svg"
        className="max-w-[394px] lg:block hidden absolute bottom-[-160px] left-1/2 translate-x-[-50%] z-[-1] w-full h-auto"
        alt=""
      />
      <img
        src="/assets/ads4.png"
        className="absolute left-1/2 -translate-x-1/2 top-[-150px] lg:top-[-60px] max-w-[200px] lg:max-w-full h-auto "
        alt=""
      />
      <div className="px-4 lg:pt-[400px]">
        <p className="max-lg:max-w-[365px] max-lg:mx-auto w-full uppercase font-normal font-koulen text-[23px] xl:text-[32px] text-white text-center">
          {t('revolution_title6')}
        </p>
        <img src="/assets/Speed.svg" className="max-w-[1314px] lg:block hidden w-full mx-auto pt-10" alt="" />
        <img src="/assets/speedMob.svg" className="max-w-full lg:hidden  w-full mx-auto  " alt="" />
        <div className="max-w-[1445px] pt-5 mx-auto grid items-start grid-cols-1 lg:grid-cols-3 gap-6 3xl:gap-x-[80px] 3xl:gap-y-[30px]">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex items-center gap-[26px]">
                <div
                  className="w-[50px] h-[43px] flex items-center justify-center bg-[#FFB3E8] border-[#EF53C0] border-[2.31px]"
                  style={{
                    boxShadow: '-9.25px 9.25px 0px 0px #003E58',
                  }}
                >
                  <Image src={feature.icon} width={24} height={24} alt="" />
                </div>
                <h3 className="max-sm:text-[29px] text-[32px] text-white font-normal font-koulen">{feature.title}</h3>
              </div>
              <p className="text-lg font-medium font-nunito leading-[140%]">{feature.description}</p>
            </div>
          ))}

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
      </div>
    </div>
  );
};

export default Revolution;
