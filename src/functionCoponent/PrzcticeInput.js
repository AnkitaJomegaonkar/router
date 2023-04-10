import React, { useState } from "react";

const PrzcticeInput =()=>{
    const [name,setName] = useState('');
    const [middleName,setMiddleNmae] = useState('');
    const [lastName,setLastName] = useState('');

    return(
        <div>
            <label htmlFor="">Name : </label>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <p style={{color:"red"}}>Entered Text: {name}</p>

            <label htmlFor="">Middle Name : </label>
            <input type="text" onChange={(e)=>setMiddleNmae(e.target.value)}/>
            <p style={{color: "yellowgreen"}}>Middle Text : {middleName}</p>

            <label htmlFor="">last Name : </label>
            <input type="text" onChange={(e)=>setLastName(e.target.value)} />
            <p style={{color:'purple'}}>Last Text : {lastName}</p>

        </div>
    )
}
export default PrzcticeInput