import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WebmImage from '../ui/WebmImage';

const Roadmap = () => {
  const { t } = useTranslation();

  return (
    <div className=" min-h-[1428.51904296875px] ">
      {/* <div className="overlays  lg:hidden absolute bottom-[-50px] h-[100px]"></div> */}

      <img src="/assets/Ellipse 3104.svg" className="w-full h-[227px] lg:hidden absolute bottom-[-115px]" alt="" />
      <div className="min-h-[2700px] lg:hidden  w-full max-lg:bg-[#F0B70F]  absolute bottom-[-30px] z-[-1]  "></div>
      {/* Background image for large screens */}
      <img
        src="/assets/background5 2.png"
        className="absolute hidden lg:block top-0 left-0 w-full h-full object-cover z-[-2]"
        alt=""
      />

      <img
        src="/assets/alien13.png"
        className="max-w-[181px] w-full top-[40%] left-10 hidden lg:block absolute "
        alt=""
      />
      <img
        src="/assets/alien16.png"
        className="max-w-[240px] w-full top-[40%] right-10 hidden lg:block absolute "
        alt=""
      />
      <img
        src="/assets/alien14.png"
        className="max-w-[171px] w-full bottom-14 left-[20%] hidden lg:block absolute "
        alt=""
      />
      <img
        src="/assets/alien15.png"
        className="max-w-[172px] w-full bottom-14 right-[20%] hidden lg:block absolute "
        alt=""
      />
      {/* Centered GIF image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1] hidden lg:block">
        <WebmImage
          width={1000}
          height={1000}
          src="/gif/roadmap.webm"
          className="w-auto max-w-full h-auto object-contain"
          alt="Roadmap GIF"
        />
      </div>

      <div className="lg:hidden mt-[-70px] z-[1] min-h-[733px] relative">
        <img
          src="/assets/background5 2.svg"
          className="absolute top-[-50px] left-0 w-full h-full mini:object-cover z-[-1]"
          alt=""
        />

        <img src="/assets/Roadmap.svg" className="max-w-[350px] pt-20 w-full mx-auto bottom-0" alt="Roadmap Text" />

        {/* GIF and Spock wrapper */}
        <div className="relative w-full flex justify-center mt-[-70px]">
          <WebmImage
            src="/gif/roadmap.webm"
            className="max-w-full w-full h-auto object-contain"
            alt="Roadmap GIF"
          />
          <img
            src="/assets/spock1 1-min.png"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[377.31px] max-w-[200px]"
            alt="Spock Image"
          />
        </div>
      </div>

      <div className="max-lg:mt-[-50px] max-largeScreen:px-4 max-lg:relative max-lg:z-[2] lg:pt-[140px]">
        <img src="/assets/Roadmap.svg" className="max-w-[363px] lg:block hidden w-full mx-auto " alt="" />
        <div className="max-w-[1387px] lg:mt-[-160px] w-full mx-auto flex flex-col lg:flex-row justify-between relative">
          <div className="max-mini:max-w-full max-w-[479px] w-full flex flex-col gap-14">
            <div
              className="max-w-[384px] mx-auto relative w-full pl-10 pr-[36px] pb-[35px] pt-11 rounded-[15px] bg-[#0487AB] border-[4px] border-[#003E58]"
              style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
            >
              <div
                className="bg-[#FFB3E8] text-[20.83px] absolute top-[-30px] max-w-[146px] w-full h-[50px] flex items-center justify-center font-normal font-koulen text-[#003E57] border-[#EF53C0C0] border-[4px] rounded-[5px]"
                style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
              >
                {t('phase')} 1
              </div>
              <h2 className="text-[#D6FF00] font-koulen font-normal text-[33.33px]">{t('roadmap_title1')}</h2>
              <p className="font-nunito font-medium text-lg">
                {t('roadmap_title1_sub1')}
                <br />
                <br />
                {t('roadmap_title1_sub2')}
                <br />
                <br />
                {t('roadmap_title1_sub3')}
                <br />
                <br />
                {t('roadmap_title1_sub4')}
              </p>
            </div>
            <div
              className="max-w-[384px]  lg:hidden mx-auto relative w-full pl-10 pr-[36px] pb-[35px] pt-11 rounded-[15px] bg-[#0487AB] border-[4px] border-[#003E58]"
              style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
            >
              <div
                className="bg-[#FFB3E8] text-[20.83px] absolute top-[-30px] max-w-[146px] w-full h-[50px] flex items-center justify-center font-normal font-koulen text-[#003E57] border-[#EF53C0C0] border-[4px] rounded-[5px]"
                style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
              >
                {t('phase')} 2
              </div>
              <h2 className="text-[#D6FF00] font-koulen font-normal text-[33.33px]">{t('roadmap_title2')}</h2>
              <p className="font-nunito font-medium text-lg">
                {t('roadmap_title2_sub1')}
                <br />
                <br />
                {t('roadmap_title2_sub2')}
                <br />
                <br />
                {t('roadmap_title2_sub3')}
              </p>
            </div>
            <div
              className="max-w-[384px]  hidden lg:block max-lg:mx-auto lg:mr-auto relative w-full pl-10 pr-[36px] pb-[35px] pt-11 rounded-[15px] bg-[#0487AB] border-[4px] border-[#003E58]"
              style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
            >
              <div
                className="bg-[#FFB3E8] text-[20.83px] absolute top-[-30px] max-w-[146px] w-full h-[50px] flex items-center justify-center font-normal font-koulen text-[#003E57] border-[#EF53C0C0] border-[4px] rounded-[5px]"
                style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
              >
                {t('phase')} 3
              </div>
              <h2 className="text-[#D6FF00] font-koulen font-normal text-[33.33px]">{t('roadmap_title3')}</h2>
              <p className="font-nunito font-medium text-lg">
                {t('roadmap_title3_sub1')}
                <br />
                <br />
                {t('roadmap_title3_sub2')}
                <br />
                <br />
                {t('roadmap_title3_sub3')}
                <br />
                <br />
                {t('roadmap_title3_sub4')}
              </p>
            </div>
          </div>
          <div className=" hidden lg:flex flex-col left-[35%] absolute bottom-[-330px]">
            <img src="/assets/spock1 1-min.png" className="max-w-[420px] mt-14 h-auto" alt="" />
            <div
              className="max-w-[384px] mx-auto relative w-full pl-10 pr-[36px] pb-[35px] pt-11 rounded-[15px] bg-[#0487AB] border-[4px] border-[#003E58]"
              style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
            >
              <div
                className="bg-[#FFB3E8] text-[20.83px] absolute top-[-30px] max-w-[146px] w-full h-[50px] flex items-center justify-center font-normal font-koulen text-[#003E57] border-[#EF53C0C0] border-[4px] rounded-[5px]"
                style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
              >
                {t('phase')} 5
              </div>
              <h2 className="text-[#D6FF00] font-koulen font-normal text-[33.33px]">{t('roadmap_title5')}</h2>
              <p className="font-nunito font-medium text-lg">
                {t('roadmap_title5_sub1')}
                <br />
                <br />
                {t('roadmap_title5_sub2')}
                <br />
                <br />
                {t('roadmap_title5_sub3')}
              </p>
            </div>
          </div>
          <div className="max-mini:max-w-full max-w-[479px] w-full mt-10 flex flex-col gap-14">
            <div
              className="max-w-[384px] max-lg:mt-[100px] lg:hidden max-lg:mx-auto lg:mr-auto relative w-full pl-10 pr-[36px] pb-[35px] pt-11 rounded-[15px] bg-[#0487AB] border-[4px] border-[#003E58]"
              style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
            >
              <img src="/assets/alien15.svg" className="max-w-[139px] w-full absolute top-[-125px] -right-4" alt="" />
              <div
                className="bg-[#FFB3E8] text-[20.83px] absolute top-[-30px] max-w-[146px] w-full h-[50px] flex items-center justify-center font-normal font-koulen text-[#003E57] border-[#EF53C0C0] border-[4px] rounded-[5px]"
                style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
              >
                {t('phase')} 3
              </div>
              <h2 className="text-[#D6FF00] font-koulen font-normal text-[33.33px]">{t('roadmap_title3')}</h2>
              <p className="font-nunito font-medium text-lg">
                {t('roadmap_title3_sub1')}
                <br />
                <br />
                {t('roadmap_title3_sub2')}
                <br />
                <br />
                {t('roadmap_title3_sub3')}
                <br />
                <br />
                {t('roadmap_title3_sub4')}
              </p>
            </div>
            <div
              className="max-w-[384px] hidden lg:block mx-auto relative w-full pl-10 pr-[36px] pb-[35px] pt-11 rounded-[15px] bg-[#0487AB] border-[4px] border-[#003E58]"
              style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
            >
              <div
                className="bg-[#FFB3E8] text-[20.83px] absolute top-[-30px] max-w-[146px] w-full h-[50px] flex items-center justify-center font-normal font-koulen text-[#003E57] border-[#EF53C0C0] border-[4px] rounded-[5px]"
                style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
              >
                {t('phase')} 2
              </div>
              <h2 className="text-[#D6FF00] font-koulen font-normal text-[33.33px]">{t('roadmap_title2')}</h2>
              <p className="font-nunito font-medium text-lg">
                {t('roadmap_title2_sub1')}
                <br />
                <br />
                {t('roadmap_title2_sub2')}
                <br />
                <br />
                {t('roadmap_title2_sub3')}
              </p>
            </div>
            <div
              className="max-w-[384px] mx-auto relative w-full pl-10 pr-[36px] pb-[35px] pt-11 rounded-[15px] bg-[#0487AB] border-[4px] border-[#003E58]"
              style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
            >
              <div
                className="bg-[#FFB3E8] text-[20.83px] absolute top-[-30px] max-w-[146px] w-full h-[50px] flex items-center justify-center font-normal font-koulen text-[#003E57] border-[#EF53C0C0] border-[4px] rounded-[5px]"
                style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
              >
                {t('phase')} 4
              </div>
              <h2 className="text-[#D6FF00] font-koulen font-normal text-[33.33px]">{t('roadmap_title4')}</h2>
              <p className="font-nunito font-medium text-lg">
                {t('roadmap_title4_sub1')}
                <br />
                <br />
                {t('roadmap_title4_sub2')}
                <br />
                <br />
                {t('roadmap_title4_sub3')}
              </p>
            </div>
            <div
              className="max-w-[384px] mx-auto relative w-full pl-10 pr-[36px] pb-[35px] pt-11 rounded-[15px] bg-[#0487AB] border-[4px] border-[#003E58] lg:hidden"
              style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
            >
              <div
                className="bg-[#FFB3E8] text-[20.83px] absolute top-[-30px] max-w-[146px] w-full h-[50px] flex items-center justify-center font-normal font-koulen text-[#003E57] border-[#EF53C0C0] border-[4px] rounded-[5px]"
                style={{ boxShadow: '-8px 8px 0px 0px #003E58' }}
              >
                {t('phase')} 5
              </div>
              <h2 className="text-[#D6FF00] font-koulen font-normal text-[33.33px]">{t('roadmap_title5')}</h2>
              <p className="font-nunito font-medium text-lg">
                {t('roadmap_title5_sub1')}
                <br />
                <br />
                {t('roadmap_title5_sub2')}
                <br />
                <br />
                {t('roadmap_title5_sub3')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
