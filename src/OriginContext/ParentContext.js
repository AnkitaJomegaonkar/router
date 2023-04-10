import React,{createContext}from 'react'
import Child1Context from "./Child1Context"

 export const contxtContext = createContext()
 export const InfoContext =createContext()

const ParentContext = () => {
    const contxt =[{name:"Amit",age:35},
                   {name:"Asit",age:37},
                   {name:"Akshay",age:28}]

    const info = "This data will be used in forth component"
  return (
    <div>
        Parennt Context of react....!
        <contxtContext.Provider value={contxt}>
            <InfoContext.Provider value={info}>
            <Child1Context/>
            </InfoContext.Provider>
        </contxtContext.Provider>
    </div>
  )
}

export default ParentContext
