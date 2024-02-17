import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Provider from '@/components/Provider';
import Switcher from '@/components/@common/Switcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jeremy.dev',
  description: '제레미의 개발이력을 모아놓은 저장소입니다.',
  openGraph: {
    title: 'Jeremy.dev',
    description: '제레미의 개발이력을 모아놓은 저장소입니다.',
    images: ['https://avatars.githubusercontent.com/u/102432453?v=4'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          {children}
          <Switcher />
        </Provider>
      </body>
    </html>
  );
}
