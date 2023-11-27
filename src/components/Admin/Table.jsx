import React, { useEffect, useState } from 'react';
import "./table.css";
import axios from 'axios';
import Search from './Search';
import {Toaster,toast} from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Edit from '../../pages/Admin/EditProduct/Edit';
const Table = () => {
  const [table, setTable] = useState([]);
  const [original, setOriginal] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const handleDelete = (id) => {

    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
      .then(() => {
        const deleteTable = table.filter(item => item.id !== id);
        setTable(deleteTable);
        toast.error("məhsul silindi")
      }).catch((err) => {
        setError(err)
      });
  };

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
      .then(res => {
        console.log(res.data);
        setTable(res.data);
        setOriginal(res.data);
        setLoading(false);
      }) .catch(err => {
        setError(err);
        setLoading(false); 
      });
  }, []);

  return (
    <div>
      <Search table={table} setTable={setTable} original={original} />
      {loading ? (
     <div className="d-flex justify-content-center">
     <div className="spinner-border" role="status">
       <span className="sr-only"></span>
     </div>
   </div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
                <td>{item.unitsInStock}</td> 
                <td>
                  <button onClick={()=>handleDelete(item.id)} className="delete">
                    Delete
                  </button>
                </td>
                <td>
                <Link to={`edit/${item.id}`}><button className='edit'>Edit</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    <Toaster/>
    </div>
  );
}

export default Table;
