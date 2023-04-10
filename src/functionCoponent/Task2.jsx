import React, { useState } from "react";

const Task2 = () =>{
    const [count,setCount] = useState(0)
    const [discount,SetDiscount] = useState(" ")

const handleClick = () =>{
    if(count < 20)
    setCount(count + 1)
    SetDiscount("Increase")
}
const handleClick1 = () =>{
    if(count > 20)
    setCount(count-1)
    SetDiscount("Decrease")
}
return(
    <div>
        <h1>Counter : {count}</h1>
        <h1>Intialize : {discount}</h1>
        <button onClick={()=> handleClick()}>Additin(+)</button>  &nbsp;
        <button onClick={()=> handleClick1()}>Subtraction(-)</button>
    </div>
)
}
export default Task2;