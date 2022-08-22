
import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import axios from 'axios';
import { BASE_URL } from '../config/configurl';
import swal from 'sweetalert';


const Login = () => {
    //1. State and hook variable
    const [identifier ,setIdentifier] = useState('');
    const [password ,setPassword] = useState('');

    // login variable
    const [user , setUser] =useState({
        user:null,
        is_loggedin:false

    });

    const { push } = useRouter();


    //2. function defination
let loginData = () =>
{
  

    // Request API.
axios.post(`${BASE_URL}/api/auth/local`, {
  identifier: identifier,
  password: password,
})
.then((response) => {
  // Handle success.
  console.log('Well done!');
 
localStorage.setItem('token',response.data.jwt);
localStorage.setItem('UserInfo',JSON.stringify(response.data.user));

//   swal("Well done!", JSON.stringify(response.data.user), "success");
  swal("Well done!", "Login Succefully", "success");

  setUser({
    ...user,
    is_loggedin:true
});
  console.log('User profile', response.data.user);
  console.log('User token', response.data.jwt);
//   setTimeout(()=>push('/dashboard'),3000) ;
//   setTimeout(() => history.push('/'), 3000);
})
.catch((error) => {
  // Handle error.
  console.log('An error occurred:', error.response);
  swal("OOpss!","Invalid Request", "error");
});

}

 
// returen statemnt  
    return (
        <>
            

            <h1><center>Login page Design</center></h1>


            <div className="container">

                <section className="vh-100">
                    <div className="container h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="assets/images/logo2.png"
                                    className="img-fluid" alt="Sample image" />
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form>
                                    <div className="lead fw-normal mb-0 me-3">
                                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email" 
                                               name="identifier"
                                               value={identifier}
                                               onChange ={(e)=>{setIdentifier(e.target.value)}}
                                            className="form-control form-control-lg"
                                            placeholder="Enter a valid email address" />
                                        <label className="form-label">Email address</label>
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input type="password"
                                               name="password"
                                               value={password}
                                               onChange ={(e)=>{setPassword(e.target.value)}}
                                               className="form-control form-control-lg"
                                            placeholder="Enter password" />
                                        <label className="form-label">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">

                                       
                                        <a href="" className="text-body">Forgot password?</a>
                                    </div>

                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button type="button" className="btn btn-primary btn-lg" onClick={()=>{loginData()}}>
                                        Login
                                        </button>
                                        {/* <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                            className="link-danger">Register</a></p> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


             <>
             {user.is_loggedin &&
             <h3 className> hiiiii {user}</h3>
             }
             </>




            {/* footer include here */}
        
        </>
    )
}

export default Login
