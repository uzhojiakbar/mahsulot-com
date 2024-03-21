import React, { useState } from 'react'

import { useContext } from 'react'
import { MainContext } from '../Context/main'
import { Route, Routes } from 'react-router-dom'

import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Products from '../Components/products'
import NavBottomBar from '../Components/NavBottomBar'

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
                <Route path='/profile' element={<h1>Profile</h1>} />
                <Route path='/buy' element={<h1>Shop</h1>} />
                <Route path='/' element={<Products filter={active} filtertext={filtertext} />}/>
            </Routes>
        </div>
    )
}
export default Root