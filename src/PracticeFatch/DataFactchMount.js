import { Button, Card, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const DataFactchMount = () => {
    const [posts,setPosts] = useState([]);

    const getData=()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts`)
     .then((res)=>setPosts(res.posts))

    }
  return (
    <div>
        <Typography gutterBottom variant="h2" component="div">
          Data Fatch Example on Products
        </Typography>

        <Button variant="contained" onClick={()=>getData()}>GetData</Button>
        {posts.length > 0 && posts.map((ele,ind)=>{
            return(
    <Card sx={{ minWidth: 275 }}>

      <CardContent>
        
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <strong>user Id : </strong> {ele.id}
        </Typography>
        

        <Typography variant="h5" component="div">
          <strong>Title : </strong> {ele.title}
        </Typography>


        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <strong>Body : </strong> {ele.body}
        </Typography>
        
      </CardContent>
              
    </Card>

            )
        })}
    </div>
  )
}

export default DataFactchMount
