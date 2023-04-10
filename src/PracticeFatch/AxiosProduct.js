import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosProduct = () => {
    const [products,setProducts] = useState([]);

    const getProduct=()=>{
        axios.get(`https://fakestoreapi.com/products`)
        .then((res)=>setProducts(res.data))
    };

    useEffect(()=>{
        getProduct()
    },[]);

  return (
    <div>
      
    <Typography>Axios Product Data</Typography>
<Grid container spacing={2}>
    {products.length > 0 && products.map((ele,ind)=>{
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

export default AxiosProduct
