import React, { useState } from 'react'

const FormToDo = () => {
  const [text, setText] = useState("")
  const [todolist, setTodolist] = useState([])


  const Handelsavetask = () => {
    if(!text) return
    setTodolist([...todolist,text])
    setText("")

  }
  return (
    <div>
      <input type={"text"} onChange={(e) => setText(e.target.value)} />

      <button onClick={() => Handelsavetask()}> add Task</button>
      {todolist?.map((item,index)=> {
        return(
            <li key={index}> {index+1}) {item}</li>
        )
      })}

    </div>
  )
}

export default FormToDo
