'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';

const PrivacyContent = () => {
  const { t } = useTranslation();

  const Privacy = [
    {
      title: t('privacy_title'),
      contents: [
        <span className="text-[18px] lg:text-2xl">
          {t('privacy_content_sub1')} <span className="text-[#D6FF00]">LayerBrett.com</span> {t('privacy_content_sub2')} <span className="text-[#D6FF00]">{t('privacy_content_sub3')}</span> {t('privacy_content_sub4')}{" "}
          <Link href={"/"} className="font-normal text-[#D6FF00]">
            [www.layerbrett.com]
          </Link>{" "}
          {t('privacy_content_sub5')}.
        </span>,
        <span className="text-[18px] lg:text-2xl">
          {t('privacy_content_sub6')}
        </span>,
      ],
    },
    {
      title: t('privacy_title1'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]" key={1}>{t('privacy_content1_sub1')}</span>,
        [
          <>
            <span className="text-[#EF53C0]">{t('privacy_content1_sub2')}</span>
            {' '} {t('privacy_content1_sub3')} <span className="text-[#D6FF00]">{t('privacy_content1_sub4')}</span>, {t('privacy_content1_sub5')} <span className="text-[#D6FF00]">{t('privacy_content1_sub6')}</span>.
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content1_sub7')}</span>
            {' '}
            {t('privacy_content1_sub8')} <span className="text-[#D6FF00]">{t('privacy_content1_sub9')}</span> {t('privacy_content1_sub10')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content1_sub11')}</span>
            {' '}
            {t('privacy_content1_sub12')}{" "}
            <span className="text-[#D6FF00]">{t('privacy_content1_sub13')}</span>.
          </>,
        ],
        <span className=" text-xl 2xl:text-[32px] leading-[40%]" key={2}>{t('privacy_content1_sub14')}</span>,
        [
          <>
            <span className="text-[#EF53C0]">{t('privacy_content1_sub15')}</span>
            {' '}
            {t('privacy_content1_sub16')}{" "}
            <span className="text-[#D6FF00]">{t('privacy_content1_sub17')}</span>, {t('privacy_content1_sub18')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content1_sub19')}</span>
            {' '}
            LayerBrett.com {t('privacy_content1_sub20')} <span className="text-[#D6FF00]">{t('privacy_content1_sub21')}</span> {t('privacy_content1_sub22')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content1_sub23')}</span>
            {' '}
            {t('privacy_content1_sub24')} <span className="text-[#D6FF00]">{t('privacy_content1_sub25')}</span>, {t('privacy_content1_sub26')}
          </>,
        ],
        <span className=" text-xl 2xl:text-[32px] leading-[40%]" key={3}>{t('privacy_content1_sub27')}</span>,
        [
          <>
            <span className="text-[#EF53C0]">{t('privacy_content1_sub28')}</span>
            {' '}
            {t('privacy_content1_sub29')}{" "}
            <span className="text-[#D6FF00]">{t('privacy_content1_sub30')}</span>, {t('privacy_content1_sub31')} <span className="text-[#D6FF00]">{t('privacy_content1_sub32')}</span> {t('privacy_content1_sub33')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content1_sub34')}</span>
            {' '}
            {t('privacy_content1_sub35')}{" "}
            <span className="text-[#D6FF00]">{t('privacy_content1_sub36')}</span>, {t('privacy_content1_sub37')}{" "}
            <span className="text-[#D6FF00]">{t('privacy_content1_sub38')}</span>. {t('privacy_content1_sub39')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content1_sub40')}</span>
            {' '}
            {t('privacy_content1_sub41')}{" "}
            <span className="text-[#D6FF00]">{t('privacy_content1_sub42')}</span>, {t('privacy_content1_sub43')}
          </>,
        ],
      ],
    },
    {
      title: t('privacy_title2'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('privacy_content2_sub1')}
        </span>,
        [
          <>
            <span className="text-[#EF53C0]">{t('privacy_content2_sub2')}</span>
            {' '}
            {t('privacy_content2_sub3')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content2_sub4')}</span>
            {' '}
            {t('privacy_content2_sub5')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content2_sub6')}</span>
            {' '}
            {t('privacy_content2_sub7')}{" "}
            <span className="text-[#D6FF00]">{t('terms_content8_sub2')}</span>, {t('privacy_content2_sub8')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content2_sub9')}</span>
            {' '}
            {t('privacy_content2_sub10')}
          </>,
        ],
      ],
    },
    {
      title: t('privacy_title3'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('privacy_content3_sub1')}
        </span>,
        [
          <>
            <span className="text-[#EF53C0]">{t('privacy_content3_sub2')}</span>
            {' '}
            {t('privacy_content3_sub3')}{' '}
            <span className="text-[#D6FF00]">{t('privacy_content3_sub4')}</span>, {t('privacy_content3_sub5')}{' '}
            <span className="text-[#D6FF00]">{t('privacy_content3_sub6')}</span>
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content3_sub7')}</span>
            {' '}
            {t('privacy_content3_sub8')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content3_sub9')}</span>
            {' '}
            {t('privacy_content3_sub10')}
          </>,
        ],
      ],
    },
    {
      title: t('privacy_title4'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('privacy_content4_sub1')}{' '}
          {t('privacy_content4_sub2')}
          {t('privacy_content4_sub3')}
          {t('privacy_content4_sub4')}
          {t('privacy_content4_sub5')}
        </span>,
        <span className="text-xl 2xl:text-[32px] leading-[40%]">{t('privacy_content4_sub6')}</span>,
        [
          <>{t('privacy_content4_sub7')}</>,
          <>
            {t('privacy_content4_sub8')}{' '}
            <span className="text-[#D6FF00]">{t('privacy_content4_sub9')}</span>.
          </>,
        ],
        <span className="text-xl 2xl:text-[24px] leading-[40%]">
          {t('privacy_content4_sub10')}
        </span>,
      ],
    },
    {
      title: t('privacy_title5'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          Depending on your jurisdiction, you may have certain rights regarding your personal information. These
          include:
        </span>,
        [
          <>
            <span className="text-[#EF53C0]">{t('privacy_content5_sub2')}</span>
            {' '}
            {t('privacy_content5_sub3')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content5_sub4')}</span>
            {' '}
            {t('privacy_content5_sub5')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content5_sub6')}</span>
            {' '}
            {t('privacy_content5_sub7')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content5_sub8')}</span>
            {' '}
            {t('privacy_content5_sub9')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content5_sub10')}</span>
            {' '}
            {t('privacy_content5_sub11')}{" "}
            <span className="text-[#D6FF00]">{t('privacy_content5_sub12')}</span> {t('privacy_content5_sub13')}
          </>,
          <>
            <span className="text-[#EF53C0]">{t('privacy_content5_sub14')}</span>
            {' '}
            {t('privacy_content5_sub15')}
          </>,
        ],
        <span className="text-2xl">
          {t('privacy_content5_sub16')} <span className="text-[#D6FF00]">{t('privacy_content5_sub17')}</span>; {t('privacy_content5_sub18')}
        </span>,
      ],
    },
    {
      title: t('privacy_title6'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('privacy_content6_sub1')}
        </span>,
        <div className="text-xl 2xl:text-[32px] leading-[40%]">
          <span className="  text-[#EF53C0]">{t('privacy_content6_sub2')}:</span>{' '}
          <Link href={'mailto:support@layerbrett.com'} className="text-xl 2xl:text-[32px] leading-[40%]">
            support@layerbrett.com
          </Link>
        </div>,
        <span className="text-2xl">
          {t('privacy_content6_sub3')}
        </span>,
      ],
    },
    {
      title: t('privacy_title7'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('privacy_content7_sub1')}
        </span>,
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('privacy_content7_sub2')}
        </span>,
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('privacy_content7_sub3')} <span className="text-[#D6FF00]">LayerBrett.com</span> {t('privacy_content7_sub4')}
        </span>,
      ],
    },
  ];
  return (
    <div className={`  bg-faq`}>
      <div className="flex font-koulen flex-col gap-8 md:gap-16 relative z-10 max-w-[1546px] w-full ">
        <img src="/assets/PRIVACY POLICY.png" className="max-w-[514px] w-full h-auto" alt="" />
        <div className="flex flex-col gap-12">
          {Privacy.map((privacy) => (
            <div className="flex flex-col gap-8" key={privacy.title}>
              <span className="text-light-green text-2xl xl:text-[48px] text-[#D6FF00] font-normal">
                {privacy.title}
              </span>
              {privacy.contents.map((content: any, index) => {
                if (typeof content !== 'string' && content.length > 1) {
                  return (
                    <ul className="list-disc pl-10  marker:text-[#EF53C0]" key={index}>
                      {content.map(
                        (
                          item:
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactElement<unknown, string | JSXElementConstructor<any>>
                            | Iterable<ReactNode>
                            | ReactPortal
                            | Promise<
                              | string
                              | number
                              | bigint
                              | boolean
                              | ReactPortal
                              | ReactElement<unknown, string | JSXElementConstructor<any>>
                              | Iterable<ReactNode>
                              | null
                              | undefined
                            >
                            | Iterable<ReactNode>
                            | null
                            | undefined,
                          subindex: Key | null | undefined,
                        ) => (
                          <li key={subindex} className=" text-[18px] lg:text-[20px] 2xl:text-2xl">
                            {item}
                          </li>
                        ),
                      )}
                    </ul>
                  );
                } else {
                  return (
                    <span className="text-white font-normal" key={index}>
                      {content}
                    </span>
                  );
                }
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyContent;
