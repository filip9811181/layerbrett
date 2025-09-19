import React from 'react';
import { CalculatorComponent } from '../ui/calculator';
import Image from 'next/image';

const Calculator = () => {
  return (
    <div className=" min-h-[1079px] lg:min-h-[1214px] ">
      {/* <div className="overlays  lg:hidden absolute top-10 z-[0] h-[100px]"></div> */}

      <img
        src="/assets/background8 1-min.png"
        className="absolute top-0 bottom-0 object-cover hidden sm:block w-full h-full z-[-1]"
        alt=""
      />
      <img
        src="/assets/background8 1 copy 1.png"
        className="absolute top-0 bottom-0 object-cover  sm:hidden w-full h-full z-[-1]"
        alt=""
      />

      <img
        src="/assets/alien4 1.svg"
        className="max-lg:max-w-[200px] max-largeScreen:max-w-[400px] largeScreen:max-w-[621px] w-full absolute bottom-[-80px] lg:bottom-10 right-3 lg:right-0 z-[1]"
        alt=""
      />
      <img
        src="/assets/ads2.png"
        className=" max-lg:max-w-[250px] max-largeScreen:max-w-[450px]  largeScreen:max-w-[614px] w-full absolute bottom-16 xl:bottom-[200px]  left-5 lg:left-0 z-[1]"
        alt=""
      />

      <div className=" pt-[80px] lg:pt-[150px]">
        <img
          src="/assets/Calculator.svg"
          className="max-w-[382px] pb-4 lg:max-w-[533px] w-full max-lg:relative max-lg:z-[2] mx-auto"
          alt=""
        />
        <CalculatorComponent />
      </div>
    </div>
  );
};

export default Calculator;
