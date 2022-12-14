
import Link from 'next/link'
import Image from 'next/image'
import Head from "next/head";
import React, {useState} from 'react';





const NavBar = () => {

  const [user, Loading] = useState('shirsat');
 
  return (
  <>
 <Head>
        

        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
       
           <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min.js" integrity="sha512-nhY06wKras39lb9lRO76J4397CH1XpRSLfLJSftTeo3+q2vP7PaebILH9TqH+GRpnOhfAGjuYMVmVTOZJ+682w==" crossorigin="anonymous" referrerpolicy="no-referrer" defer></script>
       
           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js" defer></script>
       
           {/* <script type="text/javascript" src="assets/js/custom.js" defer></script> */}
           <script type="text/javascript" src="https://searchgetindia.vercel.app/assets/js/custom.js" defer></script>
       
             </Head>

<div className="navigationBar">
        <div className="container topHeadcontainer">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="navbar-header">
                <div className="navbar-brand">
                  <Link href="/">
                  <a>
                     
                    {/* <Image width={150} height={100} alt="logo" src="assets/images/logo2.png" /> */}
                    <img alt="logo" src="logo2.png" />
                  </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-6">
              <div className="topheaderBlock">
                <div className="menuBlockBarsStrip"></div>
                <div className="menuBlockBarsStrip"></div>
                <div className="menuBlockBarsStrip"></div>
                <a className="topheaderBlockBtns" href="#"><i className="fa fa-facebook"></i></a>
                <a className="topheaderBlockBtns" href="#"><i className="fa fa-instagram"></i></a>
                <a className="topheaderBlockBtns" href="#"><i className="fa fa-linkedin"></i></a>

                <button type="button" data-target="#navbarCollapse" data-toggle="collapse"
                  className="navbar-toggle collapsed" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
            </div>


          </div>
        </div>
        <nav role="navigation" className="navbar-default">
          <div className="container">
            <div id="navbarCollapse" className="navbar-collapse collapse" aria-expanded="false">
              <ul className="nav navbar-nav">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/how-to-work"><a>How To Work</a></Link></li>
                <li><Link href="/blog"><a>Blog</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
                <li><Link href="/upload"><a>upload File</a></Link></li>
                    {/* dashboard page */}
                    <li><Link href="/profilebackup"><a>Profile</a></Link></li>
                     {/* Logout */}
                    <li><Link href="/logout"><a>Logout</a></Link></li>
                
                    <li><Link href="/login"><a>Login</a></Link></li>
                    <li><Link href="/newaccount"><a>Registration</a></Link></li>
              
                {/* <li>{`${user}!`}</li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="space50"></div>

  </>
  )
}

export default NavBar
