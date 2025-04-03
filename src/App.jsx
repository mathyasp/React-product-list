import { useState } from 'react'
import './App.css'
import { uniqueCategories } from './data.js'
import data from './data.json'
import CategoryButton from './components/CategoryButton'
import ProductCard from './components/ProductCard'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = data.filter(product => 
    selectedCategory === 'All' ? true : product.category === selectedCategory
  )

  // Calculate totals
  const totalProducts = filteredProducts.length
  const totalCategories = uniqueCategories.length
  const totalUnits = filteredProducts.reduce((sum, product) => sum + product.units, 0)
  const totalInventoryValue = filteredProducts.reduce((sum, product) => 
    sum + (product.units * product.price), 0
  )

  return (
    <div className="App">
      <h1>Product Inventory</h1>
      
      <div className="inventory-stats">
        <p>Total Products: {totalProducts}</p>
        <p>Total Categories: {totalCategories}</p>
        <p>Total Units: {totalUnits}</p>
        <p>Total Inventory Value: ${totalInventoryValue.toFixed(2)}</p>
      </div>
      
      <div className="category-buttons">
        <CategoryButton 
          category="All"
          selected={selectedCategory === 'All'}
          onClick={() => setSelectedCategory('All')}
        />
        {uniqueCategories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            selected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default App
