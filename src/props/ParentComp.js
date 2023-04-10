import React, { useState } from 'react'
import OneComp from './OneComp'
import ThirdComp from './ThirdComp'
import TwoComp from './TwoComp'

const ParentComp = () => {
    const [text,setText] =useState("")
    const helper ="Only Strings are Here"
    
  return (
    <div>
        <h1>ParentComp</h1>
           <input type="text" onChange={(e)=>setText(e.target.value)}/>

           <h5>Parents props : {text}</h5>

           <p style={{color:"red"}}>{helper}</p>


        <OneComp  text={text}  help={helper}/>
        <TwoComp text={text}  help={helper}/>
        <ThirdComp  text={text}  help={helper}/>
    </div>
  )
}

export default ParentComp