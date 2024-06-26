import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";

import RecipeReviewCard from "./recipe_card";
import { Typography } from "@mui/material";

let API = "013fd8b3a54f4520995e24120d4dc79d";

export default function FullWidthTextField({
  setInput,
  setAdd,
  Input,
  recipeInput,
  setrecipeInput,
  recieved,
  setRecieved,
}) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  function addRecipe() {
    setAdd({ Input });
    const newrecipes = [...recipeInput, Input];
    setrecipeInput(newrecipes);
  }

  const handleDelete = (chipToDelete) => () => {
    setrecipeInput((recipeInput) =>
      recipeInput.filter((chip) => chip !== chipToDelete)
    );
  };

  function handleSearch() {
    const apirecipe = recipeInput.join(",+");
    async function fetchRecipe() {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API}&ingredients=${apirecipe}&number=5`
      );
      const json = await response.json();
      if(json.code === 402){
        console.log("Api token used up! Get your Money up Man!!!")
        return
        
      }
      recieved = [];
      recieved.push(json);

      setRecieved(recieved[0]);
      console.log(recieved[0]);
    }
    fetchRecipe();
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          pt: 7,
        }}
      >
        <Typography variant="h2" sx={{ letterSpacing: ".3rem", mb: 3 }}>
          SILVER RECIPE
        </Typography>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Ingrediants"
            id="fullWidth"
            margin="dense"
            color="primary"
            className="searchInput"
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ display: "inline", m: 1, p: 1 }}>
          <Button
            sx={{ width: 1 / 8, m: 1 }}
            variant="outlined"
            endIcon={<AddIcon />}
            className="addBtn"
            onClick={addRecipe}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            endIcon={<SearchIcon />}
            onClick={handleSearch}
          >
            Search Recipes
          </Button>
        </Box>
        <Box sx={{ color: "gray",  }}></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "30rem", borderBottom: .5,
            borderTop:.5
          }}
        >
          {recipeInput.map((foodItem) => (
            <ul key={foodItem}>
              <Chip
                label={foodItem}
                variant="outlined"
                onDelete={handleDelete(foodItem)}
              />
            </ul>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            m: 1,
            p: 1,
          }}
        >
          {recieved.map((test) => (
            <RecipeReviewCard
              key={test.id}
              id={test.id}
              title={test.title}
              image={test.image}
              alt={test.alt}
              missed={test.missedIngredientCount}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
