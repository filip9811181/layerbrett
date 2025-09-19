import type { Metadata } from 'next';
import { Geist, Geist_Mono, Koulen, Nunito, Orbitron, Press_Start_2P } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import WalletProvider from './providers';
import Disclaimer from '@/components/Disclaimer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const koulen = Koulen({
  variable: '--font-koulen',
  weight: '400',
  subsets: ['latin'],
});

const pressStart2P = Press_Start_2P({
  variable: '--font-press-start-2p',
  weight: '400',
  subsets: ['latin'],
});

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['400', '700'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
  weight: ['400', '700'], // ✅ You can include multiple weights if you need them
});

export const metadata: Metadata = {
  title: 'LayerBrett | Fast & Rewarding Layer 2 Blockchain',
  description:
    'Layer Brett is more than a Layer 2—it’s a movement bringing speed, rewards, and personality to blockchain technology.',
  keywords: ['LayerBrett'],
  authors: [{ name: 'LayerBrett Team' }],

  // ✅ robots must be at top level
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },

  openGraph: {
    title: 'LayerBrett',
    description: 'Bringing speed, rewards, and personality to blockchain technology.',
    url: 'https://www.layerbrett.com',
    siteName: 'LayerBrett',
    images: [
      {
        url: 'https://www.layerbrett.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LayerBrett Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'LayerBrett',
    description: 'Bringing speed, rewards, and personality to blockchain technology.',
    images: ['https://www.layerbrett.com/og-image.jpg'],
  },

  alternates: {
    canonical: 'https://www.layerbrett.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics gtag.js script */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TRN142Z3K9" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TRN142Z3K9');
          `}
        </Script>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2125149854659399');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2125149854659399&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${koulen.variable} ${nunito.variable} ${pressStart2P.variable} ${orbitron.variable}`}
      >
        <div id="__next"></div>
        <div id="modal-root"></div>
        <Disclaimer />
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
