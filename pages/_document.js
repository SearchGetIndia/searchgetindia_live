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

    

      </Head>

      <body>
        <Main />
        <NextScript />
        <a href="#" className="scroll-to-top"><i className="fa fa-angle-up"></i></a>
      </body>
      
    </Html>
  )
}

