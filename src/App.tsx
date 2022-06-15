import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Providers from './pages/Providers'
import Inventory from './pages/Inventory'
import Bills from './pages/Bills'
import Receipts from './pages/Receipts'
import ProviderList from './components/provider/ProviderList'
import Home from './pages/Home'
import './App.css'
import FormProviderPost from './components/provider/FormProvider'
import { useSelector } from 'react-redux'
import { RootState } from './state/Store'
import GenerateBill from './pages/GenerateBill'

function App() {

  const [count, setCount] = useState(0);
  const {user} = useSelector((state:RootState) => state.logged)
  
  return (
    <BrowserRouter>
    {user===null?
    <nav className='flex sm:justify-left space-x-4 p-5 bg-orange-600'>
    <Link to="/" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Log-in</Link>
    </nav>
    :
      <nav className='navigation'>
          <Link to="/provider" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Providers</Link>
          <Link to="/inventory" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Inventory</Link>
          <Link to="/receipt" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Receipts</Link>
          <Link to="/bills" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Bills</Link>
          <Link to="/generateBill" className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'>Generate Bill</Link>

      </nav>
    }
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/provider" element={<Providers />}/>
            <Route path="/inventory" element={<Inventory />}/>
            <Route path="/receipt" element={<Receipts />}/>
            <Route path="/bills" element={<Bills />}/>
            <Route path="/generateBill" element={<GenerateBill/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
