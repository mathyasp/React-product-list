import data from './data.json';

// Get all categories using map
const allCategories = data.map(item => item.category);

// Filter unique categories
const uniqueCategories = [...new Set(allCategories)];

// Count products per category with reduce
const categoryCounts = data.reduce((obj, item) => {
  obj[item.category] = (obj[item.category] || 0) + 1;
  return obj;
}, {});

export default data;