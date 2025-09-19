'use client';
import { useEffect, useState } from 'react';

export default function Disclaimer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function checkCountry() {
      try {
        const res = await fetch('https://ipwho.is/');
        const data = await res.json();
        console.log(data); // log response for testing
        if (data.country_code === 'GB') {
          setShow(true);
        }
      } catch (err) {
        console.error('Geo check failed:', err);
      }
    }
    checkCountry();
  }, []);

  useEffect(() => {
    if (show) {
      document.documentElement.style.overflow = 'hidden'; // <html>
      document.body.style.overflow = 'hidden'; // <body>
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <div className="rounded-[12px] max-w-[430px] w-full lg:max-w-[576px] bg-[#0487AB] border-[3px] border-[#003E58] shadow-desclaimerDesk p-5">
        <div className="p-8 bg-[#005870] border-[4px] border-[#003E58] shadow-custom-inset lg:p-10 text-center">
          <h2 className="stroked2 koulen text-[36px] lg:text-[48px] font-normal mb-4">Website Disclaimer</h2>
          <div className="max-w-[451px] mx-auto pb-[33px] text-xl lg:text-2xl font-koulen font-normal uppercase">
            This website is not intended for users in the United Kingdom and may not comply with the UK’s Financial
            Promotions Regime. If you are accessing this site from the UK, we kindly request that you exit the website.
          </div>

          <div className="flex flex-col gap-[19px] max-w-[451px] w-full mx-auto">
            <button
              onClick={() => (window.location.href = 'https://google.com')} // Redirect user
              className="h-[62px] w-full flex items-center justify-center bg-[#FFB3E8] border-[#EF53C0C0] border-[5px] shadow-desclBtn uppercase text-2xl font-normal font-koulen text-[#003E57]"
            >
              Leave Site
            </button>
            <button
              onClick={() => setShow(false)} // Close modal and allow site access
              className="h-[62px] w-full flex items-center justify-center bg-[#00D2ED] border-[#009BAF] border-[5px] shadow-desclBtn uppercase text-2xl font-normal font-koulen text-[#003E57]"
            >
              Continue to Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
