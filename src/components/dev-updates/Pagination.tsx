'use client';
import React, { useState, useEffect } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const getMobilePageNumbers = () => [1, 2, 'dots', totalPages];

  const getDesktopPageNumbers = () => {
    if (totalPages <= 5) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, 4, 'dots', totalPages];
    if (currentPage >= totalPages - 2) return [1, 'dots', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, 'dots', currentPage - 1, currentPage, currentPage + 1, 'dots', totalPages];
  };

  const pageNumbers = isMobile ? getMobilePageNumbers() : getDesktopPageNumbers();

  return (
    <div className="w-full">
      {!isMobile && (
        <div className="pagination flex items-center gap-[52px] justify-center">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`border-[4px] border-[#003E58] bg-[#0487AB] rounded-[15px] shadow-outerDesk
            h-[61px] flex items-center justify-center max-w-[163px] w-full text-2xl font-koulen leading-[80%] 
            ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#026b87]'}`}
          >
            {'< Previous'}
          </button>

          <div className="flex gap-[30px] items-center">
            {pageNumbers.map((page, idx) => (
              <React.Fragment key={idx}>
                {page === 'dots' ? (
                  <img src="/assets/png.png" alt="dots" className="w-[43px] object-contain" />
                ) : (
                  <button
                    onClick={() => onPageChange(Number(page))}
                    className={`border-[4px] border-[#003E58] rounded-[15px] shadow-outerDesk
                    h-[61px] flex items-center justify-center w-[76px] text-[36px] font-koulen leading-[100%] 
                    ${
                      currentPage === page
                        ? 'bg-[#FFB3E8] text-[#003E57]'
                        : 'bg-[#0487AB] text-white hover:bg-[#026b87]'
                    }`}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`border-[4px] border-[#003E58] bg-[#0487AB] rounded-[15px] shadow-outerDesk
            h-[61px] flex items-center justify-center max-w-[163px] w-full text-2xl font-koulen leading-[80%]
            ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#026b87]'}`}
          >
            {'NEXT >'}
          </button>
        </div>
      )}

      {/* Mobile version */}
      {isMobile && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center gap-[20px] w-full">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`border-[4px] border-[#003E58] bg-[#0487AB] rounded-[15px] shadow-outerDesk
               h-[61px] flex items-center justify-center max-w-[163px] w-full text-2xl font-koulen leading-[80%] 
              ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#026b87]'}`}
            >
              {'< Previous'}
            </button>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`border-[4px] border-[#003E58] bg-[#0487AB] rounded-[15px] shadow-outerDesk
               h-[61px] flex items-center justify-center max-w-[163px] w-full text-2xl font-koulen leading-[80%]
              ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#026b87]'}`}
            >
              {'NEXT >'}
            </button>
          </div>

          <div className="flex gap-[15px] items-center justify-center">
            {pageNumbers.map((page, idx) => (
              <React.Fragment key={idx}>
                {page === 'dots' ? (
                  <img src="/assets/png.png" alt="dots" className="w-[43px] object-contain" />
                ) : (
                  <button
                    onClick={() => onPageChange(Number(page))}
                    className={`border-[4px] border-[#003E58] rounded-[15px] shadow-outerDesk
                    h-[61px] flex items-center justify-center w-[76px] text-[36px] font-koulen leading-[100%]
                    ${
                      currentPage === page
                        ? 'bg-[#FFB3E8] text-[#003E57]'
                        : 'bg-[#0487AB] text-white hover:bg-[#026b87]'
                    }`}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
