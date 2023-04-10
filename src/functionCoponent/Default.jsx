import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Default = () => {
    const [count, setCount] = useState(0)

    const handlInce= () =>{
        count>20 ? setCount(count*2) : setCount(count+1)
    }

    const handDecre=()=>{
        setCount(count-1)
    }
  return (
    
    <div>
      <Typography variant="h3">Counter : {count}</Typography>
      <Button variant="contained" color="success" onClick={handlInce}>Increment</Button>  &nbsp;
      <Button variant="contained" color="error" onClick={handDecre}disabled={count==0}> Decrement</Button>
    </div>
    
    
  )
}

export default Default

