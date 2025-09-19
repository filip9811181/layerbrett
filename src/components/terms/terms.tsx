'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const TermsContent = () => {
  const { t } = useTranslation();

  const Terms = [
    {
      title: t('terms_title'),
      contents: [
        <span className="text-[18px] lg:text-2xl">
          {t('terms_contents_sub1')} <span className="text-[#D6FF00]">LayerBrett.com</span> {t('terms_contents_sub2')}. {t('terms_contents_sub3')}{' '}
          <Link href={'/'} className="font-normal text-[#D6FF00]">
            [www.layerbrett.com]
          </Link>{' '}
          {t('terms_contents_sub4')}
        </span>,
        <span className="text-[18px] lg:text-2xl">
          {t('terms_contents_sub5')}
        </span>,
      ],
    },
    {
      title: t('terms_title1'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content1_sub1')} <span className="text-[#D6FF00]">{t('terms_content1_sub2')}</span>. {t('terms_content1_sub3')}
        </span>,
        [
          t('terms_content1_sub4'),
          t('terms_content1_sub5'),
        ],
        <span className="text-[18px] lg:text-2xl">
          {t('terms_content1_sub6')}
        </span>,
      ],
    },
    {
      title: t('terms_title2'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {' '}
          {t('terms_content2_sub1')}
        </span>,
        [
          <>
            {t('terms_content2_sub2')} <span className="text-[#D6FF00]">{t('terms_content2_sub3')}</span> {t('terms_content2_sub4')}
          </>,
          <>{t('terms_content2_sub5')}</>,
          <>
            {t('terms_content2_sub6')} <span className="text-[#D6FF00]">{t('terms_content2_sub7')}</span> {t('terms_content2_sub8')}
          </>,
          <>{t('terms_content2_sub9')}</>,
        ],
        <span className=" text-lg 2xl:text-2xl leading-[40%]">
          {' '}
          {t('terms_content2_sub10')}
        </span>,
      ],
    },
    {
      title: t('terms_title3'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content3_sub1')}{' '}
          <span className="text-[#D6FF00]">{t('terms_content3_sub2')}</span>:
        </span>,
        [
          <>
            {t('terms_content3_sub3')}{' '}
            <span className="text-[#D6FF00]">{t('terms_content3_sub4')}</span>.
          </>,
          <>
            {t('terms_content3_sub5')}
          </>,
          <>
            {t('terms_content3_sub6')}{' '}
            <span className="text-[#D6FF00]">{t('terms_content3_sub7')}</span> {t('terms_content3_sub8')}
          </>,
        ],
        <span className="text-lg 2xl:text-2xl">
          {' '}
          {t('terms_content3_sub9')}
        </span>,
      ],
    },
    {
      title: t('terms_title4'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content4_sub1')} <span className="text-[#D6FF00]">{t('terms_content4_sub2')}</span>, {t('terms_content4_sub3')}
        </span>,
        [
          <>
            {t('terms_content4_sub4')} <span className="text-[#D6FF00]">{t('terms_content4_sub5')}</span>, {t('terms_content4_sub6')}
          </>,
          <>
            {t('terms_content4_sub7')} <span className="text-[#D6FF00]">{t('terms_content4_sub8')}</span> {t('terms_content4_sub9')}
            <span className="text-[#D6FF00]"> {t('terms_content4_sub10')}</span> {t('terms_content4_sub11')}
          </>,
          <>
            {t('terms_content4_sub12')}
          </>,
          <>
            {t('terms_content4_sub13')}{" "}
            <span className="text-[#D6FF00]">{t('terms_content4_sub14')}</span> {t('terms_content4_sub15')}
          </>,
          <>
            {t('terms_content4_sub16')} <span className="text-[#D6FF00]">{t('terms_content4_sub17')}</span>.
          </>,
        ],
      ],
    },
    {
      title: t('terms_title5'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content5_sub1')} <span className="text-[#D6FF00]">{t('terms_content5_sub2')}</span>{" "}
          {t('terms_content5_sub3')}
        </span>,
        [
          <>
            {t('terms_content5_sub4')} <span className="text-[#D6FF00]">{t('terms_content5_sub5')}</span> {t('terms_content5_sub6')}
          </>,
          <>
            {t('terms_content5_sub7')} <span className="text-[#D6FF00]">{t('terms_content5_sub8')}</span> {t('terms_content5_sub9')}
          </>,
          <>
            {t('terms_content5_sub10')} <span className="text-[#D6FF00]">{t('terms_content5_sub11')}</span>{" "}
            {t('terms_content5_sub12')}
          </>,
          <>
            {t('terms_content5_sub13')}{" "}
            <span className="text-[#D6FF00]">{t('terms_content5_sub14')}</span>
            {" "}{t('terms_content5_sub15')}
          </>,
          <>
            {t('terms_content5_sub16')}
          </>
        ],
      ],
    },
    {
      title: t('terms_title6'),
      contents: [
        [
          <>
            {t('terms_content6_sub1')} <span className="text-[#D6FF00]">{t('terms_content6_sub2')}</span> {t('terms_content6_sub3')}{" "}
            <span className="text-[#D6FF00]">{t('terms_content6_sub4')}</span>.
          </>,
          <>
            {t('terms_content6_sub5')} <span className="text-[#D6FF00]">{t('terms_content6_sub6')}</span> {t('terms_content6_sub7')}
          </>,
        ],
      ],
    },
    {
      title: t('terms_title7'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content7_sub1')}{' '}
          <span className="text-[#D6FF00]">{t('terms_content7_sub2')}</span>, {t('terms_content7_sub3')} [{t('terms_content7_sub4')}]. {t('terms_content7_sub5')}
        </span>,
      ],
    },
    {
      title: t('terms_title8'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content8_sub1')}{' '}
          <span className="text-[#D6FF00]">{t('terms_content8_sub2')}</span> {t('terms_content8_sub3')}{' '}
          <span className="text-[#D6FF00]">{t('terms_content8_sub2')}</span>, {t('terms_content8_sub4')}{' '}
          <span className="text-[#D6FF00]">{t('terms_content8_sub5')}</span>{' '}
          {t('terms_content8_sub6')}
        </span>,
        <span className=" text-xl 2xl:text-[32px] leading-[40%]"> {t('terms_content8_sub7')}</span>,
        [
          t('terms_content8_sub8'),
          t('terms_content8_sub9'),
          t('terms_content8_sub10'),
        ],
        <span className=" text-xl 2xl:text-2xl leading-[40%]">
          {t('terms_content8_sub11')} <span className="text-[#D6FF00]">{t('terms_content8_sub2')}</span>.
        </span>,
      ],
    },
    {
      title: t('terms_title9'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content9_sub1')} <span className="text-[#D6FF00]">{t('terms_content9_sub2')}</span>, {t('terms_content9_sub3')}
        </span>,
        [
          <>
            <span className="text-[#D6FF00]">{t('terms_content9_sub4')}</span> {t('terms_content9_sub5')}
          </>,
          <>
            <span className="text-[#D6FF00]">{t('terms_content9_sub6')}</span> {t('terms_content9_sub7')}
          </>,
          <>
            <span className="text-[#D6FF00]">{t('terms_content9_sub8')}</span> {t('terms_content9_sub9')}
          </>,
          <>
            <span className="text-[#D6FF00]">{t('terms_content9_sub10')}</span> {t('terms_content9_sub11')}
          </>,
          <>
            <span className="text-[#D6FF00]">{t('terms_content9_sub12')}</span> {t('terms_content9_sub13')}
          </>,
          <>
            <span className="text-[#D6FF00]">{t('terms_content9_sub14')}</span> {t('terms_content9_sub15')}
          </>,
        ],
        <span className=" text-xl 2xl:text-[24px] leading-[40%]">
          {t('terms_content9_sub16')}{" "}
          <span className="text-[#D6FF00]">{t('terms_content9_sub17')}</span>. {t('terms_content9_sub18')}
        </span>,
        <span className=" text-xl 2xl:text-[24px] leading-[40%]">
          {t('terms_content9_sub19')}
        </span>,
        <span className=" text-xl 2xl:text-[24px] leading-[40%]">
          {t('terms_content9_sub20')} <span className="text-[#D6FF00]">{t('terms_content9_sub21')}</span>. {t('terms_content9_sub22')}
        </span>,
      ],
    },
    {
      title: t('terms_title10'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content10_sub1')} <span className="text-[#D6FF00]">{t('terms_content8_sub2')}</span> {t('terms_content10_sub2')}
        </span>,
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">{t('terms_content10_sub3')}</span>,
        [
          t('terms_content10_sub4'),
          t('terms_content10_sub5'),
        ],
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content10_sub6')} <span className="text-[#D6FF00]">{t('terms_content10_sub7')}</span>. {t('terms_content10_sub8')}
        </span>,
      ],
    },
    {
      title: t('terms_title11'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content11_sub1')} <span className="text-[#D6FF00]">{t('terms_content11_sub2')}</span> {t('terms_content11_sub3')}
        </span>,
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">{t('terms_content11_sub4')}</span>,
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">{t('terms_content11_sub5')}</span>,
      ],
    },
    {
      title: t('terms_title12'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]" >
          {t('terms_content12_sub1')} <span className="text-[#D6FF00]">{t('terms_content8_sub2')}</span> {t('terms_content12_sub2')} <span className="text-[#D6FF00]">LayerBrett.com</span>, {t('terms_content12_sub3')}
        </span>,
        [
          t('terms_content12_sub4'),
          t('terms_content12_sub5'),
          t('terms_content12_sub6'),
          t('terms_content12_sub7'),
        ],
      ],
    },
    {
      title: t('terms_title13'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content13_sub1')}, <span className="text-[#D6FF00]">{t('terms_content8_sub2')}</span>,
          {" "}{t('terms_content13_sub2')}
          <span className="text-[#D6FF00]">
            {" "}{t('terms_content13_sub3')}
          </span>
          , {t('terms_content13_sub4')}
        </span>,
        [
          t('terms_content13_sub5'),
          t('terms_content13_sub6'),
          t('terms_content13_sub7'),
          t('terms_content13_sub8'),
        ],
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content13_sub9')}{" "}
          <span className="text-[#D6FF00]">{t('terms_content13_sub10')}</span>
        </span>,
      ],
    },
    {
      title: t('terms_title14'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content14_sub1')} <span className="text-[#D6FF00]">{t('terms_content14_sub2')}</span>, {t('terms_content14_sub3')}
        </span>,
      ],
    },
    {
      title: t('terms_title15'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content15_sub1')} <span className="text-[#D6FF00]">{t('terms_content15_sub2')}</span> {t('terms_content15_sub3')}{" "}
          <span className="text-[#D6FF00]">{t('terms_content15_sub4')}</span>, {t('terms_content15_sub5')}{" "}
          <span className="text-[#D6FF00]">{t('terms_content15_sub6')}</span> {t('terms_content15_sub7')}
        </span>,
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {t('terms_content15_sub8')}
        </span>,
      ],
    },
    {
      title: t('terms_title16'),
      contents: [
        <span className=" text-xl 2xl:text-[32px] leading-[40%]">
          {' '}
          {t('terms_content16_sub1')}{' '}
        </span>,
        <Link href={'mailto:support@layerbrett.com'} className=" text-xl 2xl:text-[32px] leading-[40%]" key={1}>
          <span className="text-[#D6FF00]">support@layerbrett.com</span>
        </Link>,
        <span className=" text-xl 2xl:text-[32px] leading-[40%]"> {t('terms_content16_sub2')} </span>,
      ],
    },
  ];
  return (
    <div className={`  overflow-hidden bg-faq`}>
      <div className="flex font-koulen flex-col gap-8 md:gap-16 relative z-10 max-w-[1546px] w-full">
        <h1 className="2xl:text-[90px] leading-[136%] max-w-[1229px] w-full text-[40px]">
          {t('terms_main')} LAYERBRETT.COM
          <img src="/assets/“LAYER BRETT”.png" alt="Layer Brett" className=" lg:inline-block ml-2" />
        </h1>

        <div className="flex flex-col gap-12">
          {Terms.map((term) => (
            <div className="flex flex-col gap-8" key={term.title}>
              <span className="text-light-green text-2xl xl:text-[48px] text-[#D6FF00] font-normal">{term.title}</span>
              {term.contents.map((content, index) => {
                if (Array.isArray(content) && content.length > 1) {
                  return (
                    <ul className="list-disc pl-10" key={index}>
                      {content.map((item: any, subindex: any) => (
                        <li className="text-[18px] lg:text-[20px] 2xl:text-2xl" key={subindex}>
                          {item}
                        </li>
                      ))}
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

export default TermsContent;
