import React from 'react'
import il3 from '../images/Illustration 3.svg'

export default function () {
    let style={
        width:"100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        
    }
  return (<>
    <div className='review footer'>
    <img src={il3} style={style}></img>
    </div></>
  )
}
