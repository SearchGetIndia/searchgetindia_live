import Link from 'next/link'
import { BASE_URL } from '../config/configurl';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Profile() {
  // usestate declreation
  const [userSet, SetResult] = useState({
    About_info: "",
    Local_Addrees: "",
    Mobile_No: "",
    Name: "sagar",
    Service_Name: "",
    STATE_NAME: "",
    DISTRICT_NAME: "",
    SUB_DISTRICT_NAME: "",
    Area_Name: "",
    username: "",
    email: "",
  });

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`${BASE_URL}/api/client-all-lists/2?populate=*`, user);

  };

  //   api fetching code
  useEffect(() => { loadUser(); }, []);


  const loadUser = (e) => {

    try {
      fetch(`${BASE_URL}/api/client-all-lists/6?populate=*`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then((reponse) => { return reponse.json() })
        .then((resp) => {
          // console.log('store_list->', resp)
          SetResult(resp.data);

        })
        .finally(() => { });
    } catch (error) {
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
              <form onSubmit={e => onSubmit(e)}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control"
                      />
                  </div>


                  <div className="form-group col-md-6">
                    <input type="email" className="form-control" 
                     />
                  </div>

                  <div className="form-group col-md-12">
                    <input type="text"
                      name="Name"
                      value={"sagar"}
                      onChange={e => onInputChange(e)}
                      className="form-control" />
                  </div>


                  <div className="form-group col-md-6">
                    <input type="text"
                    className="form-control" 
                       />

                  </div>
                  <div className="form-group col-md-6">
                    <input type="text"
                      className="form-control"  />
                  </div>

                  <div className="form-group col-md-6">
                    <input type="text" 
                    className="form-control"  />
                  </div>

                  <div className="form-group col-md-6">
                    <input type="text" 
                    className="form-control"  />
                  </div>

                  <div className="form-group col-md-6">
                    <input type="text" 
                    className="form-control" />
                  </div>

                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group col-md-12">
                    <div className="form-group">

                      <textarea className="form-control" placeholder="location "></textarea>
                    </div>

                  </div>


                  <button type="button" className="btn btn-primary" onClick={(e) => { loadUser() }} >Update</button>

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