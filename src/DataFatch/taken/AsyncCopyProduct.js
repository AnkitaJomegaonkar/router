import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActions,
  Grid,
  InputAdornment,
  Rating,
  TextField,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const AsyncAwait = () => {
  const [platziProd, setPlaziProd] = useState([]);
  const [platziProdCopy, setcPlaziProdCopy] = useState([]);
  const [cartProd, setCartProd] = useState([]);

  const getPlatziProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setPlaziProd(data);
    setcPlaziProdCopy(data);
  };

  const handleAddToCart = (item) => {
    const filtered = cartProd.filter((elem) => elem.id === item.id);
    filtered.length > 0
      ? setCartProd(cartProd)
      : setCartProd([...cartProd, item]);
  };

  const handleSearch = (value) => {
    const filtered = platziProdCopy.filter((elem)=> elem.title.toUpperCase().includes(value.toUpperCase()))
    setPlaziProd(filtered);
  };

  useEffect(() => {
    getPlatziProducts();
  }, []);

  return (
    <div>
      <Typography variant="h2">Data Fetch using async await</Typography>
      
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
        <StyledBadge badgeContent={cartProd.length} color="secondary">
          <ShoppingCartIcon style={{ height: 60 }} />
        </StyledBadge>
      </IconButton>

      <Grid container spacing={3}>
        {platziProd.length > 0 && platziProd.map((item, index) => {

            return (

              <Grid item xs={4}>

                <Card sx={{ maxWidth: 420, height: 600 , backgroundColor:"lightGreen" }} key={index}>

                  <CardMedia
                    component="img"
                    height="320"
                    image={item.image}
                    alt="green iguana"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title.substr(0, 20)}
                    </Typography>

                    <Typography gutterBottom variant="h5" component="div">
                      Category: {item.category}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                     {item.description.substr(0, 100)}
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
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to cart
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default AsyncAwait;