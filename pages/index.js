// export const API_URL = process.env.NEXTJS_PUBLIC_URL || "http://localhost:1337";
import Head from 'next/head'
import Image from 'next/image'

import React, { useState, useEffect  } from 'react';
import Router, { useRouter } from 'next/router';
import { BASE_URL } from '../config/configurl';



export async function getServerSideProps() 
{
  const res = await fetch(`${BASE_URL}/api/servicelists?populate=*`);
  // const res = await fetch('https://searchgetadmin.herokuapp.com/api/servicelists?populate=*');
  // const res = await fetch('http://localhost:1337/api/servicelists');

  const service_list = await res.json()
  return { 
    props: { service:service_list },
  }
}



function Home (props) 
{
  


  const router = useRouter();
  let sendPropts = (servive_name)=>

  {
   
    const service = servive_name;
    Router.push({ pathname: "/demo", query:{ service }})
   }


  return (
    <>

      {/* navbar include here */}
    


      <div className="container">
        <div className="row">
          <div className="col-lg-12">
                   

              {
                   props.service.data.map((item , index)=>
                   {
                   return(
        <div key={index}>

            <div className="col-md-6 brd">
              <div className="m-4">
                <div className="card11">
                  <div className="row">
                    <div className="col-sm-5">
                      {/* movies.movie_poster.url */}
                       <Image width={500} height={500} className="card-img-top h-100" alt="..."  src={item.attributes.image.data && item.attributes.image.data.attributes.name} />

                      {/* <Image src={item.attributes.image.data.attributes.name} width={500} height={500}  className="card-img-top h-100"/> */}
                    
                    <h3>{`${BASE_URL}`+ item.attributes.image.data.attributes.url} </h3>
                    </div>
                    <div className="col-sm-7">
                      <div className="BusinessNamelist">{item.attributes.Service_Name}</div>
                      <div className="card-body">
                        <p>{item.attributes.Service_Desc}</p>
                        {/* <p>{console.log(item.attributes.image.data.attributes.name)}</p> */}
                         {/* <a onClick={()=> sendPropts()} className="btn btn-primary">Find Location <i className="fa fa-map-marker"></i></a> */}

                         <a onClick={(e)=>{sendPropts(item.attributes.Service_Name)}}
 
                          className="btn btn-primary">Find Location <i className="fa fa-map-marker"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
               </div>
            </div>
            
        </div>

           )
          }
        )
        }



          

              

          </div>
        </div>
      </div>

      {/* footer include here */}
    
    </>
  )
}
export default Home;