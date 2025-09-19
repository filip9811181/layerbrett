'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { useAccount } from 'wagmi';
import { disconnect } from '@wagmi/core';
import { shortenAddress } from '@/utils';
import { wagmiConfig, web3Modal } from '@/app/providers';
import MobileMenu from '../ui/MobileMenu';
import i18next, { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';
import { LanugageConfig } from '../../../config/languageConfig';
import { useClickAway } from 'react-use';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
  const { t } = useTranslation();

  const menuItems = [
    { id: '#', label: t('home'), link: '/' },
    { id: 'how-to-buy', label: t('howtobuy') },
    { id: '#', label: t('whitepaper'), link: '/whitepaper.pdf' },
    { id: '#', label: t('staking'), link: '/staking' },
    { id: '#', label: t('audit'), link: 'https://app.coinsult.net/eth/0x11a8e4b44d3ba2e0b367cd55df83539c215b2610' },
    { id: '#', label: 'Dev updates', link: '/dev-updates' },
    { id: 'faq', label: t('faqs') },
  ];

  const { address, isConnected } = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  const handleMenuClick = (item: any) => {
    if (item.link) {
      if (item.link === '/' || item.link === '/staking' || item.link === '/dev-updates') {
        window.location.href = item.link;
      } else {
        window.open(item.link, '_blank');
      }
      return;
    }

    handleScroll(item.id);
  };

  const pathname = usePathname();

  // Add all the routes where you want to hide the footer
  const hideFooterRoutes = ['/privacy', '/terms'];
  const devUpdatePaths = ['/dev-updates'];

  const isDevUpdatePage = devUpdatePaths.includes(pathname);
  return (
    <div className="absolute w-full z-10 top-0 py-[25px] px-4">
      <div
        className={` ${
          hideFooterRoutes ? 'max-w-[1743px]' : ' max-w-[1663px]'
        } w-full mx-auto flex justify-between items-center `}
      >
        {/* Logo Section */}
        <Link href={'/'} className="lg:hidden">
          <img src="/assets/Group 1597885772.svg" alt="" />
        </Link>
        <Link href={'/'} className="hidden lg:flex gap-[35px] items-center">
          {/* Conditionally render based on the current page */}
          {isDevUpdatePage ? (
            <>
              <Image
                src="/assets/Logo.svg"
                width={98.51895141601562}
                height={107.12832641601562}
                alt="Dev Updates Logo"
              />
              <img src="/assets/logo-text.png" className="max-w-[132px] w-full" alt="Dev Updates Text Logo" />
            </>
          ) : (
            <>
              <Image src={'/assets/Logo.svg'} width={132} height={143} alt="logo" />{' '}
              <img src={'/assets/logo-text.png'} alt="" />
            </>
          )}
        </Link>

        {/* Menu Items */}
        <div className="flex max-w-max w-full items-center 2xl:gap-[50px] gap-5 ">
          <div className="hidden xl:flex  items-center 2xl:gap-[50px] gap-8">
            {menuItems.map((item) => (
              <span
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className="cursor-pointer text-lg flex-shrink-0 leading-[60%] font-normal font-koulen text-white transition-all duration-300"
                style={activeSection === item.id ? { boxShadow: '0px 0px 27.9px 0px #FFFFFF' } : {}}
              >
                {item.label}
              </span>
            ))}

            <div className="flex items-center flex-shrink-0 gap-2 md:gap-4 md:flex-row">
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

          <button
            className="relative hidden border-[2px] border-[#D6FF00] bg-[#0487AB] w-[161px] h-[47px] lg:flex items-center justify-center font-koulen font-normal text-[21.79px] text-white rounded-[5px] transition-all duration-200 ease-in-out hover:bg-[#057fa0] hover:shadow-[inset_-4px_4px_0px_0px_#D6FF00]"
            style={{ boxShadow: '-4px 4px 0px 0px #D6FF00' }}
            onClick={handleClick}
          >
            {address && isConnected ? shortenAddress(address) : t('ConnectWallet')}
            <img src="/assets/Vector 589.svg" className="max-w-[92px] w-full h-1 absolute bottom-1" alt="" />
          </button>
        </div>

        <button className="lg:hidden mobile-menu" aria-label="Open mobile menu" onClick={() => setIsOpen(!isOpen)}>
          <img src="/assets/Group 1597885814.svg" alt="" />
        </button>
      </div>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
