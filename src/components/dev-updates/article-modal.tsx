import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface DialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  data: any;
}

export default function ArticleModal({ isOpen, setIsOpen, data }: DialogProps) {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.getElementById('modal-root');
    setModalRoot(root);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isOpen]);

  if (!isOpen || !modalRoot) return null;

  const handleClose = () => setIsOpen(false);
  const router = useRouter();
  console.log(data, 'datatata');

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#000000B0]  "
        style={{
          backdropFilter: 'blur(10px)',
        }}
        onClick={handleClose}
      />

      <div className="relative z-[10000] max-w-[850px] w-full bg-[#0487AB] py-[14px] px-4 rounded-[11.82px] border-[3.15px] border-[#003E58] shadow-desclaimerDesk">
        <button
          onClick={handleClose}
          className="absolute -top-16 lg:-top-5 right-0 lg:-right-4 rounded-[10.39px] w-[46px] h-[46px] bg-[#FFB3E8] border-[#EF53C0C0] border-[3.12px] shadow-close flex items-center justify-center text-lg text-black font-nunito font-medium"
        >
          ✕
        </button>

        <div className="border-[4px] h-[700px] 3xl:h-[900px] hide-scrollbar overflow-auto border-[#003E58] bg-[#005870] shadow-custom-inset py-[34px] pl-[17px] pr-[35px] flex flex-col gap-6">
          <p className="text-lg  text-end lg:hidden text-white font-nunito font-medium">5 September 2025</p>

          <img src={data.img} className="max-w-full   w-full h-auto" alt="Cover" />
          {/* <img src="/assets/coverMobile.png" className="max-w-full  lg:hidden w-full h-auto" alt="Cover" /> */}

          <div className="max-w-[743px] w-full mx-auto flex flex-col gap-2">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
              <h2 className="shadowText text-[#003E57] koulen leading-[90%] text-[33px] lg:text-[36px] font-normal">
                {data.title.split('\n').map((line: any, index: any) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p className="text-lg hidden lg:block text-white font-nunito font-medium">{data.date}</p>
            </div>

            {/* <p className="text-lg font-semibold font-nunito">
              Hey Brett fam 👋
              <br />
              <br />
              We’ve officially kicked off development on the Layer Brett Ethereum L2! This week’s focus was all about
              making sure we’re starting from the freshest and most secure foundation.
              <br />
              <br />
              <strong>What we did</strong>
              <br />
              <br />
              Updated each of the main components (think of them as the “organs” of our Layer 2 system) — OP-Proposer,
              OP-Node, OP-Batcher, OP-Geth, and OP-Contracts — to their latest stable versions.
              <br />
              <br />
              This ensures we’re building on top of the newest features, bug fixes, and security improvements
              contributed by the broader Optimism/rollup community.
              {data.description}
            </p> */}
            <div className="text-lg font-semibold font-nunito leading-relaxed space-y-4">
              {data.description
                .split('\n\n')
                .map(
                  (
                    paragraph:
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<
                        | string
                        | number
                        | bigint
                        | boolean
                        | React.ReactPortal
                        | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
                        | Iterable<React.ReactNode>
                        | null
                        | undefined
                      >
                      | Iterable<React.ReactNode>
                      | null
                      | undefined,
                    index: React.Key | null | undefined,
                  ) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ),
                )}
            </div>
          </div>
          <div className="relative flex-shrink-0 h-[499.3567810058594px] lg:h-[118px] w-full">
            <img
              src="/assets/Group 1597885900.png"
              className="absolute hidden lg:block top-0 left-0 w-full h-[118px]   z-0"
              alt="Background"
            />
            <img
              src="/assets/Group 1.png"
              className="absolute  lg:hidden top-0 left-0 w-full h-[499.3567810058594px]   z-0"
              alt=""
            />

            <div className="  inset-0 flex px-[15px] lg:px-[32px] pt-2.5 gap-[25px] lg:gap-[42px] flex-col lg:flex-row items-center z-10">
              <div className="flex flex-col max-lg:mx-auto max-lg:items-center gap-[14px] lg:gap-2 max-w-[227.59799194335938px] lg:max-w-[134px] w-full">
                <img
                  src="/assets/Group 1597885772.svg"
                  className="max-w-full lg:hidden h-[70px] w-full z-10"
                  alt="Coin Icon"
                />
                <img
                  src="/assets/Group 1597885900 (1).png"
                  className="max-w-full h-auto hidden lg:block w-full z-10"
                  alt="Coin Icon"
                />

                <button
                  onClick={() => {
                    router.push('/');
                  }}
                  className="h-[60.9637451171875px] lg:h-[35.89px] text-[#003E57] w-full flex items-center justify-center bg-[#00D2ED] border-[5.22px] rounded-[6.52px] lg:border-[3.07px] border-[#009BAF] shadow-buyNow text-[28.43px] lg:text-base font-koulen font-normal uppercase z-10"
                >
                  BUY NOW
                </button>
              </div>

              <div className="relative max-lg:w-full lg:inline-block z-10">
                <h3
                  className="uppercase font-koulen font-normal max-xxs:text-[24px] text-[36px] lg:text-[45.17px] leading-[90%] relative z-10 flex items-center flex-wrap gap-2"
                  style={{ textShadow: '2px 2px 4px #003E57' }}
                >
                  <span className="block">most anticipated</span>
                  <span className="flex items-center gap-2">
                    meme coin of
                    <img
                      src="/assets/2025.png"
                      alt="2025"
                      className="inline-block max-xxs:h-[26px] h-[38px] lg:h-12 w-auto"
                    />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="max-w-[743px] w-full mx-auto ">
            {data.description2 && (
              <div className="pb-[29px] lg:py-[35px]">
                <div className="text-lg font-semibold font-nunito leading-relaxed space-y-4">
                  {data.description2.split('\n\n').map((paragraph: any, index: any) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between flex-col gap-10 lg:flex-row lg:gap-0 items-center">
              <button
                onClick={() => {
                  router.push('/');
                }}
                className="h-[66.532470703125px] w-full lg:max-w-[256px]   flex items-center justify-center bg-[#00D2ED] border-[5.66px] border-[#009BAF] shadow-buyNow text-[30.84px] text-[#003E57] font-koulen font-normal uppercase z-10"
              >
                BUY NOW
              </button>
              <div className="flex max-lg:justify-between max-lg:w-full lg:gap-3 items-center">
                <Link
                  href={'https://x.com/LayerBrett'}
                  target="_blank"
                  className="w-[51.877418518066406px]  h-[51.877418518066406px] rounded-[8.04px] bg-[#FFB3E8] border-[2.41px] border-[#EF53C0C0] shadow-social flex items-center justify-center "
                  aria-label="Twitter link"
                >
                  <img src="/assets/xCom.png" alt="" />
                </Link>
                <Link
                  href={'https://t.me/layerbrett'}
                  target="_blank"
                  aria-label="Telegram link"
                  className="w-[51.877418518066406px]  h-[51.877418518066406px] rounded-[8.04px] bg-[#FFB3E8] border-[2.41px] border-[#EF53C0C0] shadow-social flex items-center justify-center "
                >
                  <img src="/assets/teleg.png" alt="" />
                </Link>

                <Link
                  href={'https://www.tiktok.com/@layerbrettofficial'}
                  target="_blank"
                  className="w-[51.877418518066406px]  h-[51.877418518066406px] rounded-[8.04px] bg-[#FFB3E8] border-[2.41px] border-[#EF53C0C0] shadow-social flex items-center justify-center "
                >
                  <img src="/assets/tik-tok.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
