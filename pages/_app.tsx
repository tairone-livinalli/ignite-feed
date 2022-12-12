import '../styles/globals.ts';
import type { AppProps } from 'next/app';
import { Roboto_Slab } from '@next/font/google';

const robotoSlab = Roboto_Slab();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${robotoSlab.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
