import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./product.css"


function ProductDetail() {
  const{id}=useParams()
  const[item,setItem]=useState({})
  useEffect(()=>{
    axios.get(`https://northwind.vercel.app/api/products/${id}`).then(res=>{
      setItem(res.data)
      console.log(res.data);

    })
  },[])
  return (
    <div className='flexo'>
<div className="left">
<img  src="https://media.licdn.com/dms/image/C5612AQHcIbXC8aV-ng/article-cover_image-shrink_720_1280/0/1616305561269?e=2147483647&v=beta&t=uMZNh2LFRoGqMYNiz_isqm5bpSNExiu1uEgG1gtX-N4" alt="" />
</div>
<div className="right">
<h3>{item.name}</h3>
      <h6>{item.quantityPerUnit}</h6>
      <p>{item.categoryId}</p>
</div>

    
    
    </div>
  )
}

export default ProductDetail
