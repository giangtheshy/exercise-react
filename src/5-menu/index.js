import React, { useState } from 'react'
import Categories from './Categories'
import Menu from './Menu'
import data from './data'


const categories = ['all', ...new Set(data.map(item => item.category))]

const Index = () => {
  const [items, setItems] = useState(data)
  const filterItems = (category) => {
    if (category === 'all') {
      setItems(data);
      return;
    }
    const newItems = data.filter(item => item.category === category)
    setItems(newItems);
  }
  return (
    <>
      <h1 className='header'>Our Menu</h1>
      <div className="underline"></div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={items} />
    </>
  )
}

export default Index
