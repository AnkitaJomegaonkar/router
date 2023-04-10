import React from 'react'
import Child4 from './Child4'

const Child3 = (prop) => {
    const {propName3}=prop
  return (
    <div>
        Child3 Component........!
        {propName3.map((item) =>{
            return <li>{item.name}</li>
        })}
        <Child4 propName4={propName3}/>
      
    </div>
  )
}

export default Child3
