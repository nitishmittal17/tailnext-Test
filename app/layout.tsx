import { Metadata, Script } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';
import { VWOScript } from 'vwo-smartcode-nextjs';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/9d18ee6563ae902bfee888d5/script.js"
          strategy="beforeInteractive" // or "lazyOnload" if it's non-essential
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <VWOScript 
            accountId="4000477" 
            type="ASYNC"
            linkAttributes={{
              crossOrigin: ""
            }}
        />
        </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300">
        <Providers>
          <Announcement />
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
