import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const HowWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      step: `${t('STEP')} 1`,
      title: t('how_title1'),
      description: t('how_title1_des'),
      image: '/assets/alien-dance2 4.png',
      imageStyle: 'absolute max-w-[110px] lg:max-w-[142px] w-full top-[-100px] lg:top-[-137px] right-5',
      offset: 'lg:top-[200px]',
    },
    {
      step: `${t('STEP')} 2`,
      title: t('how_title2'),
      description: t('how_title2_des'),
      image: '',
      imageStyle: '',
      offset: 'lg:top-[130px]',
    },
    {
      step: `${t('STEP')} 3`,
      title: t('how_title3'),
      description: t('how_title3_des'),
      image: '/assets/alien8.svg',
      imageStyle: 'absolute lg:block hidden max-w-[142px] w-full top-[-50px] right-[-50px]',
      offset: 'lg:top-0',
    },
  ];

  return (
    <div className=" min-h-[1983px] lg:min-h-[1475.6162109375px]    overflow-hidden">
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/Group 1597885443-min.png"
        className="absolute lg:block hidden top-0 bottom-0 object-cover w-full h-full z-[-1]"
        alt=""
      />
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/Group 1597885443.png"
        className="max-w-full md:h-full  md:hidden w-full h-[1053px] absolute z-[0] top-0"
        alt=""
      />
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/Ellipse 3101.svg"
        className="max-w-full w-full md:h-full object-cover md:hidden h-[979px] absolute z-[-1] top-[40%]"
        alt=""
      />
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/Group 1597885778.svg"
        className="max-w-full lg:hidden md:top-[-20px] w-full object-cover md:h-full h-[684px] absolute z-[-1] bottom-0"
        alt=""
      />
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/jabba-talking 1.png"
        className="absolute hidden lg:block right-[64px] bottom-[120px] object-cover max-w-[1046px] w-full z-[1] "
        alt=""
      />

      <img
        loading="lazy"
        src="/assets/sus 1.svg"
        className="absolute  lg:block  hidden  bottom-[120px]  right-[52%] max-w-[207px] h-[211px] w-full z-[1]"
        alt=""
      />

      <img
        width={1000}
        height={1000}
        loading="lazy"
        src="/assets/alien-dance3.png"
        className="absolute block md:hidden lg:block top-[10%] lg:top-[19%] bottom-0 max-w-[121px] w-full left-[3%]  "
        alt=""
      />
      <img
        loading="lazy"
        src="/assets/r2d2 1-min.png"
        className="absolute bottom-[12%] hidden lg:block 3xl:bottom-[13%] left-0 3xl:left-10 max-w-[200px] largeScreen:max-w-[281px] w-full"
        alt=""
      />

      <img
        loading="lazy"
        src="/assets/jabba 1.svg"
        className="absolute  lg:hidden left-0 md:bottom-[220px] bottom-[80px] object-cover   h-[319px] max-w-full z-[1] "
        alt=""
      />
      <img
        loading="lazy"
        src="/assets/r2d2 111.svg"
        className="absolute  lg:hidden md:bottom-[220px] bottom-[80px] right-5 3xl:left-10 max-w-[130px] h-[202px] w-full z-[1]"
        alt=""
      />
      <img
        loading="lazy"
        src="/assets/sus 1.svg"
        className="absolute  lg:hidden md:bottom-[220px] bottom-[80px] left-5 3xl:left-10 max-w-[121px] h-[123px] w-full z-[1]"
        alt=""
      />
      <div className=" pt-[132px] lg:pt-[160px] max-w-[1228px] mx-auto w-full">
        <img
          loading="lazy"
          src="/assets/How to buy.svg"
          className="max-w-[373px] max-lg:mx-auto relative lg:max-w-[598px]  block ml-[74px] w-full"
          alt=""
        />
        <img
          loading="lazy"
          src="/assets/How to buy.svg"
          className="max-w-[373px] mx-auto   lg:hidden pb-[50px]   w-full"
          alt=""
        />
        <div className="flex px-4 max-lg:items-center max-lg:gap-[58px] gap-[38px] lg:flex-row flex-col relative">
          {steps.map((stepData, index) => (
            <div
              key={index}
              className={`relative max-w-[384px] lg:shadow-outerDesk shadow-cardMob px-10 pt-10 pb-3 rounded-[15px] w-full bg-[#0487AB] border-[4px] border-[#003E58] ${stepData.offset}`}
            >
              {/* Step Label */}
              <div
                className="bg-[#FFB3E8] text-[20.83px] absolute top-[-30px] max-w-[146px] w-full h-[50px] flex items-center justify-center font-normal font-koulen text-[#003E57] border-[#EF53C0C0] border-[4px] rounded-[5px]"
                style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
              >
                {stepData.step}
              </div>

              {/* Optional Image */}
              {stepData.image && <img loading="lazy" src={stepData.image} className={stepData.imageStyle} alt="" />}

              {/* Step Title */}
              <h2 className="text-[#D6FF00] text-[33.33px] font-normal font-koulen">{stepData.title}</h2>

              {/* Description */}
              <p className="text-[20.83px] leading-[140%] font-normal font-koulen">{stepData.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
