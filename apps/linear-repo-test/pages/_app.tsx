import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Header from '../components/header';
import Footer from '../components/footer';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to linear-repo-test!</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height,initial-scale=1"
        ></meta>
      </Head>
      <Header />
      <main className="pt-[var(--navigation-height)]">
        <Component />
      </main>
      <Footer />
    </>
  );
}

export default CustomApp;
