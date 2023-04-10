import React from 'react'

const TwoComp = ({text,help}) => {
  return (
    <div>TwoComp
        <h5>Second Props: {text}</h5>
        <p style={{color:"red"}}>{help}</p>
    </div>
  )
}

export default TwoComp