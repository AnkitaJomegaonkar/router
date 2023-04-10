import { Button, List, ListItem, ListItemButton, ListItemText, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const ToDoList = () => {
    const [text, setText] = useState("")
    const [todolist ,setTodolist] = useState([])

    const handleAddTask =() =>{
        if(!text) return
        setTodolist([...todolist,text])
        setText("")

    }
    return (
    <div>
      <Typography variant="h3">ToDoList</Typography>

      <TextField
          required
          id="outlined-required" 
          label="Add Task"
          value={text}
          onChange={(e)=>setText(e.target.value)}
    />  {""}
    &nbsp;

      <Button variant="contained" color="success" style={{height :"54px"}} onClick={() =>handleAddTask()}>Add Text</Button>
      <List >
        {todolist?.map((item,index) =>{
          return(
      
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
           ); 
        })}
      
      </List>
    </div>
    )
}

export default ToDoList
