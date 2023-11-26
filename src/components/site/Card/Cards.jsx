import React, { useEffect, useState } from 'react';
import Card from './Card';
import axios from 'axios';
import "./card.css";
import Input from '../Input/Input';
import { json } from 'react-router';
import { Toaster ,toast } from 'react-hot-toast';

const Cards = () => {
  const [data, setData] = useState([]);
  const [orginal,setOrginal]=useState([])
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [basketItems, setBasketItems] = useState(localStorage.getItem("basketItems") ? JSON.parse(localStorage.getItem("basketItems")) : [])
  const addToBasket = (id) => {
    let item = data.find((item) => item.id === id);
    let isItemExist = false;
    basketItems.forEach(item=>{
      if(item.id == id){
        isItemExist = true
        
      }                                       
    })
    if(!isItemExist){
      setBasketItems([...basketItems,item])
      localStorage.setItem("basketItems",JSON.stringify([...basketItems,item]))
      toast.success('məhsul əlavə edildi')
    }else{
  
      toast.error("məhsul artıq əlavə edilib")
    }
  };

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
      .then(res => {
        console.log(res.data);
        setOrginal(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);
  

  return (

    <div>
      <Input data={data} setData={setData} orginal={orginal} setOrginal={setOrginal}/>

      {
        loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row">
              {
              data.map((item, index) => (
                <div key={index} className="col-3 mb-5">
                  <Card item={item} addToBasket={addToBasket} />
                </div>
              ))}
            </div>
          </div>

        )}
         <Toaster/>
    </div>
  );
 
};

export default Cards;
