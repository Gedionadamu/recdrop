import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { json } from "react-router-dom";
let detail = []
export default function RecipeReviewCard(props) {
  // async function fetchBulk() {
  //   const response2 = await fetch(
  //     `https://api.spoonacular.com/recipes/informationBulk?apiKey=013fd8b3a54f4520995e24120d4dc79d&ids=${props.id}`
  //   );
  //   const json = await response2.json();
  //   detail=[]
  //   detail.push(json)
  // console.log(detail[0].servings)}
  // fetchBulk()
  return (
    <Card sx={{ maxWidth: 250,
      m:1
    }} >
      <CardHeader title={props.title} />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt={props.alt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Missing Ingrediants {props.missed}.
          More Info : 
          <Button
                
               
                sx={{ m: 2, color: 'white', display: 'block', fontFamily: 'cormorant Garamond', color:"black" }}
              >
                <Link to="/signin" style={{ textDecoration: 'none' }}>SignIn</Link>
              </Button>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
