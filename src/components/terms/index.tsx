'use client';
import React from 'react';
import { FooterPrivacy } from '../privacy/footer-privacy';
import TermsContent from './terms';
import { useTranslation } from 'react-i18next';

export const TermsIndex = () => {
  const { t } = useTranslation();
  return (
    <div className="relative pt-[200px]  pb-[77px] lg:pb-[152px] z-[1] ">
      <img src="/assets/Mask group.png" className=" w-full h-auto object-cover top-0 absolute z-[-1]" alt="" />
      <img
        src="/assets/bottomBg.png"
        className=" lg:block hidden w-full h-auto object-cover bottom-0 absolute z-[-1]"
        alt=""
      />
      <img src="/assets/mobile.png" className=" lg:hidden w-full h-auto object-cover bottom-0 absolute z-[-1]" alt="" />
      <div className="px-4 xl:px-10  max-w-[1743px] w-full mx-auto largeScreen:px-0 flex flex-col gap-[55px] lg:gap-[80px] ">
        {/* <PrivacyContent /> */}
        <TermsContent />
        <FooterPrivacy />
        <p className="lg:hidden text-[22px]">{t('footer_title')}</p>
      </div>
    </div>
  );
};
