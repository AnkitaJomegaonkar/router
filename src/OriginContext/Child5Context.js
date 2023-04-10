import React ,{useContext}from 'react'
import { contxtContext } from './ParentContext';

const Child5Context = () => {
    const studData= useContext(contxtContext);

  return (
    <div>Child5Context
        {studData.map((item) =>{
            return(
                <>
                <li>Name : {item.name}</li>
                <li>Age : {item.age}</li>
                </>
            )
        })}
    </div>
  )
}

export default Child5Context