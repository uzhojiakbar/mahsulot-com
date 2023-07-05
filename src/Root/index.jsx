import React, { useState } from 'react'

import { useContext } from 'react'
import { MainContext } from '../Context/main'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Products from '../Components/products'
import Profile from '../Components/Profile'

import './style.css'
import NavBottomBar from '../Components/NavBottomBar'
import Shop from '../Components/Shop'

const Root = () => {
    const [active, setActive] = useState('')
    const [filtertext, setFilterText] = useState('')
    const [MuchContext] = useContext(MainContext)
        
    return (
        <div className='main center' >
            <Navbar setFilterText={setFilterText} />
            {
                MuchContext.sidebar ? <Sidebar
                    active={active}
                    setActive={setActive}
                /> : null
            }
            <NavBottomBar
                active={active}
                setActive={setActive}
            />
            <Routes>
                <Route path='/profile' element={<Profile />} />
                <Route path='/buy' element={<Shop/>} />
                <Route path='/' element={<Products
                    filtertext={filtertext}
                    setFilterText={setFilterText}
                    filter={active}
                />} />
            </Routes>
        </div>
    )
}
export default Root