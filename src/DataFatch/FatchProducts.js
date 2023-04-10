import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';

const FatchProducts = () => {
const [product,setProduct] = useState([])

    const getProduct =()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>setProduct(res.data))
    };
    useEffect(()=>{
        getProduct()
    },[])
  return (
    <div>
        <Typography>Product Data</Typography>
        <Grid container spacing={2}>
            {product.length> 0 && product.map((ele,ind)=>{
                return(

                
            <Grid item xs={3}>
            

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ele.image}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <strong>Title :</strong>{ele.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Description :</strong>{ele.description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Category :</strong> {ele.category}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Price : </strong> {ele.price}
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

export default FatchProducts