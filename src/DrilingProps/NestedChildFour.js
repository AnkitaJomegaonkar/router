import React from 'react'

const NestedChildFour = ({four}) => {
  return (
    <div>NestedChildFour
      {four.map((item)=>{
        return <li>{item.age}</li>
    })}
    </div>
  )
}

export default NestedChildFour
