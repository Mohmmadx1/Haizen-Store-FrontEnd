import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './Modules/Home/Home';
import {  Route, Routes } from 'react-router-dom';
import Product from './Modules/Product/Product'
import Productss from './Modules/Productss/Products';
import Cart from './Modules/Cart/Cart';
import About1 from './components/About/About';
import Contact from './components/Contact/Contanct';
export default App;

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/'  element={ <Home/> }/>
        <Route path='/products/:id'  element={<Product/>}/>
        <Route path='/products'  element={<Productss/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/About'  element={<About1/>}/>
        <Route path='/Contact'  element={<Contact/>}/>
        <Route path='*'  element={<> Error 404</>}/>
      </Routes>
      <Footer/>
    </div>
  );
}


