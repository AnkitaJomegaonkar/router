import React, { useState } from "react";

const PracticeState =()=>{
    const rec = "My Name Is Queen"
    const [first,setFirst] = useState(rec)
    const [second,setSecond] = useState("JK.Ankita")

    const handleClick=() =>{
        setFirst('Kishanrao Jomegaonkar')
    }

    const handleClick1=()=>{
        setSecond('Manasi Jomegaonkar')
    }

    return(
        <div>
             <h2>This is State parctice</h2>
            <p>First State : {first}</p>
            <button style={{color:'purple'}} onClick={() =>handleClick()}>Click Here</button>


            <p>Second State : {second}</p>
            <button style={{color:'red'}} onClick={() =>handleClick1()}>Click Here</button>



        </div>
    )
}
export default PracticeState