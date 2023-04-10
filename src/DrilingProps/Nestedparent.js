import React from 'react'
import NestedChildOne from './NestedChildOne'

const Nestedparent = () => {
    const test = [
        {name :"ankita", age:25},
        {name :"Shezad", age:26},
        {name :"Shahed", age:24},
        {name :"awaiz", age:28}
    ]
    
  return (
    <div>
      Nestedparent
        {test.map((item)=>{
            return <li>{item.name}</li>
        })}
          <NestedChildOne  one={test}/>

    </div>
  )
}

export default Nestedparent