import React from 'react'
import Child3 from './Child3'

const Child2 = ({propName2}) => {
  return (
    <div>
      Child2 component........!
      {propName2.map((item) =>{
        return <li>{item.Age}</li>
      })}
      <Child3 propName3={propName2}/>
    </div>
  )
}

export default Child2
