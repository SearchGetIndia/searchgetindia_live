import Link from 'next/link'
import { BASE_URL } from '../config/configurl';
import React, { useState, useEffect,useLayoutEffect } from 'react';
import swal from 'sweetalert';

function Profile() {
  // usestate declreation
  const [userSet, SetResult] = useState({
    data:{
      attributes:
      {
        Name:'',
      }
    }
  });

  let handleChange=(e)=>{
    console.log("handle chane", e.target.value)

    SetResult({
      ...userSet,
      data:{
        attributes:
        {
          Name:e.target.value,
        }
      }
    });
  }

  // Edit data Here
  const onSubmitData =(e)=> {
    e.preventDefault();

  // api call Data Declration
let data = 
{
  "data": 
  {
    "Name": userSet.data?.attributes?.Name,
  }
}
console.log("live data" , data);

  try {
    fetch(`${BASE_URL}/api/client-all-lists/4?populate=*`, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      
    })
      .then((reponse) => { return reponse.json() })
      .then((resp) => {
        // console.log('store_list->', resp)
        // SetResult(resp.data);
        SetResult(resp);
            swal("good job", "success");
            
      })
      .finally(() => { });
  } catch (error) 
  {
    console.log(error);
  }
  };


  // Display Data  api fetching code
  useLayoutEffect(() => { loadUser(); }, []);
// Display DATA
  const loadUser = (e) => {
    try {
      // fetch(`${BASE_URL}/api/client-all-lists/4?populate=*`,
      fetch(`${BASE_URL}/api/users/5?populate=*`,
        )
        .then((reponse) => { return reponse.json() })
        .then((resp) =>
         {
          console.log('store_list->', resp)
          SetResult(resp);
         
        })
        .finally(() => { });
    } catch (error) 
    {
      console.log(error);
    }

  }
  console.log("current data", userSet);



  return (

    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-4">
            </div>
            <div className="col-lg-8">



              <form onSubmit={(e) => { onSubmitData(e)} }>
                <div className="form-row">

                  <div className="form-group col-md-6">
                    <input 
                    type="text" 
                    className="form-control"
                    name="name"
                    value={userSet.data?.attributes?.Name}
                    onChange={(e)=>{handleChange(e)} }
                      />


                    <input 
                    type="text" 
                    className="form-control"
                    name="name"
                    value={userSet.data?.attributes?.Local_Addrees}
                    onChange={(e)=>{handleChange(e)} }
                      />

                  <input 
                    type="text" 
                    className="form-control"
                    name="name"
                    value={userSet.data?.attributes?.location?.data?.attributes?.SUB_DISTRICT_NAME}
                    onChange={(e)=>{handleChange(e)} }
                      />
                  </div>
                
                  <input type="submit" className="btn btn-primary" />
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <hr />


      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <>
              <div className="col-md-12 brdinner">
                <div className="m-4">
                  <div className="card11">

                    <div className="row">
                      <div className="col-sm-3">
                        <img src="https://png.pngtree.com/png-vector/20200614/ourmid/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg" className="card-img-top h-100" alt="..." />
                      </div>
                      <div className="col-sm-9">
                        <div className="BusinessName">Location</div>

                        <div className="card-body">
                          <h6 className="card-title">User Name</h6>
                          <a href="" className="btn btn-primary stretched-link"><i className="fa fa-phone" aria-hidden="true">Phone</i></a>

                          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="">
                            Show Number
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>



          </div>
        </div>
      </div>


    </>







  )
}
export default Profile;