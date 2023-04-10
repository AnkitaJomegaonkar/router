import { Button, Typography } from '@mui/material'
import React, { useReducer } from 'react'

const initial ={firstCount:0, secondCount:100} //initial value
const complexCount = (state,action)=>{
    switch(action.type){
        case 'plus1' :
            return {...state, firstCount:state.firstCount+action.payload}

            case'minus1':
            return {...state, firstCount:state.firstCount-action.payload}

            case 'reset1':
            return{...state, firstCount:initial.firstCount}
    }

    switch(action.type){
        case 'plus11' :
            return {...state, secondCount:state.secondCount+action.payload}

        case 'minus11' :
            return {...state, secondCount:state.secondCount-action.payload}   
            
        case 'reseat11' :
            return {...state, secondCount:initial.secondCount}    
    }

} //reducerfunction

const UseReducer1 = () => {
    const [countVal,dispatch]= useReducer(complexCount,initial)
    // console.log(countVal)
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Complex State (useReducer() Hook)
      </Typography>

<div style={{margin:40}}>
      <Typography variant="h5" gutterBottom>
        Intial Value :{initial.firstCount}
      </Typography>


      <Typography variant="h5" gutterBottom>
        First Count :{countVal.firstCount}
      </Typography>

      <Button variant="contained" color="success" onClick={()=>dispatch({type:"plus1", payload:1 })}>
         increase(+)
      </Button> &nbsp;

      <Button variant="contained" color="error" onClick={()=>dispatch({type:"minus1", payload:1 })}>
        decrease(-)
      </Button> &nbsp;

      <Button variant="contained" color="secondary" onClick={()=>dispatch({type :"reset1"})}>
       Reaset
        </Button>
 </div>   

 <div style={{margin: 80}}>

       <Typography variant="h5" gutterBottom>
        Intial Value :{initial.secondCount}
      </Typography>

      <Typography variant="h5" gutterBottom>
        Second Count : {countVal.secondCount}
      </Typography>

      <Button variant="contained" color="success"  onClick={()=>dispatch({type:"plus11", payload:10 })}>
         increase(+)
      </Button> &nbsp;

      <Button variant="contained" color="error" onClick={()=>dispatch({type:"minus11", payload:10 })} >
        decrease(-)
      </Button> &nbsp;

      <Button variant="contained" color="secondary" onClick={()=>dispatch({type:"reseat11"})}>
       Reaset
        </Button>
        </div>        
     
</div>
  )
}

export default UseReducer1
