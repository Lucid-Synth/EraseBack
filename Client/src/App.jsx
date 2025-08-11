import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BuyCredits from './pages/BuyCredit.jsx'
import Result from './pages/Result.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ComingSoon from './pages/ComingSoon.jsx'



function App() {
  return (
    <>
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/buy' element={<BuyCredits/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='/image' element={<ComingSoon />} />
      </Routes>
      <Footer />
    </div>
    
    </>
  )
}

export default App