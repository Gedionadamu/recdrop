
import SearchInput from './Components/search';
import ExpandMore from './Components/recipe_card';
import './App.css';
import { useState } from 'react';
import { ClassNames } from '@emotion/react';

function App() {
  const [Input, setInput] = useState("")
  return (
    
      <>
      <div className='container'>
      <SearchInput setInput={setInput}/>
      <ExpandMore/>
      </div>
      </>
        
  );
}

export default App;
