import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import SignIn from './Components/SignIn';
import AddProducts from './Components/AddProduct';
import GetProducts from './Components/GetProducts';
// import{Link} from "react-router-dom"
import SingleProduct from './Components/SingleProduct';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Carousel from './Components/Carousel';
// import CategoriesList from './Components/Category';

function App() {
  return (
    <Router>
    <div className="App">
    
      <header className="App-header" id='nav'>
      <Navbar/>
        <h1 id='title'>The Spice Haven</h1>
        <h5><i>Let's Spice It Up</i></h5>
        
      </header>
      
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/addproduct' element={<AddProducts/>}/>
        <Route path='/' element={<GetProducts/>}/>
        <Route path="/singleproduct" element={<SingleProduct/>}/>
      
        
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
