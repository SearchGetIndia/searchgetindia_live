
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';

import { BASE_URL } from '../../config/configurl';
import result from '../../List_Data/result.json'


export async function getServerSideProps(context) {
    // let headers = { Authorization: "Bearer 710bc44ddbd99fd572bd22facd8f647a83547b673350d1fc8f449b7840d133d221399adaf9ea97212fe8bd4c80849d44dee5f56334c16b276cac2362169d39f44f63d18f52e6b32f8b15665d6a75db4a2ab122aac57a294ab85837b1a2e705e8c2411af1678e13682e89df15f001b6ceb46691c110e14a990e4b7596b7913766" }
    let a = await fetch(`${BASE_URL}/api/searches?filters[slug]=` + context.query.slug + "&populate=*",)
    let search_result = await a.json()
    return {
        props: { search_data: search_result.data[0] }, // will be passed to the page component as props
    }

  
}

const Slug = ({search_data}) =>
 {
    const router = useRouter()
    const { Slug } = router.query;


   // useState & Variable Declration;
   const [useResult, SetResult] = useState([]);

   const [getData, setData] = useState(result);

   const [getState, setState] = useState([]);
   const [getDistrict, setDistrict] = useState([]);
   const [getArea, setArea] = useState([]);


   // use only value of data
   const [StateTerm , setStateTerm] = useState('');
   const [DistrictTerm , setDistrictTerm] = useState('');
   const [SubDistrictTerm , setSubDistrictTerm] = useState('');
   const [AreaTerm , setAreaTerm] = useState('');


   //   api fetching code
   useEffect(() => {

       try {
           fetch(`${BASE_URL}/api/client-all-lists?populate=*`,)
               .then((reponse) => reponse.json())
               .then((resp) => {
                //    console.log('store_list->', resp)
                 SetResult(resp.data);

               })
               .finally(() => { });
       } catch (error) {

       }

   }, []);


   const StateValue = [...new Set(getData.results.map(item => item.SNE))];
   StateValue.sort();
  
   // console.log("State_Name_Data  after->", StateValue)


   const handleStateData = (e) => {

       const State_Curnt_Value = e.target.value;
       setStateTerm(State_Curnt_Value);

       let states = getData.results.filter(states => states.SNE === e.target.value);
    //    console.log("states after-->", states);
       states = [...new Set(states.map(item_1 => item_1.DNE))];
       states.sort();
       setState(states);
   }

   const handleDistrict = (e) => {

       const District_Curnt_Value = e.target.value;
       setDistrictTerm(District_Curnt_Value);

       
       let districtName = getData.results.filter(city => city.DNE === e.target.value);
       districtName = [...new Set(districtName.map(item_2 => item_2.S_DN))];
       districtName.sort();
    //    console.log("cities after->", districtName);
       setDistrict(districtName);

   }

   const handleSubDistrict = (e) => {
       const Sub_District_Curnt_Value = e.target.value;
       setSubDistrictTerm(Sub_District_Curnt_Value);

       let area = getData.results.filter(area => area.S_DN === e.target.value);
       area = [...new Set(area.map(item_3 => item_3.ANE))];
       area.sort();
    //    console.log("area after->", area);
       setArea(area)
   }

   const handleAreaName= (e) => {
       const AreaName_Curnt_Value = e.target.value;
       setAreaTerm(AreaName_Curnt_Value);
   }







    
    return (
      
        <>
            

        <div className="container">
            <div className="row">
                <div className="col-lg-12">


                    <form>
                        <div className="messages"></div>
                        <div className="controls">
                            <div className="row">

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Select STATE NAME*</label>
                                        <select className="form-control-1" onChange={(e) =>{handleStateData(e) }}>
                                            <option selected>Select STATE NAME</option>
                                            {StateValue.map((items1)=>
                                            <option key={items1} value={items1}>{items1}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Select DISTRICT NAME*</label>
                                        <select className="form-control-1" onChange={(e) => handleDistrict(e) }>
                                            <option selected>Select STATE NAME</option>
                                            { getState.map(items2 => <option key={items2} value={items2}>{items2}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Select SUB-DISTRICT NAME *</label>
                                        <select className="form-control-1" onChange={(e) => handleSubDistrict(e)} >
                                            <option selected>Select STATE NAME</option>
                                            {getDistrict.map(items3 =><option key={items3} value={items3}>{items3}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <div className="form-group">
                                        <label>Select Area Name*</label>
                                        <select className="form-control-1"   onChange={(e) => handleAreaName(e)}>
                                            <option selected>Select STATE NAME</option>
                                            {getArea.map(items4 => 
                                            <option key={items4} value={items4}>{items4}</option>)}
                                        </select>
                                    </div>
                                </div> 

                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>
        <br />

        {/* <!-- card Design --> */}

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">

                    <h3>Name:  {search_data.attributes.title},{StateTerm},{DistrictTerm},{SubDistrictTerm},{AreaTerm}</h3>

                    {/* {console.log("use_list", useResult)} */}

                    {

                        useResult.filter((ByResult) => 
                        {

                            if (ByResult) {
                                return (
                                    (ByResult.attributes?.location.data?.attributes.Service_Name == search_data.attributes.title)
                                    && (ByResult.attributes?.location.data?.attributes.STATE_NAME == StateTerm)
                                    && (ByResult.attributes?.location.data?.attributes.DISTRICT_NAME == DistrictTerm)
                                    || (ByResult.attributes?.location.data?.attributes.SUB_DISTRICT_NAME == SubDistrictTerm)
                                    || (ByResult.attributes?.location.data?.attributes.Area_Name == AreaTerm)
                                );

                            }

                        }).map((val, index) => {

                            return (
                                <div key={index}>
                                    <div className="col-md-6 brd">
                                        <div className="m-4">
                                            <div className="card11">
                                                <div className="location">

                                                    <h4>
                                                        {val.attributes?.location?.data?.attributes?.STATE_NAME}
                                                        {" "}/ {val.attributes?.location.data?.attributes?.DISTRICT_NAME}
                                                        {" "}/ {val.attributes?.location.data?.attributes?.SUB_DISTRICT_NAME}
                                                        {" "}/ {val.attributes?.location.data?.attributes?.Area_Name}
                                                    </h4>
                                                    
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <img src={`${BASE_URL}` + val.attributes?.Profile_imgs.data?.attributes?.url} className="card-img-top h-100" alt="..." />
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <div className="BusinessName">{val.attributes?.Service_Name}</div>

                                                        <div className="card-body">
                                                            <h6 className="card-title">{val.attributes?.Name}</h6>
                                                            <a href={'tel:' + val.attributes?.Mobile_No} className="btn btn-primary stretched-link"><i className="fa fa-phone" aria-hidden="true">Phone</i></a>

                                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={`#` + val.id}>
                                                                Show Number
                                                            </button>
                                                            <div className="modal fade" id={val.id} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                <div className="modal-dialog" role="document">
                                                                    <div className="modal-content">
                                                                        <div className="modal-header">
                                                                            <h5 className="modal-title" id="exampleModalLabel">{val.attributes?.Name}</h5>
                                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                            </button>
                                                                        </div>
                                                                        <div className="modal-body">
                                                                            {val.attributes?.Mobile_No}
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })





                    }


                </div>
            </div>
        </div>



        {/* footer include here */}
       


    </>

    )
}



export default Slug