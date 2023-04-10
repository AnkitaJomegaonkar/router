import React, { useState } from "react";

const imageOn= `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fobject-bulb-off-vector-1858972&psig=AOvVaw02TKVXXh2Dj6xnrp6f99Io&ust=1678988978878000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICd1c2_3v0CFQAAAAAdAAAAABAJ`
const imageOff=`https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2Flight-bulb-on-off-png-PNG-free-PNG-Images_130593&psig=AOvVaw02TKVXXh2Dj6xnrp6f99Io&ust=1678988978878000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICd1c2_3v0CFQAAAAAdAAAAABA6`

const Task1  = () =>{
    const [show,setShow] = useState(false);
    return(
    <div>
         <img src={show ? imageOn : imageOff} height="300px" width="200px"  /> <br />

         <button style={show ? {backgroundColor : "green"} : {backgroundColor : "red"}} onClick={()=>setShow(!show)} 
         
         >{show ? "ON" : "OFF"}</button>

    </div>
    )
}

export default Task1