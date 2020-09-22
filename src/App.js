import React from 'react';
import logo from './logo.svg';
import './App.css';
import Array from './Table'
import Navbar from './Navbar'

const Products = [
  {
    name: "Smartphone",
    price:'699 euro',
    category:"electronics"
  },
  {
    name: "t-shirt",
    price:'35 euro',
    category:"clothes"
  },
  {
    name: "tv",
    price:'750 euro',
    category:"electronics"
  },
  {
    name: "hat",
    price:'20 euro',
    category:"clothes"
  },
]

function App() {
  return (
    <div className="App">
      < Navbar title ="React - Props Advanced Checkpoint" />
      <div className="container">
      <Array data = {Products} />
      </div>     
    </div>
  );
}

export default App;
