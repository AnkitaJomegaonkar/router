import React from 'react'
import Child2Context from './Child2Context'

const Child1Context = () => {
  return (
    <div>Child1Context
        <Child2Context/>
    </div>
  )
}

export default Child1Context