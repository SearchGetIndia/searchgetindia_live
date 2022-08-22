
import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'

import swal from 'sweetalert';
import { BASE_URL } from '../config/configurl';


const Ragistration = () => {

  // 1. hook /State variable
const [username , setUsername] = useState('');
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');

// 2. function defination
let submitData =()=>{



  let data = {username,email,password};
  // promise chain
  fetch(`${BASE_URL}/api/auth/local/register`,{
    method: 'POST',
    headers: {'Content-type' : 'application/json'},
    body:JSON.stringify(data)
  }).then((response)=>{
    // make our data redeble
    return response.json();

  }).then((response)=>{
    // console.log(response);
    if(response.error){
      swal("OOpps!", response.error.message , "error");
    }
    if(response.user){
      swal("good job", "success");
    }
  }).catch((e)=>{
  console.log(e)
  });
}

  return (
    <>
  
    <h1>new account</h1>

<div className="container">
<section className="vh-100">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">

                      <input className="form-control" 
                              type="text" 
                              name="username"
                              value={username}
                              onChange ={(e)=>{setUsername(e.target.value)}}
                             />
                           <label className="form-label">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" 
                             className="form-control" 
                             name="email"
                             value={email}
                             onChange ={(e)=>{setEmail(e.target.value)}}
                            />
                      <label className="form-label">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password"
                              className="form-control" 
                              name="password"
                              value={password}
                              onChange ={(e)=>{setPassword(e.target.value)}}
                              />
                      <label className="form-label">Password</label>
                    </div>
                  </div>

                
                
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button"  className="btn btn-primary btn-lg" onClick={()=>{submitData()}}>
                    Register</button>
                  </div>
                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>


    
    
      </>
  )
}

export default Ragistration;
