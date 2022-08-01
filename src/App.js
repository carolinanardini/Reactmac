import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';

import Nosotros from './components/pages/Nosotros/Nosotros.js';
import Categorias from './components/pages/Categorias/Categorias.js';
import IniciarSesion from './components/pages/IniciarSesion/IniciarSesion.js';
import Navbar from'./components/Navbar/Navbar.js';
import ItemListContainer from'./components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import NotFound from './components/pages/NotFound/NotFound';
import {CartProvider} from './store/CartContext'
import Item from './components/Item/Item';

function App() {
  return (
    <CartProvider>
     
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}></Route>
        <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
        <Route path="/categorias" element={<Categorias/>}></Route>
        <Route path="/categorias/:idCategoria" element={<ItemListContainer/>}></Route>
        <Route path="/nosotros" element={<Nosotros/>}></Route>
        <Route path="/iniciarsesion" element={<IniciarSesion/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>        
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
   
    </CartProvider>
  );
}

export default App;
