import { useState } from 'react'
import Review from  './Review.jsx'
import './App.css'

function App() {


  return (
   <section>
   <div className='container'>
   <h1>Our Reviews</h1>
   <div className='underLine'></div>
   <div className='card'>
   <Review/>
   </div> 
   </div>
   </section>   
  )
}

export default App
