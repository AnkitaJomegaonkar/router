import React from 'react'
import NestedChildTwo from './NestedChildTwo'

const NestedChildOne = (props) => {
  return (
    <div>NestedChildOne 
        {props.one.map((item)=>{
            return <li>{item.name}</li>
        })}

        <NestedChildTwo two={props.one}/>
    </div>
  )
}

export default NestedChildOne