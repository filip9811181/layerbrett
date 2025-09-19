import Image from 'next/image';
import { useTranslation } from 'react-i18next';

type GradientProgressBarProps = {
  progress: number; // 80 to 100
  avatarSrc: string;
};

export default function Progress({ progress, avatarSrc }: GradientProgressBarProps) {
  const { t } = useTranslation();

  return (
    <div className="relative h-[57px] w-full rounded-[5px] bg-[#138DB1] px-2 py-1 border-[4px] border-[#003E58] ">
      <span className="absolute  top-1/2 left-5 -translate-y-1/2 text-[#003E57] text-sm lg:text-[24px] lg:text-[24px] font-normal font-koulen z-[1]">
        {t('Untilnextpriceincrease')}
      </span>
      <div
        className="relative h-full rounded-[5px] shadow-pinkShadow flex items-center  border-[#003E58] border-[4px] bg-pinkGrad"
        style={{ width: `${progress}%` }}
      >
        {/* Avatar overlay */}
        <div
          className={`absolute ${
            progress < 10 ? '-right-9' : '-right-4'
          }  top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-2 border-cyan-900 bg-pink-300 overflow-hidden z-[2]`}
        >
          <Image src={avatarSrc} alt="Avatar" width={54} height={57} className="rounded-full object-cover" />
        </div>
      </div>
      {/* <span className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-[20px] font-bold z-1">
        {progress}%
      </span> */}
    </div>
  );
}
