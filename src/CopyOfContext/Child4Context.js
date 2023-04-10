import React,{useContext} from 'react'
import Child5 from './Child5'
import {InfoContext} from "./Parent"

const Child4 = () => {
  const infoData = useContext(InfoContext);
  return (
    <div>Child4
      <p>Information: {infoData}</p>
        <Child5/>
    </div>
  )
}

export default Child4