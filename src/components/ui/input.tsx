import React from 'react';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  style?: React.CSSProperties;
  className?: string;
  staking?: any;
}

const CustomInput: React.FC<CustomInputProps> = ({ style, staking, className = '', ...props }) => {
  return (
    <input
      className={`w-full   px-5 rounded-[5px] bg-[#138DB1] outline-none font-normal font-koulen 
        text-[20px] lg:text-[24px] placeholder:text-white  border-[4px]  border-[#003E58]
        ${staking ? 'shadow-mobIn' : 'shadow-mobIn lg:shadow-desk'}
        h-[50px] lg:h-[57px] leading-[80%]  
        ${className}`}
      style={{
        ...style,
      }}
      {...props}
    />
  );
};

export default CustomInput;
