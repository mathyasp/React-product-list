import data from './data.json';

// Get all categories using map
const allCategories = data.map(item => item.category);

// Filter unique categories
const uniqueCategories = [...new Set(allCategories)];

export default data;