import { Card, CardContent, Typography } from '@mui/material'
import { grey } from '@mui/material/colors';
import axios from 'axios';
import React, { useState } from 'react'

const UsingAxious = () => {
    const [posts,setPosts] = useState([])

    const getData =()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) =>setPosts(res.data))
    };

  return (
    <div>
        <h1>Axios Data</h1>
        <button onClick={() =>getData()}>Get Data</button>
        { posts.length > 0 && posts.map((ele,index)=>{
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

export default UsingAxious