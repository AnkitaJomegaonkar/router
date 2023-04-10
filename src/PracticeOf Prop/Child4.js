import React from 'react'

const Child4 = (prop) => {
    const{propName4} = prop;
  return (
    <div>Child4 Component.......!
        {propName4.map((ele) => {
            return <li>{ele.City}</li>
        })}
    </div>
  )
}

export default Child4