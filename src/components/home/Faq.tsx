import React from 'react';
import { Accordion } from '../ui/accordion';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import WebmImage from '../ui/WebmImage';

const Faq = () => {
  const { t } = useTranslation();
  const faqData = [
    {
      question: t('Faq_ques1'),
      answer: t('Faq_ans1'),
    },
    {
      question: t('Faq_ques2'),
      answer: t('Faq_ans2'),
    },
    {
      question: t('Faq_ques3'),
      answer: t('Faq_ans3'),
    },
    {
      question: t('Faq_ques4'),
      answer: t('Faq_ans4'),
    },
    {
      question: t('Faq_ques5'),
      answer: t('Faq_ans5'),
    },
    {
      question: t('Faq_ques6'),
      answer: t('Faq_ans6'),
    },
    {
      question: t('Faq_ques7'),
      answer: t('Faq_ans7'),
    },
    {
      question: t('Faq_ques8'),
      answer: t('Faq_ans8'),
    },
    {
      question: t('Faq_ques9'),
      answer: t('Faq_ans9'),
    },
    {
      question: t('Faq_ques10'),
      answer: t('Faq_ans10'),
    },
    // Add as many entries as you'd like
  ];

  return (
    <div className="max-md:pb-0 py-[100px] relative overflow-hidden z-[1]">
      <WebmImage
        width={1000}
        height={1000}
        src="/gif/social_gpalacinka_httpss 201.webm"
        className=" xl:top-1/2 -translate-y-1/2 largeScreen:max-w-[895px] max-w-[500px] hidden xl:block h-auto largeScreen:h-[767px] z-[-1] w-full absolute left-[-59px]  rotate-90"
        alt=""
      />

      <div className=" max-w-[700px] largeScreen:max-w-[903px] max-lg:py-10 max-lg:px-4 w-full ml-auto mr-[10%]">
        <div className="flex items-center relative max-lg:pb-10">
          <img src="/assets/FAQs.png" className="max-w-[140px] md:max-w-[254px] w-full h-auto" alt="" />
          <img src="/assets/Group 1597885488.svg" className="hidden lg:block " alt="" />
          <img src="/assets/planet 2.svg" className=" lg:hidden -ml-10 mb-[-20px] " alt="" />
        </div>
        <div className="flex flex-col w-full gap-3">
          {faqData.map((item, index) => (
            <Accordion key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
      <div className="xl:hidden min-h-[450.6719970703129px] relative">
        <WebmImage
          width={1000}
          height={1000}
          src="/gif/social_gpalacinka_httpss 201.webm"
          className="max-w-full  lg:hidden h-auto z-[-1] w-full absolute left-[-30px]  rotate-90"
          alt=""
        />
      </div>
    </div>
  );
};

export default Faq;
