import React from 'react'

const NestedChildfour = (props) => {
  const {list} = props
  return (
    <div>NestedChildfour
      {list.map((elem)=>{
        return <li>{elem.age}</li>
      })}
    </div>
  )
}

export default NestedChildfour