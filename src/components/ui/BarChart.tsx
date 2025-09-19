import React from 'react';

type BarChartProps = {
  months: number;
  selectedIndex: number;
};

const BarChart: React.FC<BarChartProps> = ({ months, selectedIndex }) => {
  return (
    <div className="w-[90%] h-[80%]  flex items-end gap-2 ">
      {Array.from({ length: months }).map((_, index) => (
        <div
          key={index}
          className={`w-[30px] rounded-sm transition-all duration-300 ${
            index === selectedIndex
              ? 'bg-[#FFB3E8] border-[#EF53C0C0] border-[4px]'
              : 'bg-[#0487AB] border-[#003E58] border-[4px] shadow-pink hover:bg-blue-400'
          }`}
          style={{ height: `${100 + index * 10}px` }}
        />
      ))}
    </div>
  );
};

export default BarChart;
