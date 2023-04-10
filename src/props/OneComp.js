import React from 'react'

const OneComp = (props) => {
  return (
    <div>OneComp
      <h5>First props : {props.text}</h5>
      <p style={{color:"red"}}>{props.help}....!</p>
    </div>
  )
}

export default OneComp