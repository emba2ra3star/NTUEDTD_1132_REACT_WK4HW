import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import './App.css'
import Home from './pages/Home'
import BookInfo from './pages/BookInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products'>
          <Route path='category/:categoryName' element={<Home />} />
          <Route path='id/:productId' element={<BookInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
