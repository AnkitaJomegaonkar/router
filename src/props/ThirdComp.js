import React from 'react'

const ThirdComp = (props) => {
    const {text,help} = props;
  return (
    <div>ThirdComp
        <h5>Third props :{text}</h5>
        <p style={{color:"red"}}>{help}......!</p>
    </div>
  )
}

export default ThirdComp