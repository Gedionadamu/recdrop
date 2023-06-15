
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import SearchIcon from '@mui/icons-material/Search';


var recipeInput = []
var addBtn = document.querySelector(".addBtn")
var searchInput = document.querySelector(".searchInput")

export default function FullWidthTextField({setInput}) {

  const handleChange= (e) => {
    
    setInput(e.target.value)
    console.log(e.target.value)
  }
  function addRecipe(e){
    e.preventDefault();
  }
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
    
    <Button variant="outlined" endIcon={<AddIcon/>} className='addBtn' onClick={addRecipe}>Add</Button>
    <Button variant="outlined" endIcon={<SearchIcon/>}>Search Recipes</Button>
    <Chip label="Egg" variant="outlined" color='primary'/>
    </>
  );
}