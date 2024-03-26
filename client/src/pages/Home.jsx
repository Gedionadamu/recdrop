import React from "react";
import { useState } from "react";
import SearchInput from '../Components/search';
import ExpandMore from '../Components/recipe_card';

export default function Home(){
    
        const [Input, setInput] = useState("")
        const [add, setAdd] = useState("")
        const [recipeInput, setrecipeInput] = useState([])
        return (
      
          <>
            <div className='container'>
              <SearchInput
                setInput={setInput}
                setAdd={setAdd}
                Input={Input}
                setrecipeInput={setrecipeInput}
                recipeInput={recipeInput}
              />
              <ExpandMore />
            </div>
          </>
      
        );
    
}