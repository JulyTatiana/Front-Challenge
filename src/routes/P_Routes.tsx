import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProviderForm from '../components/ProviderForm'
import ProvidersList from '../components/ProvidersList'

type Props = {}

function P_Routes({}: Props) {
  return (
    <div>
        <Link to='/'> CreateProvider </Link> 
        <Link to='/providers'>  Providers </Link> 
        <Routes>
            <Route path="/" element={<ProviderForm/>} />
            <Route path="/providers" element={<ProvidersList />} />
        </Routes>
    </div>
  )
}

export default P_Routes