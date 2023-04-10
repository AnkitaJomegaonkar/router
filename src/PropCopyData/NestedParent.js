import React from 'react'
import NestedChildOne from './NestedChildOne'

const NestedParent = () => {
    const test = [
        {name:"Ankita",age:21},
        {name:"Shahzad",age:21},
        {name:"Awais",age:21},
        {name:"Abdullah",age:21}
    ]
  return (
    <div>
        NestedParent
        {test.map((item)=>{
            return <li>{item.name}</li>
        })}
        <NestedChildOne test={test}/>
    </div>
  )
}

export default NestedParent