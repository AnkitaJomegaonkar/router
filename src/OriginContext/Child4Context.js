import React,{useContext} from 'react'
import Child5Context from './Child5Context'
import { InfoContext } from './ParentContext'

const Child4Context = () => {
    const infodata = useContext(InfoContext)
  return (
    <div> 
      Child4Context Component
        <p>Information : {infodata}</p>
        <Child5Context/>
    </div>
  )
}

export default Child4Context