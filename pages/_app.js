import '../styles/globals.css';

import FooterBar from '../Layout/FooterBar';
import NavBar from '../Layout/NavBar';

function MyApp({ Component, pageProps }) 
{
  
  return (
    <>
      <NavBar />
      

      <Component {...pageProps} />
      <FooterBar />
    </>
  );
}

export default MyApp