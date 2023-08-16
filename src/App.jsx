import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';




const App = () => {

  return (

    <BrowserRouter>

      <NavBar/>

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/category/:category' element={<ItemListContainer />} />
        <Route exact path='/item/:id' element={<ItemDetailContainer/>} />

      </Routes>

      <Footer/>      

    </BrowserRouter>

  )
}

export default App