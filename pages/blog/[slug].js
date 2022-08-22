import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Slug = ({blog_data}) => 
{
    const router = useRouter()
    
    const { Slug } = router.query
    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                       
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{blog_data.attributes.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium my-2">{blog_data.attributes.title}</h1>                            
                            <p className="leading-relaxed">{blog_data.attributes.descriptionLong}</p>                            
                            <div className="flex">                                                                
                                <Link href="/blog"><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Back to blogs</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export async function getServerSideProps(context) {
    // let headers = { Authorization: "Bearer 710bc44ddbd99fd572bd22facd8f647a83547b673350d1fc8f449b7840d133d221399adaf9ea97212fe8bd4c80849d44dee5f56334c16b276cac2362169d39f44f63d18f52e6b32f8b15665d6a75db4a2ab122aac57a294ab85837b1a2e705e8c2411af1678e13682e89df15f001b6ceb46691c110e14a990e4b7596b7913766" }
    let a = await fetch("https://searchgetadmin.herokuapp.com/api/blogs?filters[slug]=" + context.query.slug + "&populate=*",)
    let blog_val = await a.json()
    return {
        props: { blog_data: blog_val.data[0] }, // will be passed to the page component as props
    }
}

export default Slug