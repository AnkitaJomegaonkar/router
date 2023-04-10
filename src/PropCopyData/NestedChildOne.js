import React from 'react'
import NestedChildTwo from './NestedChildTwo'

const NestedChildOne = (props) => {
  return (
    <div>NestedChildOne
      {props.test.map((item)=>{
        return <li>{item.name}</li>
      })}
      <NestedChildTwo test={props.test}/>
    </div>
  )
}

export default NestedChildOne