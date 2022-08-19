import '../styles/globals.css';
import Head from "next/head";
import FooterBar from '../Layout/FooterBar';
import NavBar from '../Layout/NavBar';

function MyApp({ Component, pageProps }) 
{
  
  return (
    <>
      <NavBar />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
      <FooterBar />
    </>
  );
}

export default MyApp