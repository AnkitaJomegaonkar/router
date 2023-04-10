import React from 'react'
import Child1 from './Child1'

const Parents = () => {
    const prop1 = [{name:"Ankita",City:"Nanded",Age:25},
                  {name:"Rani",City:"Banglore",Age:21} ,
                  {name:"Aarti",City:"Pune",Age:30},
                  {name:"Rohinee",City:"Mumbai",Age:22} 
                ]
  return (
    <div>
        Parent Component........!
      {prop1.map((item) =>{
        return <li>{item.name}</li>
      })}
      <Child1 propName={prop1}/>
    </div>
  )
}

export default Parents
