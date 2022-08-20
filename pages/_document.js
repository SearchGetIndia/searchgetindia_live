import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document({title,keywords, Description, children}) {
  return (
    <Html>

    <Head>
    
    <meta charset="utf-8" />
  
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    <meta name="description" content={Description}/>
    <meta name="keywords" content={keywords}/>

    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon" />
 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js" integrity="sha512-nhY06wKras39lb9lRO76J4397CH1XpRSLfLJSftTeo3+q2vP7PaebILH9TqH+GRpnOhfAGjuYMVmVTOZJ+682w==" crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js" defer></script>

    {/* <script type="text/javascript" src="assets/js/custom.js" defer></script> */}
    <script type="text/javascript" src="https://searchgetindia.vercel.app/assets/js/custom.js" defer></script>

      </Head>

      <body>
        <Main />
        <NextScript />
        <a href="#" className="scroll-to-top"><i className="fa fa-angle-up"></i></a>
      </body>
      
    </Html>
  )
}

