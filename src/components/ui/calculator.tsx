import React, { useEffect, useState } from 'react';
import CustomInput from './input';
import GradientProgressBar from './GradientProgressBar';
import { useTranslation } from 'react-i18next';

export const CalculatorComponent = () => {
  const { t } = useTranslation();
  const [price, setPrice] = useState(0.004);
  const [usdAmount, setUsdAmount] = useState(0);
  const [brettAmount, setBrettAmount] = useState('');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setUsdAmount(Number(brettAmount) * price);
  }, [brettAmount, price]);

  const handleProgress = (progress: number) => {
    setPrice(progress * 0.00996 + 0.004);
    setProgress(progress);
  };

  return (
    <div className="max-w-[376px] shadow-calMob lg:shadow-outerDesk xl:max-w-[580px] largeScreen:max-w-[710px] flex flex-col gap-[17px] w-full mx-auto relative z-[1] bg-[#0487AB] border-[4px] border-[#003E58] p-4 2xl:p-[38px] rounded-[15px]  relative">
      <img
        src="/assets/alien-dance1.png"
        className="absolute  top-[-120px]  right-[-70px]  hidden lg:block max-w-[150px] w-full h-auto"
        alt=""
      />
      <div className="bg-[#005870]   shadow-innerMob lg:shadow-custom-inset lg:px-10 lg:pt-10 lg:pb-5 pt-5 px-4 pb-3 rounded-[10px] border-[4px] border-[#003E58]">
        <div className="max-w-[542px] w-full mx-auto ">
          <h2 className="text-center stroked2 font-koulen font-normal text-[23px] lg:text-[36px]">
            {t('PumpCalculator')}
          </h2>
          <div className="flex flex-col gap-[5px] max-w-[515px] ml-auto w-full">
            <div className="flex justify-between items-center">
              <span className="uppercase font-koulen font-normal text-base lg:text-[24px]">$LBRETT:</span>
              <CustomInput
                type="number"
                className="max-w-[222px] lg:max-w-[316px]"
                placeholder="0.000"
                min={0}
                value={brettAmount}
                onChange={(e) => setBrettAmount(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase font-koulen font-normal  text-base lg:text-[24px]">{t('Price')}:</span>
              <CustomInput
                readOnly
                type="text"
                className="max-w-[222px] lg:max-w-[316px]"
                placeholder="$1.000"
                value={`$${Number(price).toFixed(4)}`}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="uppercase font-koulen font-normal  text-base lg:text-[24px]">USD {t('Value')}:</span>
              <CustomInput
                readOnly
                type="text"
                className="max-w-[222px] lg:max-w-[316px]"
                placeholder="$1.000"
                value={`$${Number(usdAmount).toFixed(2)}`}
              />
            </div>
          </div>
          <p className="pt-[14px] pb-3 max-w-[483px] w-full mx-auto text-center text-[#FFFFFF7D] text-[14px] lg:text-[24px] font-koulen uppercase font-normal leading-[85%]">
            {t('pumpcalc_title')}
          </p>
          <GradientProgressBar
            progress={progress}
            setProgress={handleProgress}
            avatarSrc="/assets/Group 1597885435.svg"
          />
          <div className="flex pl-2 justify-between pt-2 pb-3">
            <div className=" max-w-[97px] lg:max-w-[183px] w-full flex flex-col gap-2">
              <span className="text-center text-[16px] lg:text-[24px] font-normal font-koulen text-white uppercase">
                {t('Startpriceat')}:
              </span>
              <div
                className="w-full leading-none h-[38px] lg:h-[57px]  flex items-center px-5  text-[#003E57] text-[20px] lg:text-[36px] font-koulen font-normal rounded-[5px] bg-[#00D2ED] border-[4px] border-[#009BAF]"
                style={{
                  boxShadow: '-8px 8px 0px 0px #003E58',
                }}
              >
                $0.004
              </div>
            </div>
            <div className="max-w-[97px] lg:max-w-[183px] w-full flex flex-col gap-2">
              <span className="text-end text-[16px] lg:text-[24px] font-normal font-koulen text-white uppercase">
                {t('Moon')}
              </span>
              <div
                className="w-full leading-none h-[38px] lg:h-[57px]  flex items-center justify-end px-4  text-end text-[#003E57] text-[20px] lg:text-[36px] font-koulen font-normal rounded-[5px] bg-[#00D2ED] border-[4px] border-[#009BAF]"
                style={{
                  boxShadow: '-8px 8px 0px 0px #003E58',
                }}
              >
                $1
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-[5px] max-w-[515px] ml-auto w-full">
            <div className="flex justify-between items-center">
              <span className="uppercase font-koulen font-normal text-base lg:text-[24px]">{t('TotalBagWorth')}:</span>
              <CustomInput type="text" className="max-w-[167px] lg:max-w-[316px]" placeholder="$565,000.00" />
            </div>
          </div> */}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className=" max-w-[244px] xl:max-w-[430px] largeScreen:max-w-[462px] w-full flex justify-between">
          <button className=" lg:w-[94px] shadow-calMob lg:shadow-outerDesk lg:h-[75px] w-[49.840972900390625px] h-[39.76673126220703px] bg-[#0487AB] text-white text-[36.73px] lg:text-[69.27px] font-koulen font-normal flex items-center justify-center  rounded-[7.95px] lg:rounded-[15px] border-[4px] border-[#003E58]  leading-none ">
            <img src="/assets/+.svg" className="w-[17px] h-[26px] lg:w-[31px] lg:h-[49px]" alt="" />
          </button>
          <button className=" lg:w-[94px] shadow-calMob lg:shadow-outerDesk lg:h-[75px] w-[49.840972900390625px] h-[39.76673126220703px] bg-[#0487AB] text-white text-[36.73px] lg:text-[69.27px] font-koulen font-normal flex items-center justify-center  rounded-[7.95px] lg:rounded-[15px] border-[4px] border-[#003E58]  leading-none ">
            <img src="/assets/-.svg" className="w-[12px] h-[28px] lg:w-[21px] lg:h-[49px]" alt="" />
          </button>
          <button className=" relative overflow-hidden lg:w-[94px] shadow-calMob lg:shadow-outerDesk lg:h-[75px] w-[49.840972900390625px] h-[39.76673126220703px] bg-[#0487AB] text-white text-[36.73px] lg:text-[69.27px] font-koulen font-normal flex items-center justify-center  rounded-[7.95px] lg:rounded-[15px] border-[4px] border-[#003E58]  leading-none ">
            <img src="/assets/_.svg" className="w-[13px] h-[26px] lg:w-[25px] lg:h-[49px]" alt="" />
          </button>
          <button className=" lg:w-[94px] shadow-calMob lg:shadow-outerDesk lg:h-[75px] w-[49.840972900390625px] h-[39.76673126220703px] bg-[#0487AB] text-white text-[36.73px] lg:text-[69.27px] font-koulen font-normal flex items-center justify-center  rounded-[7.95px] lg:rounded-[15px] border-[4px] border-[#003E58]  leading-none ">
            <img src="/assets/Untitled.svg" className="w-[9px] h-[21px] lg:w-[17px] lg:h-[49px]" alt="" />
          </button>
        </div>
        <button
          className=" lg:w-[94px] shadow-calMob lg:shadow-outerDesk lg:h-[75px] w-[49.840972900390625px] h-[39.76673126220703px] bg-[#FFB3E8] text-[#003E57] text-[36.73px] lg:text-[69.27px] font-koulen font-normal flex items-center justify-center  rounded-[7.95px] lg:rounded-[15px] border-[4px] border-[#EF53C0C0]  leading-none "
          style={{
            boxShadow: '-8px 8px 0px 0px #003E58',
          }}
        >
          <img src="/assets/=.svg" className="w-[13px] h-[21px] lg:w-[25px] lg:h-[39px]" alt="" />
        </button>
      </div>
    </div>
  );
};
