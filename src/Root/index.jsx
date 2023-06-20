import React, { useState } from 'react'
import './style.css'
import Navbar from '../Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import { useContext } from 'react'
import { MainContext } from '../Context/main'
import Products from '../Components/products'

const Root = () => {
    const [active, setActive] = useState('')
    const [MuchContext,setMuchContext] = useContext(MainContext)

    return (
        <div className='main center' >
            <Navbar />
            {
                MuchContext.sidebar ? <Sidebar
                    active={active}
                    setActive={setActive}
                /> : null
            }
            <Routes>
                <Route path='/profile' element={<h1>Profile</h1>} />
                <Route path='/buy' element={<h1>Shop</h1>} />
                <Route path='/' element={<Products filter={active} />}/>
            </Routes>
        </div>
    )
}
export default Root