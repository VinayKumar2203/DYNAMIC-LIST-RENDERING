import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ItemList({items}) {
  return(
    <>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No items found</p>
      )}  
    </>
  )
}


function App() {

  return (
    <>
     <ItemList items ={["Apple","Banana","Cheery"]}/>
    </>
  )
}

export default App
