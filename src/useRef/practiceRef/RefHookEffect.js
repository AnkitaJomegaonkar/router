import React, {Component, useEffect, useRef, useState } from 'react'

const RefHookEffect = () => {
    const [text, setText] = useState('')
    const input3 = useRef('')
    
    useEffect(()=>{
        input3.current.focus()
    },[]);

  return (
    <div>
        <h2>RefHookEffect  : {text}</h2>
        <input type="text" placeholder='First' onChange={(e)=>setText(e.target.value)} /> &nbsp;
        <input type="text" placeholder='Second' ref={input3} /> &nbsp;
        <input type="text" placeholder='Third' />
    </div>


  )
}

export default RefHookEffect