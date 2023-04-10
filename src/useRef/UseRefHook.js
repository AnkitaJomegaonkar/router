import React, { Component, useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [input1, setInput1] = useState("")
    const input2 = useRef('') 

    useEffect(() =>{
      input2.current.focus()
    },[]);

  return (
    <div> <h1>UseRefHook</h1> 
     
     <input type="text" placeholder='First' onChange={(e)=> setInput1(e.target.value)}/> &nbsp;
     <input type="text" placeholder='Second' ref={input2}/> &nbsp;
     <input type="text" placeholder='Third'/>

    </div>
  )
}

export default UseRefHook