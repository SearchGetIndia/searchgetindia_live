import React from 'react'

export default function Test() 
{
    
    let sagar=(props)=>{
        return <h2>I am a { props.brand }!</h2>;

       console.log(props.brand);
    }
    
    
    return (
        <div>
            <h2>Welcome To Page</h2>
            <sagar brand="Ford" />
        </div>
    )
}


