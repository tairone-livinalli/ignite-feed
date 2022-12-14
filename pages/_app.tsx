import type { AppProps } from 'next/app';
import { Roboto_Slab } from '@next/font/google';
import Head from 'next/head';

import Navbar from '../components/navbar/navbarComponent';
import Footer from '../components/footer/footerComponent';
import BottomNavbar from '../components/navbar/bottomNavbarComponent';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${robotoSlab.style.fontFamily};
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          outline: 0;
        }
        body {
          background: #121214;
          color: #fff;
          -webkit-font-smoothing: antialiased;
        }
        body,
        input,
        button {
          font-family: 'Roboto Slab', serif;
          font-size: 16px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        strong {
          font-weight: 500;
        }
        button {
          cursor: pointer;
        }
      `}</style>
      <Head>
        <title>TaiMedia</title>
        <meta
          name="description"
          content="Kind of a social media to play around"
        />
        <link rel="icon" href="/icon.svg" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <BottomNavbar />
    </>
  );
}
