'use client';

import Lenis from 'lenis';

import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

import '@/shared/styles/globals.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dimension, setDimension] = useState<any>(null);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    requestAnimationFrame(raf);
    resize();

    requestAnimationFrame(raf);
  }, []);
  return (
    <html lang="ru">
      <body className={poppins.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
