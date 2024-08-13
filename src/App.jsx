import './App.css'
import React from 'react'
import Head from './components/head'
import Products from './components/products'

function App() {
  return (
    <div>
      <Head />
      <div className='row'>
        <div className='col-lg-8 mx-auto pt-3'>
          <Products />
        </div>
      </div>
    </div>
  )
}

export default App
