
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';




let API = '013fd8b3a54f4520995e24120d4dc79d'
let test =[]


export default function FullWidthTextField({ setInput, setAdd, Input, recipeInput, setrecipeInput }) {

  const handleChange = (e) => {

    setInput(e.target.value)
    console.log(e.target.value)
  }
  function addRecipe() {
    setAdd(Input)
    const newrecipes = [...recipeInput, Input]
    setrecipeInput(newrecipes)
    console.log(newrecipes)
  }
  // Finish this code block
  function handleDelete(removeditem) {
    console.log("hi")
    const removed = [recipeInput.filter(ingredients => ingredients !== removeditem)]
    setrecipeInput(removed)
  }
 function handleSearch() {
    const apirecipe = recipeInput.join(",+")
    const receivedRecipies = fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API}&ingredients=${apirecipe}&number=5`)
      .then(function (response) {
        return response.json();
       }
       )
  }

  const Idng = recipeInput.map(foodItem => <li><Chip key={foodItem} label={foodItem} variant="outlined" onDelete={handleDelete} /></li>)
  return (

    <>

      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField fullWidth label="Ingrediants" id="fullWidth" margin='dense' color='primary' className='searchInput' onChange={handleChange} />

      </Box>

      <Button variant="outlined" endIcon={<AddIcon />} className='addBtn' onClick={addRecipe}>Add</Button>
      <Button variant="outlined" endIcon={<SearchIcon />} onClick={handleSearch}>Search Recipes</Button>
      <ul>{Idng} </ul>
    </>
  );
}