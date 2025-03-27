import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Signup from './Components/SignUp';
import SignIn from './Components/SignIn';
import AddProducts from './Components/AddProduct';
import GetProducts from './Components/GetProducts';
// import{Link} from "react-router-dom"
import SingleProduct from './Components/SingleProduct';

import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
// import CategoriesList from './Components/Category';

function App() {
  return (
    <Router>
    <div className="App">
    
      {/* <header className="App-header" id='nav'>
      
        <h1 id='title'>The Spice Haven</h1>
        <h5><i>Let's Spice It Up</i></h5>
        
      </header> */}
      
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/addproduct' element={<AddProducts/>}/>
        <Route path='/getproducts' element={<GetProducts/>}/>
        <Route path="/singleproduct" element={<SingleProduct/>}/>
        <Route path='/' element={<Home/>}/> 
        <Route path='/contactus' element={<ContactUs/>}/>
        
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
