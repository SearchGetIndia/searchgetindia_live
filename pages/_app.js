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

    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="assets/font-awesome/css/font-awesome.min.css" />

    <script type="text/javascript" src="assets/js/jquery.min.js" defer ></script>
    <script type="text/javascript" src="assets/js/bootstrap.min.js" defer ></script>
    <script type="text/javascript" src="assets/js/custom.js" defer></script>

      </Head>

      <Component {...pageProps} />
      <FooterBar />
    </>
  );
}

export default MyApp