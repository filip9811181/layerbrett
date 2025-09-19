'use client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { cookieStorage, createStorage, http } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet } from '@reown/appkit/networks';
import { createAppKit } from '@reown/appkit/react';
import React, { type ReactNode } from 'react';
import { Suspense, useEffect } from 'react';
import '../../lib/i18n.js';
import { ToastContainer } from 'react-toastify';

export const projectId = '8fc0996253ec9bd0c029ff4fe4680e12';

if (!projectId) {
  throw new Error('Project ID is not defined');
}

export const networks = [mainnet];

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId: projectId,
  networks,
});

export const wagmiConfig = wagmiAdapter.wagmiConfig;

const metadata = {
  name: 'Layer Brett',
  description:
    'Layer Brett ⚡ The ultimate Layer 2 memecoin on Ethereum—where speed meets memes and utility explodes. $LBRETT | The future is Layered.',
  url: 'https://www.layerbrett.com/', // origin must match your domain & subdomain
  icons: ['https://www.layerbrett.com/favicon.ico'],
};

export const web3Modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: projectId,
  networks: [mainnet],
  defaultNetwork: mainnet,
  showWallets: false,
  metadata: metadata,
  enableWalletGuide: false,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: false,
    emailShowWallets: false,
    socials: false,
    connectMethodsOrder: ['wallet'],
  },
});

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <ToastContainer />
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>
    </Suspense>
  );
}
