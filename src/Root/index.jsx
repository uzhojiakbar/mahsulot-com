import React from 'react'
import './style.css'
import Navbar from '../Components/Navbar'
import { Route, Routes } from 'react-router-dom'

const Root = () => {
    return (
        <div className='main center' >
            <Navbar />
            <Routes>
                <Route path='/profile' element={<h1>Profile</h1>} />
                <Route path='/buy' element={<h1>Shop</h1>} />
            </Routes>
        </div>
    )
}
export default Root