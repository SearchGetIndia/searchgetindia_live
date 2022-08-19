import React from 'react'
import Link from 'next/link'

const blogs = (props) => {
    return (
        <>
            <div className="container mx-auto px-4">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2'>Blogs with Strapi</h1>
                        <div className="mb-5 h-1 w-20 bg-indigo-500 rounded"></div>
                        <div className="flex flex-wrap -m-4">
                            {props.blogs.data.map((item) => {
                                return (
                                    <>
                                    <div className="p-4 md:w-1/3">
                                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                           
                                            <div className="p-6">
                                               
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.attributes.title}</h1>
                                                <p className="leading-relaxed mb-3">{item.attributes.description}</p>
                                                <Link href={`/blog/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Know more</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    // let headers = { Authorization: "Bearer 710bc44ddbd99fd572bd22facd8f647a83547b673350d1fc8f449b7840d133d221399adaf9ea97212fe8bd4c80849d44dee5f56334c16b276cac2362169d39f44f63d18f52e6b32f8b15665d6a75db4a2ab122aac57a294ab85837b1a2e705e8c2411af1678e13682e89df15f001b6ceb46691c110e14a990e4b7596b7913766" }
    let a = await fetch("https://searchgetadmin.herokuapp.com/api/blogs?populate=*",)
    let blogs = await a.json()
    return {
        props: { blogs: blogs }, // will be passed to the page component as props
    }
}

export default blogs