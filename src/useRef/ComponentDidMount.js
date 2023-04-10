import { colors } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ComponentDidMount = () => {
    const [count,setCount] = useState(0);
    const [click,setClick] = useState(false)

    const getData= ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>console.log(res.data))
    };

    useEffect(()=>{
        setCount(count+1)
    },[]);                       //compoonentDidMount

    // useEffect(()=>{
    //     setCount(count+1)
    // })                       //unconditionally(updat)

    useEffect(()=>{
        getData()
        setCount(count+1)
    },[click])                  //conditionally(update)

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

export default ComponentDidMount
