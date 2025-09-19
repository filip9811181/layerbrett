import React from 'react';
import ResponsiveImage from '../ui/ResponsiveImage';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import WebmImage from '../ui/WebmImage';

const BuiltSection = () => {
  const { t } = useTranslation();
  const features = [
    {
      title: t('builtonethereum'),
      description: t('builtonethereum_des'),
      img: '/assets/Ethereum.svg',
      imgWidth: 48,
      imgHeight: 48,
      mobileWidth: 32,
      mobileHeight: 32,
      align: 'ml-auto',
    },
    {
      title: t('SeamlessInteroperability'),
      description: t('SeamlessInteroperability_des'),
      img: '/assets/Coins.svg',
      imgWidth: 51,
      imgHeight: 51,
      mobileWidth: 36,
      mobileHeight: 36,
      align: 'mr-auto',
    },
    {
      title: t('CommunityDrivenVision'),
      description: t('CommunityDrivenVision_des'),
      img: '/assets/Bridge.svg',
      imgWidth: 68,
      imgHeight: 68,
      mobileWidth: 44,
      mobileHeight: 44,
      align: 'ml-auto',
    },
  ];

  const features2 = [
    {
      title: t('DoubletheRewards'),
      description: t('DoubletheRewards_des'),
      img: '/assets/Digital key.svg',
      imgWidth: 60,
      imgHeight: 60,
      mobileWidth: 40,
      mobileHeight: 40,
      align: 'm4-auto',
    },
    {
      title: t('CuttingEdgeTechnology'),
      description: t('CuttingEdgeTechnology_des'),
      img: '/assets/Documents.svg',
      imgWidth: 54,
      imgHeight: 54,
      mobileWidth: 40,
      mobileHeight: 40,
      align: 'ml-auto',
    },
    {
      title: t('ScalableandSecure'),
      description: t('ScalableandSecure_des'),
      img: '/assets/Link.svg',
      imgWidth: 61,
      imgHeight: 61,
      mobileWidth: 40,
      mobileHeight: 40,
      align: 'mr-auto',
    },
  ];

  return (
    <div className=" xl:min-h-[1233px] bg-[#1E7381] flex flex-col justify-center relative z-[2] max-largeScreen:mt-[-7.5px] top-0 pt-[62px] overflow-hidden">
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/background3 1 (1).svg"
        className="absolute xl:block hidden top-0 bottom-0 object-cover w-full h-full z-[-1]"
        alt=""
      />
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/background3 2.svg"
        className="max-w-full h-[1235px] xl:hidden top-0 w-full absolute z-[-1]"
        alt=""
      />
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/t fighter 5.svg"
        className=" max-w-[67px] xl:max-w-[178px] h-auto absolute left-10 xl:left-[14%] z-[-1] top-[8%] max-lg:blur-[5px] xl:top-[10%]"
        alt=""
      />
      <Image
        width={1000}
        height={1000}
        priority
        src="/assets/t fighter 4.svg"
        className="max-w-[109px] absolute h-auto -right-10 xl:right-[14%] z-[-1] top-[8%]"
        alt=""
      />
      <img src="/assets/t fighter 5.png" className="max-w-[109px] absolute keft-0 xl:hidden z-[-1] top-[20%]" alt="" />
      <div className="flex w-full  relative justify-between flex-col xl:flex-row items-center max-w-[1682px] mx-auto px-4">
        <WebmImage
          src="/gif/alien-dance4.webm"
          alt=""
          width="1000"
          height="1000"
          className="max-w-[500px] pt-[150px] largeScreen:max-w-[600px] xl:hidden h-auto w-full"
        />

        <div className="max-w-[450px] w-full largeScreen:max-w-[592px] flex flex-col gap-[33px]">
          {features.map((feature, index) => {
            let maxWidthClass3xl = '';
            if (index === 0) maxWidthClass3xl = 'largeScreen:max-w-[497px]';
            else if (index === 1) maxWidthClass3xl = 'largeScreen:max-w-[553px]';
            else maxWidthClass3xl = 'largeScreen:max-w-[521px]';

            return (
              <div
                key={index}
                className={` py-5 px-3 lg:p-5 shadow-cardMob xl:shadow-outerDesk max-w-[400px] gap-4 w-full ${maxWidthClass3xl} ${feature.align} bg-[#0487AB] rounded-[14px] border-[#003E58] border-[4px] flex items-start`}
              >
                <div
                  className="w-[70px] flex-shrink-0 h-[70px] largeScreen:w-[99px] justify-center largeScreen:h-[99px] flex items-center bg-[#FFB3E8] border-[4px] border-[#EF53C0C0]"
                  style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
                >
                  <ResponsiveImage
                    src={feature.img}
                    width={feature.imgWidth}
                    height={feature.imgHeight}
                    mobileWidth={feature.mobileWidth}
                    mobileHeight={feature.mobileHeight}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className=" leading-[100%] shadowText text-[#003E57] koulen text-[26.34px] largeScreen:text-[37.35px] font-normal">
                    {feature.title}
                  </h3>
                  <p className="font-normal font-koulen text-[18.91px] leading-[100%] xl:text-lg largeScreen:text-[24px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute hidden mt-[100px] xl:flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ">
          <WebmImage
            width={1000}
            height={1000}
            src="/gif/alien-dance4.webm"
            className=" max-w-[500px] largeScreen:max-w-[600px] ml-6 h-auto w-full"
          />
          <div className="flex gap-[23px] xl:mt-[100px] justify-center items-center">
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
        <div className="max-w-[450px] max-lg:pt-[30px] w-full largeScreen:max-w-[614px] flex flex-col gap-[33px]">
          {features2.map((feature, index) => {
            let maxWidthClass3xl = '';
            if (index === 0) maxWidthClass3xl = 'largeScreen:max-w-[497px]';
            else if (index === 1) maxWidthClass3xl = 'largeScreen:max-w-[525px]';
            else maxWidthClass3xl = 'largeScreen:max-w-[497px]';

            return (
              <div
                key={index}
                className={`p-5 max-w-[400px] shadow-cardMob xl:shadow-outerDesk gap-4 w-full ${maxWidthClass3xl} ${feature.align} bg-[#0487AB] rounded-[14px] border-[#003E58] border-[4px] flex items-start`}
              >
                <div
                  className="w-[70px] flex-shrink-0 h-[70px] largeScreen:w-[99px] justify-center largeScreen:h-[99px] flex items-center bg-[#FFB3E8] border-[4px] border-[#EF53C0C0]"
                  style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
                >
                  <ResponsiveImage
                    src={feature.img}
                    width={feature.imgWidth}
                    height={feature.imgHeight}
                    mobileWidth={feature.mobileWidth}
                    mobileHeight={feature.mobileHeight}
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-koulen leading-[100%] shadowText text-[#003E57] text-[26.34px] largeScreen:text-[37.35px] font-normal">
                    {feature.title}
                  </h3>
                  <p className="font-normal font-koulen text-[18.91px] leading-[100%] xl:text-lg largeScreen:text-[24px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" flex gap-[33px] pt-[70px] max-w-[358.7387390136719px] w-full mx-auto   xl:hidden flex-col justify-center items-center">
          <button
            onClick={() => window.open('/whitepaper.pdf', '_blank')}
            className="bg-[#FFB3E8] shadow-btnShadowMob text-[#003E57] rounded-[5px]  w-full h-[93.15315246582031px] flex items-center justify-center font-koulen font-normal text-[43.19px] border-[7.93px] border-[#EF53C0C0] "
          >
            {t('whitepaper')}
          </button>
          <button className="bg-[#00D2ED] shadow-btnShadowMob text-[#003E57] rounded-[5px]  w-full h-[93.15315246582031px] flex items-center justify-center font-koulen font-normal text-[43.19px] border-[7.93px] border-[#009BAF] ">
            {t('buynow')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuiltSection;
