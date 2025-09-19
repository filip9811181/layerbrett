'use client';
import React, { useState } from 'react';
import Pagination from './Pagination';
import { useTranslation } from 'react-i18next';
import ArticleModal from './article-modal';
export const DevUpdatesPageIndex = () => {
  const { t } = useTranslation();

  const updates = [
    {
      id: 1,
      img: '/assets/Rectangle 5524.png',
      date: '5 September 2025',
      title: t('DevelopmentUpdate1'),
      description: t('dev_update1'),
      buttonText: t('readFullArticle'),
    },
    {
      id: 2,
      img: '/assets/update2.png',
      date: '9 September 2025',
      title: t('DevelopmentUpdate2'),
      description: t('dev_update2_1'),
      buttonText: t('readFullArticle'),
      description2: t('dev_update2_2'),
    },
    // {
    //   id: 3,
    //   img: '/assets/update3.png',
    //   date: '11 April 2025',
    //   title: 'Development Update 122',
    //   description:
    //     'Our team has been making significant strides in institutional lending. With full deployment on the horizon, we’ve been refining smart contracts for structured...',
    //   buttonText: 'read full article',
    // },
    // {
    //   id: 4,
    //   img: '/assets/update4.png',
    //   date: '11 April 2025',
    //   title: 'Development Update 122',
    //   description:
    //     'Our team has been making significant strides in institutional lending. With full deployment on the horizon, we’ve been refining smart contracts for structured...',
    //   buttonText: 'read full article',
    // },
    // {
    //   id: 5,
    //   img: '/assets/update5.png',
    //   date: '11 April 2025',
    //   title: 'Development Update 122',
    //   description:
    //     'Our team has been making significant strides in institutional lending. With full deployment on the horizon, we’ve been refining smart contracts for structured...',
    //   buttonText: 'read full article',
    // },
    // {
    //   id: 6,
    //   img: '/assets/update6.png',
    //   date: '11 April 2025',
    //   title: 'Development Update 122',
    //   description:
    //     'Our team has been making significant strides in institutional lending. With full deployment on the horizon, we’ve been refining smart contracts for structured...',
    //   buttonText: 'read full article',
    // },
  ];

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(updates.length / itemsPerPage);

  // ✅ Slice data for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUpdates = updates.slice(startIndex, startIndex + itemsPerPage);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUpdate, setSelectedUpdate] = useState(null);
  const handleOpenModal = (update: any) => {
    setSelectedUpdate(update);
    setIsOpen(true);
  };
  return (
    <div className="pt-[200px] pb-[100px] relative z-[1]">
      <img src="/assets/Mask group.png" className=" w-full h-auto object-cover top-0 absolute z-[-1]" alt="" />
      <img
        src="/assets/halfight.png"
        className="absolute right-0 lg:block hidden top-[500px] z-[-1] max-w-[255px] h-auto w-full"
        alt=""
      />
      <img
        src="/assets/alien9 1.svg"
        className="absolute left-[-14px] lg:block hidden bottom-[200px] z-[-1] max-w-[206px] h-auto w-full"
        alt=""
      />
      <img
        src="/assets/alien11 1.svg"
        className="absolute bottom-0 lg:block hidden max-w-[134.07020937094345px] h-auto largeScreen:bottom-[30%] right-10 lg:right-20"
        alt=""
      />
      <div className="max-w-[1384px] w-full mx-auto ">
        <div className="flex flex-col gap-[35px] ">
          <div className="flex flex-col gap-4 items-center px-4 ">
            <div className="flex flex-col  items-center lg:flex-row lg:gap-2">
              <h2 className="uppercase relative leading-none lg:leading-[136%] font-koulen text-[76px] lg:text-[90px] w-full font-normal text-white">
                Development
              </h2>
              <img src="/assets/Updates.png" className="max-w-[297px] max-lg:mt-[-40px] w-full" alt="" />
            </div>
            <p className="max-w-[768px] w-full mx-auto text-center font-medium text-lg leading-[140%] font-nunito">
              Explore our daily development releases and experience the exciting progress of our journey firsthand
              Monday - Friday each week!
            </p>
          </div>
          <div className="grid pb-[9px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:gap-x-[26px] gap-[26px] lg:gap-y-[19px]">
            {currentUpdates.map((update) => (
              <div
                key={update.id}
                className="bg-[#0487AB] pt-[14px] pb-[25px] px-4 rounded-[11.82px] border-[3.15px] border-[#003E58] shadow-desclaimerDesk"
              >
                <div className="border-[4px] h-full border-[#003E58] bg-[#005870] shadow-custom-inset py-[33px] pl-[22px] pr-[33px] flex flex-col gap-6">
                  {/* Image */}
                  <img src={update.img} className="max-w-full h-[244px] w-full" alt={update.title} />

                  <div className="max-w-[330px] w-full mx-auto">
                    {/* Date */}
                    <p className="text-lg text-white font-nunito font-medium">{update.date}</p>

                    {/* Title */}
                    <h2 className="shadowText text-[#003E57] koulen max-xxs:text-[30px] text-[34px] leading-[100%] py-3 font-normal">
                      {update.title.split('\n')[0]}
                    </h2>

                    {/* Description Wrapper */}
                    <div className="relative overflow-hidden mb-5 max-h-[7rem]">
                      <p className="text-lg leading-[120%] font-semibold font-nunito overflow-hidden [text-overflow:ellipsis] [display:-webkit-box] [-webkit-line-clamp:5] [-webkit-box-orient:vertical]">
                        {update.description}
                      </p>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => handleOpenModal(update)}
                      className="uppercase text-2xl font-normal bg-[#FFB3E8] rounded-[5.33px] border-[#EF53C0C0] border-[5.33px] shadow-desclBtn h-[62.66px] flex items-center justify-center w-full font-koulen text-[#003E57]"
                    >
                      {update.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ArticleModal isOpen={isOpen} setIsOpen={setIsOpen} data={selectedUpdate} />
        </div>
      </div>
      <ArticleModal isOpen={isOpen} setIsOpen={setIsOpen} data={selectedUpdate} />
    </div>
  );
};
