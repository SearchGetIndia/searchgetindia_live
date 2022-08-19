
import Link from 'next/link'
import Image from 'next/image'
import React, {useState} from 'react';
const NavBar = () => {

  const [user, Loading] = useState('shirsat');


  return (
  <>

<div className="navigationBar">
        <div className="container topHeadcontainer">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="navbar-header">
                <div className="navbar-brand">
                  <Link href="/">
                  <a><Image width={150} height={100} alt="logo" src="assets/images/logo2.png" /></a></Link>
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
                <li><Link href="/blogs"><a>Blogs</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
                <li><Link href="/enquiry"><a>New Enquiry</a></Link></li>
                <li><Link href="/privacy-policy"><a>Privacy & Policy</a></Link></li>
                <li><Link href="/demo"><a>Demo</a></Link></li>

                {
                  !Loading && (user ? (
                    <>
                    {/* dashboard page */}
                    <li><Link href="/dashboard"><a>dashboard</a></Link></li>
                     {/* Logout */}
                    <li><Link href="/logout"><a>Logout</a></Link></li>
                     <li>{`${user}!`}</li>
                    </>
                  ):(
                    ''
                    ))}
                
                     

             
                   <>
                <li><Link href="/login"><a>Login</a></Link></li>
                <li><Link href="/newaccount"><a>Registration</a></Link></li>
                </>
             
              

              
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
