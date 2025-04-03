import React from 'react'

function ProductCard({ product }) {
  const { name, price, category, rating, units, description } = product
  
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      <p>Rating: {rating}/5</p>
      <p>Units: {units}</p>
      <p>{description}</p>
    </div>
  )
}

export default ProductCard