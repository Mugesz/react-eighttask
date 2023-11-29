

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Allproducts from './components/Allproducts'
import Home from './components/Home'
import Cart from './components/Cart'
import Popular from './components/Popular'
import Footer from './components/Footer'
import Confirmed from './Confirmed'

function App() {
  
  return (
    <BrowserRouter>
                    <div className="d-flex flex-column min-vh-100 contianer-fluid">
                    <Navbar />
           
                    <div className="flex-grow-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/allproducts" element={<Allproducts />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/popular" element={<Popular />} />
                            <Route path="/confirmed" element={<Confirmed />} />
                        </Routes>
                    </div>
              <Footer />
                </div>
    </BrowserRouter>
  )
}

export default App
