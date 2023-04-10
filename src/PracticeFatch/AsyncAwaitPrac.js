import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const AsyncAwaitPrac = () => {
    const [plzProduct , setPlzProduct] = useState([]);
    const [plzProductCopy,setPlzproductCopy] = useState([]);
    const [cartProd, setCartProd] = useState([]);
    


    const fakeApiProducts = async()=>{
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json();
        setPlzProduct(data);
        setPlzproductCopy(data);
    
    };

    const handleAddToCart =(item)=>{
       const filtered = cartProd.filter((elem) => elem.id === item.id );
       filtered.length > 0 ? setCartProd(cartProd) : setCartProd([...cartProd,item]);
    };

    const handleSearch =(value)=>{
        const filtered = plzProductCopy.filter((ele)=>ele.title.toUpperCase().includes(value.toUpperCase()))
        setPlzProduct(filtered);
    }

    useEffect(()=>{
        fakeApiProducts()
    },[]);
    
  return (
    <div>
      
  <Typography variant="h3" gutterBottom>Example Of AsyncAwait"Practice"</Typography>

  <TextField id="outlined-basic" label="Cart" variant="outlined"
     InputProps={{
     endAdornment: (
   <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  ),
}}
  onChange={(e)=>handleSearch(e.target.value)}
  fullWidth
/>

<IconButton aria-label="cart">
      <StyledBadge badgeContent={cartProd.length} color="secondary">
        <ShoppingCartIcon  style={{ height: 60 }} />
      </StyledBadge>
    </IconButton>

<Grid container spacing={3}>
{plzProduct.length > 0 && plzProduct.map((item,index)=>{
return(

<Grid item xs={4}>
<Card sx={{ maxWidth: 345, height: 600 , backgroundColor:"lightGreen" }} key={index}>
  <CardMedia
    component="img"
    alt="green iguana"
    height="320"
    image={item.image}
  />
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
  <strong></strong>{item.title.substr(0, 20)}
  </Typography>
           
<Typography variant="body2" color="text.secondary">
<strong>Category :</strong> {item.category}
</Typography>

<Typography variant="body2" color="text.secondary">
<strong>Description :</strong>  {item.description.substr(0, 100)}
</Typography>

<Rating
name="read-only"
value={item.rating.rate}
readOnly
/>

<Typography variant="body2" color="text.secondary">
Available Quantity: {item.rating.count}
</Typography>

           
                   
           
<CardActions>
<Button variant="contained" onClick={()=>handleAddToCart()}>Add To</Button>
<Button size="small" >Learn More</Button>
</CardActions>

</CardContent>
</Card>
</Grid>
);
})};

         
</Grid>

         

   </div>
  );
};

export default AsyncAwaitPrac
