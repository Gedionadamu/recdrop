import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Chip from "@mui/material/Chip";
import SearchIcon from "@mui/icons-material/Search";

import RecipeReviewCard from "./recipe_card";

let API = "013fd8b3a54f4520995e24120d4dc79d";
let recieved = [];
let clean = [];

export default function FullWidthTextField({
  setInput,
  setAdd,
  Input,
  recipeInput,
  setrecipeInput,
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

      recieved = [];
      recieved.push(json);
      console.log(recieved);
      clean = recieved[0];
      console.log(clean);
    }
    fetchRecipe();
  }

  return (
    <>
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

      <Button
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
      <ul>
        {recipeInput.map((foodItem) => (
          <ul key={foodItem}>
            <Chip
              label={foodItem}
              variant="outlined"
              onDelete={handleDelete(foodItem)}
            />
          </ul>
        ))}
      </ul>
      <ul>
        {clean.map((something)=>(Object.keys(something).map((keys) => (
          <RecipeReviewCard
            key={recieved[keys]}
            title={recieved[keys]}
            image={recieved[keys]}
            alt={recieved[keys]}
          />
        ))))}
      </ul>
    </>
  );
}
