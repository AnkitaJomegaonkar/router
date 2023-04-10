import React, { useState } from "react";

const InputComp = () =>{
    const [text,setText] = useState("")
    const [name,setName] = useState("")
    const [city,setCity] = useState("")
    return(
        <div>
            <label htmlFor="">Name : </label>
            <input type={"text"} onChange={(e)=> setText(e.target.value)}/>
            <p>Text Entered : {text}</p>

            <label htmlFor="">Last Name : </label>
            <input type={"name"} onChange={(e)=> setName(e.target.value)}/>
            <p>Entered L.Name : {name}</p>

            <label htmlFor="">City Name : </label>
            <input type={"city"} onChange={(e)=> setCity(e.target.value)}/>
            <p>Entered City : {city}</p>
        </div>
    )
}

export default InputComp;