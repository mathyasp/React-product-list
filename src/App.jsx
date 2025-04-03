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

  return (
    <div className="App">
      <h1>Product Inventory</h1>
      
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
