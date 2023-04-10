import { Card, CardContent, CardMedia, Typography ,Grid} from '@mui/material'
import React, { useEffect, useState } from 'react'

const AsyncAwait = () => {
    const [plaziProduct,setPlaziproduct] = useState([])

    const getPlatziProducts = async()=>{
        const responce = await fetch(`https://api.escuelajs.co/api/v1/products`)
        const data = await responce.json()
        setPlaziproduct(data)

    };

    useEffect(()=>{
        getPlatziProducts()
    },[])
  return (
    <div>
      <h1>AsynceAwait of Data Fatch...</h1>
      <Grid container spacing={3}>

    {plaziProduct.length > 0 && plaziProduct.map((ele,ind)=>{
        return(
          
            <Grid item xs={4}>
        
<Card sx={{ maxWidth: 345 }}>
    <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
    <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          <strong>Lizard</strong>
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Hello....</strong>
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Aaa.....</strong>
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong></strong>
        </Typography>

  </CardContent>

      

    </Card>
      </Grid>

        )
    })}
      
      </Grid>
      

    </div>
  )
}

export default AsyncAwait
