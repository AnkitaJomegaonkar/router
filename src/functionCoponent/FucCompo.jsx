import React,{useState} from "react";
 
export const FucCompo = () => {
    const initial = "Hello"
    const [text, setText] = useState(initial);
    const [data,setData] = useState("state2")
    const handleClick =()=>{
        setText("change State")
        setData("change state 2")
    }
    return(
        <div>
            <h1>Hello This is My React Function</h1>
            <h3>state is {text}</h3>
            <h3>state is {data}</h3>
            <button onClick={() => handleClick()}>Click</button>
            
        </div>
    )
}

