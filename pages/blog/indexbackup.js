import React from 'react'
import Link from 'next/link'

const index = (props) => {
    return (

        <>
     <div className="container">
        <div className="row">
          <div className="col-lg-12">
              {
                 props.blogs_data.data.map((item) =>
                   {
                   return(
        <div key={index}>

          <div className="col-md-12 brd">
              <div className="m-4">
                <div className="card11">
                  <div className="row">
                    <div className="col-sm-5">
                     
                    
                   
                    </div>
                    <div className="col-sm-7">
                      <div className="BusinessNamelist">{item.attributes.title}</div>
                      <div className="card-body">
                        <p>{item.attributes.description}</p>
                        {/* <p>{console.log(item.attributes.image.data.attributes.name)}</p> */}
                         {/* <a onClick={()=> sendPropts()} className="btn btn-primary">Find Location <i className="fa fa-map-marker"></i></a> */}
                         <Link href={`/blog/${item.attributes.slug}`}><a className="btn btn-primary">Know More</a></Link>

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












        </>
    )
}

export async function getServerSideProps(context) {
    // let headers = { Authorization: "Bearer 710bc44ddbd99fd572bd22facd8f647a83547b673350d1fc8f449b7840d133d221399adaf9ea97212fe8bd4c80849d44dee5f56334c16b276cac2362169d39f44f63d18f52e6b32f8b15665d6a75db4a2ab122aac57a294ab85837b1a2e705e8c2411af1678e13682e89df15f001b6ceb46691c110e14a990e4b7596b7913766" }
    let a = await fetch("https://searchgetadmin.herokuapp.com/api/blogs?populate=*",)
    let blg_var = await a.json()
    return {
        props: { blogs_data: blg_var }, // will be passed to the page component as props
    }
}

export default index