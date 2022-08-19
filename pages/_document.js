import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document({title,keywords, Description, children}) {
  return (
    <Html>

    <Head>
    
    <meta charset="utf-8" />
    {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    <meta name="description" content={Description}/>
    <meta name="keywords" content={keywords}/>

  

{/*     
    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon" />
  
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css" />
    
  
    <link rel="stylesheet" type="text/css" href="assets/font-awesome/css/font-awesome.min.css" />
   */}
 

      </Head>

      <body>
        <Main />
        <NextScript />
        <a href="#" className="scroll-to-top"><i className="fa fa-angle-up"></i></a>
    {/* <script type="text/javascript" src="assets/js/jquery.min.js" defer ></script>
    <script type="text/javascript" src="assets/js/bootstrap.min.js" defer ></script>
    <script type="text/javascript" src="assets/js/custom.js" defer></script> */}
    
    {/* <!-- custom JS --> */}
    
   

      </body>
      
    </Html>
  )
}

 Document.defaultProps = {
   title : "SearchGetIndia",
   Description : "NA",
   keywords : "SearchGetIndia"
 }