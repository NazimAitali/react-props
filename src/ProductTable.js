import React from "react";
import "./App.css";

function ProductTable({name, price, category}) {
  return (
    <div>
      <table>      
        <tr>
          <td>{name}</td>
          <td>{price}</td>
          <td>{category}</td>
        </tr>
      </table>
    </div>
  );
}
export default ProductTable;
