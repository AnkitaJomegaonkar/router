import React from 'react'
import NestedChildFour from './NestedChildFour'

const NestedChildThree = (props) => {
  const {three} = props;
  return (
    <div>
      NestedChildThree
      {three.map((item)=>{
        return <li>{item.name}</li>
    })}
    <NestedChildFour four={three}/>
    </div>
  )
}

export default NestedChildThree
