import { colors } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ComponentDidMountCopy = () => {
    const [count,setCount] = useState(0);
    const [click,setClick] = useState(false)

    
    

    useEffect(()=>{
        setCount(count+1)
    },[]);    
                       
    // useEffect(()=>{
    //     setCount(count+1)
    // })                       

    useEffect(()=>{
    
        setCount(count+1)
    },[click])                  

    // useEffect(()=>{
    //     setCount(count+1)

    //     const counter = setTimeout(()=>{
    //         setCount(count+1)
    //     }, 1000);

    //     return ()=> clearTimeout(counter)
    // },[click]) ;

  return (
    <div>
      <h1 style={{color:"purple"}}>Counter Value : {count}</h1>

      <button  style={click? {backgroundColor : "green"}:{backgroundColor:"red"}} onClick={()=>setClick(!click)}> Click Here </button>

    </div>
  )
}

export default ComponentDidMountCopy
