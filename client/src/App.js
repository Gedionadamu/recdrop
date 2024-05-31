

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './Components/Header';

import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Cormorant Garamond'
    ].join(','),
  },});

function App() {
 

  return <BrowserRouter>
  <Header />
  <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Logout' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </ThemeProvider>
  </BrowserRouter>
}

export default App;
