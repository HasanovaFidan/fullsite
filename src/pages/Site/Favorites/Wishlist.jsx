
import React, { useState } from 'react';
import "./basket.css"
import {Toaster,toast} from 'react-hot-toast';

function Wishlist() {
  const [basketItems, setBasketItems] = useState(
    localStorage.getItem('basketItems') ? JSON.parse(localStorage.getItem('basketItems')) : []
  );
  const deleteButton=(id)=>{
    console.log(id)
    let deletedData=basketItems.filter(item=>item.id!==id)
   localStorage.setItem("basketItems",JSON.stringify(deletedData))
   setBasketItems([...deletedData])
   toast.error("favorilərinizdən uğurla silindi")
   

}

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>unitPrice</th>
            <th>unitsInStock</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {basketItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>{item.unitsInStock}</td>
              <td>
                <button className="delete" onClick={() => deleteButton(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster/>
    </div>
  );
}

export default Wishlist;

