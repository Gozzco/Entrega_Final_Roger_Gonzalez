import React from 'react';
import NavBar from './components/NavBar';
import CheckOut from './components/CheckOut';
import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Confirmation from './components/Confirmation';
import { CartContextProvider } from './context/ShoppingCartContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



const App = () => {

  return (

    <BrowserRouter>

      <CartContextProvider>

      <NavBar/>

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/category/:category' element={<ItemListContainer />} />
        <Route exact path='/item/:productId' element={<ItemDetailContainer />} />
        <Route exact path='/checkout' element={<CheckOut />}/>
        <Route exact path='/confirmation/' element={<Confirmation />}/>

      </Routes>

      <Footer/>   
      
      </CartContextProvider>

    </BrowserRouter>

  )
}

export default App