
import SearchInput from './Components/search';
import ExpandMore from './Components/recipe_card';
import './App.css';
import { useState } from 'react';
import { ClassNames } from '@emotion/react';

function App() {
  const [Input, setInput] = useState("")
  const [add, setAdd] = useState("")
  const [recipeInput, setrecipeInput] = useState([])
  return (
    
      <>
      <div className='container'>
      <SearchInput setInput={setInput} setAdd={setAdd} Input={Input} setrecipeInput={setrecipeInput} recipeInput={recipeInput}/>
      <ExpandMore/>
      </div>
      </>
        
  );
}

export default App;
