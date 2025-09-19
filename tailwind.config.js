/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        geist: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)',

        koulen: ['koulen', 'sans-serif'],
        schwifty: 'var(--font-get-schwifty)',
        nunito: 'var(--font-nunito)',
        press: 'var(--font-press-start-2p)',
        obriton: 'var(--font-orbitron)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // customize speed here
      },
      screens: {
        '3xl': '1900px',
        xxs: '390px',
        largeScreen: '1800px',
        mini: '840px',
        mediumScreen: '1600px',
      },
      backgroundImage: {
        pinkGrad: 'linear-gradient(90deg, #EF53C0 0%, #FFB3E8 100%)',
        blue: 'linear-gradient(180deg, #143153 0%, #11284A 76.41%)',
      },
      boxShadow: {
        'custom-inset': '-16px 16px 0px 0px #003E58 inset',
        mob: '-9.42px 9.42px 0px 0px #003E58 inset',
        mobIn: '-4.71px 4.71px 0px 0px #003E58 inset',
        desk: '-8px 8px 0px 0px #003E58 inset',
        cardMob: '-11.91px 11.91px 0px 0px #003E58',
        btnShadowMob: '-15.86px 15.86px 0px 0px #003E58',
        token: '-9.25px 9.25px 0px 0px #003E58',
        saleMob: '-11.65px 11.65px 0px 0px #003E58',
        calMob: '-4.24px 4.24px 0px 0px #003E58',
        innerMob: '-8.48px 8.48px 0px 0px #003E58 inset',
        outerDesk: '-8px 8px 0px 0px #003E58',
        staking: '-13.34px 13.34px 0px 0px #003E58 inset',
        pink: '-4px 4px 0px 0px #003E58',
        mobileMenu: '-6.67px 6.67px 0px 0px #003E58',
        shadowSm: '-16px 16px 0px 0px #003E58',
        pinkShadow: '0px 0px 41.1px 0px #FFB3E8',
        desclaimerDesk: '-12.6px 12.6px 0px 0px #003E58',
        desclBtn: '-10.67px 10.67px 0px 0px #003E58',
        social: '4.83px 4.83px 0px 0px #003E58',
        close: '6.23px 6.23px 0px 0px #003E58',
        buyNow: '-6.15px 6.15px 0px 0px #003E58',
      },
    },
  },
  plugins: [],
};
