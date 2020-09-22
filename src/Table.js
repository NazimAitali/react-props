import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductTable from './ProductTable'



function Array({data}) {
  return (
    <div>
        <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
        </table>
        {data.map((elem,index)=>{
            return <ProductTable key={index} name = {elem.name} price ={elem.price} category ={elem.category} />
        })}
      
    </div>
  );
}

export default Array;
