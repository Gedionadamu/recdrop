
import SearchInput from './Components/search';
import ExpandMore from './Components/recipe_card';
import './App.css';
import { useState } from 'react';
import { ClassNames } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './Components/Header';

function App() {
  // const [Input, setInput] = useState("")
  // const [add, setAdd] = useState("")
  // const [recipeInput, setrecipeInput] = useState([])
  // return (

  //   <>
  //     <div className='container'>
  //       <SearchInput
  //         setInput={setInput}
  //         setAdd={setAdd}
  //         Input={Input}
  //         setrecipeInput={setrecipeInput}
  //         recipeInput={recipeInput}
  //       />
  //       <ExpandMore />
  //     </div>
  //   </>

  //);

  return <BrowserRouter>
  <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Logout' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
}

export default App;
