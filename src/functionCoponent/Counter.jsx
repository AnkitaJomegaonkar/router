import React, { useState } from "react";

export const Counter = () => {
    const [count, setCount] =useState(0);
    const [iden ,setIden] = useState("InitialValue")
    const [color,setColor] = useState("blue")

    const handleIncre = () =>{
        if(count < 20)
        setCount(count+1)
        setIden("Increase Count")
        setColor("green")
    }

    const handleDecre = () =>{
        if (count > 20)
        setCount(count-1)
        setIden("Decrease Count")
        setColor("red")
    }
    
    return(
        <div>
            <h1 style={{backgroundColor :color}}>COUNTER :{count}</h1>
            <h1>Indentifire : {iden}</h1>
            <button onClick={() => handleIncre()}>Increase(+)</button>  &nbsp;
            <button onClick={() => handleDecre()}>Decrease(-)</button>
        </div>
    )
}