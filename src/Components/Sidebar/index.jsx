import React, { useContext, useState } from 'react'
import { SidebarBack, SidebarButtons, SidebarCon, SidebarMain } from './style'
import { SidebarMock } from '../../Mock/sidebar'
import { MainContext } from '../../Context/main'

// ICONS
import close from '../../Assets/icon/close.svg'
import profile from '../../Assets/icon/profile.svg'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ active, setActive }) => {
    const [MuchContext, setMuchContext] = useContext(MainContext)

    const onFilterClick = (key) => {
        setActive(key);
        setMuchContext({ ...MuchContext, sidebar: !MuchContext.sidebar })
    }
    return (
        <SidebarMain>
            <SidebarBack onClick={() => setMuchContext({ ...MuchContext, sidebar: !MuchContext.sidebar })} />
            <SidebarCon>
                <SidebarButtons>
                    <div className="button" onClick={() => setMuchContext({ ...MuchContext, sidebar: !MuchContext.sidebar })} ><img src={close} alt="" /> </div>
                    <NavLink to={'/profile'} onClick={() => setMuchContext({ ...MuchContext, sidebar: !MuchContext.sidebar })} className="button"><img src={profile} alt="" /> </NavLink>
                </SidebarButtons>
                {
                    SidebarMock.map((v) => {
                        return <NavLink
                            to={'/'}
                            key={v.id}
                            onClick={() => { onFilterClick(v.key) }}
                            className={active === v.key ?
                                'aktiv link' :
                                'link'}                                >
                            {v.icon} {v.name}
                        </NavLink>
                    })
                }
            </SidebarCon>
        </SidebarMain>
    )
}

export default Sidebar