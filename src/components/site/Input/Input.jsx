import React from 'react'
import "./input.css"

function Input({data,setData,orginal}) {
    const handleChange=(e)=>{
        let search=e.target.value.trim().toLowerCase()
       if(search==""){
        setData(orginal)
       }
       else{
        let searchedCards=data.filter(data=>data.name.trim().toLowerCase().includes(search))
        setData(searchedCards)
       }
        }
        const handleClick = (e) => {
          e.preventDefault();
          let sortedPro = [...data].sort((a, b) => a.unitPrice - b.unitPrice);
          setData(sortedPro);
      }
      
  return (
    <div>
        <form className='axtar' action="">
        <input type="text" placeholder='search product' onChange={(e)=>handleChange(e)}/>
        <button onClick={(e)=>handleClick(e)}>Sort</button>
        </form>
       
      
    </div>
  )
}

export default Input
