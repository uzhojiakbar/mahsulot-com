import React from 'react'
import {  NavBottomBarStyle, NavBottomMain } from './style'
import { NavLink } from 'react-router-dom'
import { SidebarMock } from '../../Mock/sidebar'

const NavBottomBar = ({ active, setActive }) => {
   
    return (
        <NavBottomBarStyle>
            <NavBottomMain>
                {
                    SidebarMock.slice(0,7).map((v) => {
                        return <NavLink
                            to={'/'}
                            key={v.id}
                            onClick={() => setActive(v.key)}
                            className={active === v.key ?
                                'aktv link' :
                                'link'}  
                            >
                                {v.name}
                            </NavLink>
                    })
                }
            </NavBottomMain>
        </NavBottomBarStyle>
    )
}

export default NavBottomBar