'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import React from 'react';

export const FooterPrivacy = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0487AB]   flex flex-col gap-[31px] border-[#003E58] border-[4px] shadow-outerDesk px-4 largeScreen:px-[33px] pt-2.5 pb-7 rounded-[15px]">
      <div className="max-w-[856px]   w-full flex-col gap-4 lg:flex-row items-center flex justify-between">
        <div className="flex items-center gap-10">
          <Image
            src={'/assets/Logo.svg'}
            width={1000}
            height={1000}
            className="max-w-[108px] lg:max-w-[167px] h-auto"
            alt="logo"
          />
          <img src="/assets/LayerBrettFooter.png" className="max-md:max-w-[186px]" alt="" />
        </div>
        <div className="max-w-[263px] w-full flex gap-6 items-center">
          {/* <Image src="/assets/Vector.svg" width={41.868621826171875} height={31.909128189086914} alt="" /> */}
          <Link href={'https://x.com/LayerBrett'} target="_blank" className="flex gap-8" aria-label="Twitter link">
            <Image src="/assets/x.svg" width={30.962520599365234} height={30.962520599365234} alt="" />
          </Link>
          <Link href={'https://t.me/layerbrett'} target="_blank" className="flex gap-8" aria-label="Telegram link">
            <Image src="/assets/tele.svg" width={39.40684509277344} height={33.66445541381836} alt="" />
          </Link>

          <Link
            href={'https://www.tiktok.com/@layerbrettofficial'}
            target="_blank"
            className="flex gap-8"
            aria-label="Telegram link"
          >
            <img src="/assets/pinkTiktok.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex  gap-[22px] flex-col ">
        <h2 className="text-2xl font-koulen font-normal text-white">{t('footer_title')}</h2>
        <p className="font-medium font-nunito text-[20px]">{t('footer_title_sub2')}</p>
      </div>
    </div>
  );
};
