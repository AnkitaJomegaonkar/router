import React, { useState } from 'react'

const ReDo = () => {
    const [count , setCount] = useState("0")
    const [iden , setIden] = useState("Initial")
    const [color , setColor] = useState("purple")

    const handlePress=()=>{
        if(count < 30)
        setCount(count+1)
        setIden("Increment")
        setColor("green")
    }
    const handlePress1=()=>{
        if(count > 30 )
        setCount(count-1)
        setIden("Decrement")
        setColor("red")
    }
  return (
    <div>
      <h2 style={{backgroundColor:color}}>Counter : {count}</h2>

      <h2>Indentifire : {iden}</h2>

      <button onClick={()=>handlePress()}> Addition(+) </button>  &nbsp;
      <button onClick={()=>handlePress1()}> Subtracion(-) </button>

    </div>
  )
}

export default ReDo
