import React from 'react'
import NestedChildThree from './NestedChildThree'

const NestedChildTwo = ({test}) => {
  return (
    <div>NestedChildTwo
       {test.map((item)=>{
            return <li>{item.name}</li>
        })}
      <NestedChildThree list={test}/>
    </div>
  )
}

export default NestedChildTwo