
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import { allProducts } from './components/pages/shop/Shop';

import Home from './components/home/Home';
import Header from './components/header/Header';
import NavMenu from './components/navMenu/NavMenu';
import Contact from './components/pages/contact/Contact';
import Shoes from './components/pages/shoes/Shoes';
import Dresses from './components/pages/dresses/dresses';
import Shop from './components/pages/shop/Shop';
import ProductDetails from './components/pages/productDetails/ProductDetails';
import Cart from './components/pages/cart/Cart';


function App() {

  return (
    <BrowserRouter>
      <div className='wrapper'>
      <Header/>
      <NavMenu/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/contact" element= {<Contact/>} />
        <Route path="/shoes" element= {<Shoes/>} />
        <Route path="/dresses" element= {<Dresses/>} />
        <Route path="/shop" element= {<Shop/>} />
        <Route path="/productDetails" element= {<ProductDetails data={allProducts}/>} />
        <Route path="/cart" element= {<Cart/>} />






      </Routes>


    </div>
    </BrowserRouter>
   
    
    
  );
}

export default App;
