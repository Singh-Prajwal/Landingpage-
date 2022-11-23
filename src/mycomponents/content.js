import React from 'react'
import il1 from '../images/Illustration 1.svg'
import il5 from '../images/Illustration1-5.svg'
import il6 from '../images/Illustration1-6.svg'
import il2 from '../images/Illustration 2.svg'

export default function content() {
    let style={
        width:"100vw",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }
    let planStyle={
        width:"100vw",
        position:"absolute",
        left:"0%"
    }
   
  return (<>
    <div className='First'>
        <img src={il1} style={style}></img>
    </div>
    <div>
        <img src={il5} style={style}></img>
        <img src={il6} style={style}></img>
    </div>
    <div className='Plans global'>
        <img src={il2} style={planStyle}></img>
    </div>
    
    </>
  )
}
