import React from "react";
import { useState } from "react";
import SearchInput from '../Components/search';


export default function Home(){
    
        const [Input, setInput] = useState("")
        const [add, setAdd] = useState("")
        const [recipeInput, setrecipeInput] = useState([])
        const [recieved, setRecieved] = useState([])
        return (
      
          <>
            <div className='container'>
              <SearchInput
                setInput={setInput}
                setAdd={setAdd}
                Input={Input}
                setrecipeInput={setrecipeInput}
                recipeInput={recipeInput}
                recieved={recieved}
                setRecieved={setRecieved}
              />
              
            </div>
          </>
      
        );
    
}