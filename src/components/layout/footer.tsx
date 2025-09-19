import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 pb-[100px] bg-black relative ">
      <Image
        src="/assets/alien11 1.svg"
        width={66.49410430440129}
        height={60.63559889446402}
        className="absolute bottom-10 largeScreen:bottom-[30%] right-10 lg:right-20"
        alt=""
      />
      <div className="max-w-[1504px] w-full mx-auto flex flex-col gap-5">
        <div className="max-w-[1169px] mx-auto w-full flex-col gap-4 lg:flex-row items-center flex justify-between">
          <div className="flex flex-col gap-10">
            <div className="flex-col gap-4 lg:gap-16 lg:flex-row items-center flex">
              <div className="flex flex-shrink-0 items-center gap-10">
                <Image src={'/assets/Logo.svg'} width={103} height={112} alt="logo" />
                <img src="/assets/LayerBrett (1).svg" className="max-w-[176px]   w-full" alt="" />
              </div>
              <div className="max-w-[263px] justify-center w-full flex gap-16 items-center">
                {/* <Image src="/assets/Vector.svg" width={41.868621826171875} height={31.909128189086914} alt="" /> */}
                <Link
                  href={'https://x.com/LayerBrett'}
                  target="_blank"
                  className="flex gap-8"
                  aria-label="Twitter link"
                >
                  <Image src="/assets/x.svg" width={30.962520599365234} height={30.962520599365234} alt="" />
                </Link>
                <Link
                  href={'https://t.me/layerbrett'}
                  target="_blank"
                  className="flex gap-8"
                  aria-label="Telegram link"
                >
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
            <div className="flex justify-center flex-col gap-6 ">
              <h2 className="text-white uppercase font-koulen text-xl lg:text-2xl">
                {t('Support')}:{' '}
                <Link href={'#'} className="text-[#D6FF00]">
                  support@layerbrett.com{' '}
                </Link>
              </h2>
              <h2 className="text-white uppercase font-koulen text-xl lg:text-2xl">
                {t('Marketing')}:{' '}
                <Link href={'#'} className="text-[#D6FF00]">
                  marketing@layerbrett.com{' '}
                </Link>
              </h2>
            </div>
          </div>

          <img src="/assets/Ads.png" className="max-w-[421px] w-full h-auto" alt="" />
        </div>
        <p className="text-center text-[24px] max-lg:max-w-[305px] mx-auto max-lg:leading-[120%] font-koulen font-normal text-white">
          {t('footer_title')}
        </p>
        <p className="text-center text-[20px] max-md:max-w-[364px] mx-auto text-white font-nunito font-medium">
          {t('footer_title_sub2')}
        </p>
        <div className="flex justify-center pt-[100px] items-center gap-[63px]">
          <Link href={'/privacy'} className="text-white">
            {t('terms_content7_sub2')}
          </Link>
          <Link href={'/terms'} className="text-white">
            {t('TermsConditions')}
          </Link>
        </div>
      </div>
    </div>
  );
};
