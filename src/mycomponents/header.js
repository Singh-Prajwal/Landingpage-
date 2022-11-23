import React from 'react'
import Logo from '../images/Logo.svg'

export default function header() {
    let headerstyle={
        width:"100vw"
    }
  return (
    <div>
        <header>
         <img src={Logo} style={headerstyle}></img> 
        </header>
    </div>
  )
}
