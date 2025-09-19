'use client';
import React, { useState, useRef } from 'react';

interface AccordionProps {
  question: string;
  answer: string;
}

export const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-2 border-[#8F9293] w-full px-[18px] py-3  transition-all duration-300">
      <div onClick={toggleAccordion} className="flex cursor-pointer justify-between items-center">
        <h2
          className={`text-[24px] font-normal font-koulen transition-colors duration-300 ${
            isOpen ? 'text-[#D6FF00]' : 'text-white'
          }`}
        >
          {question}
        </h2>
        <span
          className={`text-[24px] font-normal font-koulen transition-colors duration-300 ${
            isOpen ? 'text-[#D6FF00]' : 'text-white'
          }`}
        >
          {isOpen ? '-' : '+'}
        </span>
      </div>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] pt-5' : 'max-h-0'
        }`}
      >
        <p className="text-[20px] font-medium font-nunito text-white">{answer}</p>
      </div>
    </div>
  );
};
