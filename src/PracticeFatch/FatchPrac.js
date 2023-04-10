import { Button,Typography,Card,CardContent, } from '@mui/material'
import React, { useState } from 'react'

const FatchPrac = () => {
  const [post,setPost] = useState([]);

  const getData=()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>res.json())
    .then((res)=>console.log(res))
;
  }
  return (
    <div>
         <Typography gutterBottom variant="h2" component="div">
          Data Fetch Example
        </Typography>

        <Button variant="contained" onClick={()=>getData()}>To Data Get</Button>
        {post.map((ele,ind)=>{
          return(
                
    <Card sx={{ minWidth: 275 }} key={ind}>
       <CardContent>

            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                 Data Fatching Of Post
            </Typography>

            <Typography variant="h5" component="div">
                <strong>User Id : </strong>{ele.id}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <strong>Title :</strong> {ele.title}
            </Typography>

            <Typography variant="body2">
                <strong>Body :</strong> {ele.body}
             </Typography>

      </CardContent>
      
    </Card>

          )
        })}

     

    </div>
  )
}

export default FatchPrac
