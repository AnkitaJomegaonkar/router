import React from 'react'
import NestedChildfour from './NestedChildfour'

const NestedChildThree = (props) => {
  const {list} = props;
  return (
    <div>NestedChildThree
      {list.map((elem)=>{
        return <li>{elem.name}</li>
      })}
      <NestedChildfour list={list}/>
    </div>
  )
}

export default NestedChildThree