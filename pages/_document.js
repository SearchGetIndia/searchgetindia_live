import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document({title,keywords, Description, children}) {
  return (
    <Html>



      <body>
        <Main />
        <NextScript />
        <a href="#" className="scroll-to-top"><i className="fa fa-angle-up"></i></a>
      </body>
      
    </Html>
  )
}

