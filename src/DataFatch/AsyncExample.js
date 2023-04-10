
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import { Button, CardActions, Grid, InputAdornment, Rating } from '@mui/material';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const AsyncExample = () => {
    const [plaziProduct,setPlaziproduct] = useState([])
    const [cardProd,setCardProd] = useState([])
    const [platziProdCopy, setcPlaziProdCopy] = useState([]);

    const getPlatziProducts = async()=>{
        const responce = await fetch(`https://fakestoreapi.com/products`)
        const data = await responce.json()
        setPlaziproduct(data)
        setcPlaziProdCopy(data)
    };

   const  handleAddToCart = (item)=>{
        const filtered = cardProd.filter((elem)=> elem.id === item.id)
        filtered.length  > 0 
        ? setCardProd(cardProd) : 
        setCardProd([...cardProd, item])
    };

    const handleSearch = (value) =>{
      const filtered = platziProdCopy.filter((elem)=>elem.title.toUpperCase().includes(value.toUpperCase()))
      setPlaziproduct(filtered)
    }

  
    useEffect(()=>{
        getPlatziProducts()
    },[])
  return (
    <div>
      <h1>AsynceAwait of Data Fatch...</h1>

      <TextField
          id="outlined-basic"
          label="Search Product"
          variant="outlined"
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
    <StyledBadge badgeContent={cardProd.length} color="secondary">
      <ShoppingCartIcon  style={{ height: 60 }} />
    </StyledBadge>
  </IconButton>

      <Grid container spacing={3}>

          {plaziProduct.length > 0 && plaziProduct.map((ele,index)=>{
             return(
          
             <Grid item xs={4}>
        
<Card sx={{ maxWidth: 420, height:600, backgroundColor:"lightGreen" }} key={index}>
    <CardMedia
        component="img"
        height="370"
        image= {ele.image}
        alt="green iguana"
      />

    <CardContent>

        <Typography gutterBottom variant="h5" component="div">
          <strong>Title :  </strong> {ele.title.substr(0,20)}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
        <strong>Category: </strong> {ele.category}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Description : </strong> {ele.description.substr(0,100)}
        </Typography>

       

       <Rating name="read-only" value={ele.rating.rate} readOnly />

       <Typography variant="body2" color="text.secondary">
          <strong>Available Quentity : </strong> {ele.rating.count}
        </Typography>

        <CardActions>
        <Button size="small" varient="contained" onClick={()=>handleAddToCart(ele)}>Add to cart</Button>
       
       
      </CardActions>

  </CardContent>

      

    </Card>
      </Grid>

        )
    })}
      
      </Grid>
      

    </div>
  )
}

export default AsyncExample
