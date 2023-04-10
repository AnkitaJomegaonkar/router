import React from 'react'
import NestedChildThree from './NestedChildThree';

const NestedChildTwo = ({two}) => {
    
  return (
    <div>NestedChildTwo
    {two.map((item)=>{
        return <li>{item.age}</li>
    })}

    <NestedChildThree three={two}/>
    </div>
    
  )
}

export default NestedChildTwo