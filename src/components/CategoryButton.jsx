import React from 'react'

function CategoryButton({ category, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`category-button ${selected ? 'selected' : ''}`}
    >
      {category}
    </button>
  )
}

export default CategoryButton