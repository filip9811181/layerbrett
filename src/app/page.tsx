'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { MainLayout } from '@/components/layout/mainLayout';

// Critical sections (keep SSR for SEO)
const HeroSection = dynamic(() => import('@/components/home/HeroSection'));
const AboutSection = dynamic(() => import('@/components/home/About'));
const Tokenomics = dynamic(() => import('@/components/home/Tokenomics'));
const Faq = dynamic(() => import('@/components/home/Faq'));

// Non-critical visual sections (disable SSR for speed)
const BuiltSection = dynamic(() => import('@/components/home/BuiltSection'), { ssr: false });
const HowWorks = dynamic(() => import('@/components/home/HowWorks'), { ssr: false });
const Presale = dynamic(() => import('@/components/home/Presale'), { ssr: false });
const Revolution = dynamic(() => import('@/components/home/Revolution'), { ssr: false });
const Wars = dynamic(() => import('@/components/home/Wars'), { ssr: false });
const Roadmap = dynamic(() => import('@/components/home/Roadmap'), { ssr: false });
const Calculator = dynamic(() => import('@/components/home/Calculator'), { ssr: false });

export default function Home() {
  return (
    <MainLayout>
      {/* Loader */}
      <div id="buy-token">
        <HeroSection />
      </div>
      <AboutSection />

      <section className="relative mt-[-10px]">
        <BuiltSection />
        <img
          src="/assets/t fighter 1.svg"
          className="max-w-[306px] w-full xl:block hidden absolute z-[9] bottom-[50%] right-[20%]"
          alt=""
        />
        <img
          src="/assets/IMG_1925.png"
          className="max-w-[288px] w-full xl:block hidden absolute z-[9] bottom-[50%] left-[10%]"
          alt=""
        />
        <div className="relative z-[1] -mt-20" id="how-to-buy">
          <HowWorks />
        </div>
      </section>

      <section className="-mt-32 md:mt-[-16rem] lg:-mt-44 relative z-[0]">
        <Tokenomics />
      </section>

      <div className="relative max-lg:min-h-[3427px]">
        <Image
          width={1000}
          height={1000}
          priority
          src="https://brett-img.netlify.app/assets/Group%201597885818.png"
          className="absolute hidden lg:block top-0 bottom-0 object-cover w-full h-full z-[-1]"
          alt=""
        />
        <Image
          width={1000}
          height={1000}
          priority
          src="/assets/Group 1597885816 (1).svg"
          className="w-full h-full -top-[100px] absolute z-[-1] object-cover lg:hidden"
          alt=""
        />

        <div className="relative z-[1] mt-[-160px]">
          <Presale />
        </div>

        <div className="relative z-[1]">
          <Revolution />
        </div>
      </div>

      <div className="relative lg:mt-[-196px] max-2xl:mt-[-170px] max-lg:mt-[-170px]">
        <Wars />
      </div>

      <div className="relative z-[2] lg:mt-[-200px]">
        <Roadmap />
      </div>

      <div className="relative z-[1] lg:z-[1] mt-[-30px] lg:mt-[-140px]">
        <Calculator />
      </div>
      <div id="faq" className="bg-black">
        <Faq />
      </div>
    </MainLayout>
  );
}
