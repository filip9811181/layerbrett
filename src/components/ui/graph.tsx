import React from 'react';
import BarChart from './BarChart';
import CustomBarChart from './custom-chart';
import { useTranslation } from 'react-i18next';

export const Graph = () => {
  const { t } = useTranslation();
  return (
    <div className=" rounded-[12.5px] max-w-[830px] 2xl:max-w-[970px] bg-[#0487AB] border-[3.3px] border-[#003E58] pt-[15px] pb-3 px-4 relative z-[1] shadow-mobIn lg:shadow-outerDesk ">
      <div className="h-[434px] relative z-[-1] flex justify-center items-center">
        <img src="/assets/Subtract.svg" className="max-w-full lg:block hidden h-full" alt="" />
        <span className="text-white text-[28px] font-koulen font-normal absolute  left-10 top-[40px] lg:top-20">
          {t('Months')}
        </span>
        {/* ✅ Bar chart absolutely centered */}
        <div className="absolute inset-0 flex justify-center items-center">
          {/* <BarChart months={20} selectedIndex={5} /> */}
          <CustomBarChart />
        </div>
      </div>
      <span className="stroked2 text-[28px] font-normal absolute top-4 lg:top-10 2xl:top-4 2xl:left-10">
        {t('TotalSupply')}
      </span>
      <span className="text-white hidden lg:block text-[28px] font-koulen font-normal absolute bottom-[28%] 2xl:bottom-[25%] rotate-[-90deg] -left-2">
        {t('Supply')}{' '}
      </span>

      {/* <p className="text-white text-base text-end font-koulen font-normal">{t('Stakingpoweredby')}</p> */}
    </div>
  );
};
