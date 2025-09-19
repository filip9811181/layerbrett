'use client';
import { wagmiConfig, web3Modal } from '@/app/providers';
import { shortenAddress } from '@/utils';
import { disconnect } from '@wagmi/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useAccount } from 'wagmi';
import { useTranslation } from 'react-i18next';
import i18next, { changeLanguage } from 'i18next';
import { LanugageConfig } from '../../../config/languageConfig';
import { useClickAway } from 'react-use';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const menuItems = [
    { id: 'home', label: t('home'), link: '/' },
    { id: 'how-to-buy', label: t('howtobuy') },
    { id: 'whitepaper', label: t('whitepaper'), link: '/whitepaper.pdf' },
    { id: 'staking', label: t('staking'), link: '/staking' },
    { id: 'audit', label: t('audit'), link: 'https://app.coinsult.net/eth/0x11a8e4b44d3ba2e0b367cd55df83539c215b2610' },
    { id: '#', label: 'Dev updates', link: '/dev-updates' },

    { id: 'faq', label: t('faqs') },
  ];

  const { address, isConnected } = useAccount();
  const [showLang, setShowLang] = useState<boolean>(false);
  const [lang, setLang] = useState({
    flag: 'en',
    language: 'en',
    name: 'English',
  });

  const ref = useRef(null);
  const onChangeLanguage = (language: any) => {
    changeLanguage(language.language);
    setLang(language);
    setShowLang(false);
  };

  useEffect(() => {
    const currentLang = LanugageConfig.filter((lang) => lang.language === i18next.language);
    if (currentLang && currentLang.length) {
      setLang(currentLang[0]);
    }
  }, []);

  useClickAway(ref, () => setShowLang(false));

  const handleClick = () => {
    if (address && isConnected) {
      disconnect(wagmiConfig);
    } else {
      web3Modal.open();
    }
  };

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleMenuClick = (item: any) => {
    onClose(); // close menu after clicking

    if (item.link) {
      if (item.link === '/' || item.link === '/staking' || item.link === '/dev-updates') {
        window.location.href = item.link;
      } else {
        window.open(item.link, '_blank');
      }
      return;
    }

    // Smooth scroll
    const el = document.getElementById(item.id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[1000] pt-[25px] px-4 flex justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Menu Box */}
      <div
        className={`relative bg-[#0487AB] border-[3.33px] border-[#003E58] px-4 pt-3 w-full h-[650px] pb-[14px] rounded-[12.5px] shadow-mobileMenu transform transition-transform duration-300 flex flex-col ${isOpen ? 'scale-100' : 'scale-90'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo/Header Section */}
        <div className="flex justify-between items-center flex-shrink-0">
          <img src="/assets/Group 1597885772.svg" className="lg:hidden" alt="" />
          <div className="flex items-center gap-2 md:gap-4 md:flex-row">
            <div className="relative">
              <div className="flex gap-1 cursor-pointer items-center" onClick={() => setShowLang((prev) => !prev)}>
                <img src={`/flags/${lang.flag}.svg`} width={32} height={24} alt="" />
                <img src="/assets/Vector 425.svg" alt="" />
              </div>

              {showLang && (
                <div
                  className="absolute flex flex-col right-0 top-8 gray-panel h-[240px] overflow-y-scroll overflow-x-hidden rounded-lg w-[200px] text-black bg-white"
                  ref={ref}
                >
                  {LanugageConfig.map((language) => (
                    <div
                      className="flex gap-2 px-2 py-1 cursor-pointer"
                      key={language.language}
                      onClick={() => onChangeLanguage(language)}
                    >
                      <img src={`/flags/${language.flag}.svg`} className="w-6 h-6 rounded-lg" alt="flag" />
                      <span>{language.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Inner content that fills remaining space */}
        <div className="pl-[36px] py-[34px] bg-[#005870] border-[#003E58] border-[3.3px] shadow-staking mt-2 rounded-[8.34px] flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-[31px]">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className="text-[24px] max-w-max leading-[80%] text-white font-normal font-koulen text-left"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-10">
            <button
              className="relative border-[2px] border-[#D6FF00] bg-[#0487AB] w-[161px] h-[47px] items-center justify-center font-koulen font-normal text-[21.79px] text-white rounded-[5px]"
              style={{ boxShadow: '-4px 4px 0px 0px #D6FF00' }}
              onClick={handleClick}
            >
              {address && isConnected ? shortenAddress(address) : t('ConnectWallet')}
              <img src="/assets/Vector 589.svg" className="max-w-[92px] w-full h-1 absolute bottom-1" alt="" />
            </button>

            <div className="w-full flex gap-[35px] items-center">
              {/* <Image src="/assets/Vector.svg" width={42} height={32} alt="" /> */}
              <Link href={'https://x.com/LayerBrett'} target="_blank" className="flex gap-8" aria-label="Twitter link">
                <Image src="/assets/x.svg" width={31} height={31} alt="" />
              </Link>
              <Link href={'https://t.me/layerbrett'} target="_blank" className="flex gap-8" aria-label="Telegram link">
                <Image src="/assets/tele.svg" width={39} height={34} alt="" />
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
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
