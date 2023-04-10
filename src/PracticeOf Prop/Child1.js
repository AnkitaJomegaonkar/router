import React from 'react'
import Child2 from './Child2'

const Child1 = (prop) => {
  return (
    <div>
        Child1 Component.......!
        {prop.propName.map((item) =>{
            return <li>{item.City}</li>
        })}
        <Child2 propName2={prop.propName} />
      
    </div>
  )
}

export default Child1
