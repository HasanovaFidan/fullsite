import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ item, addToBasket }) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://hinicio.com/wp-content/uploads/2022/08/placeholder-3.png" className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p style={{ color: "red" }}>{item.categoryId}</p>
          <p>{item.unitPrice}AZN</p>
          <div className="flex">
            <button onClick={(e) => {
              addToBasket(item.id)
            }} className='fav'>favorite</button>
            <Link className='link' to={`/${item.id}`}>Detail</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card
