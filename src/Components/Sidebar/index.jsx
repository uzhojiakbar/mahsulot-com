import React, { useContext, useState } from 'react'
import { SidebarBack, SidebarCon, SidebarMain } from './style'
import { SidebarMock } from '../../Mock/sidebar'
import { MainContext } from '../../Context/main'

const Sidebar = ({ active,setActive }) => {
    const  [MuchContext,setMuchContext] = useContext(MainContext)

    const onFilterClick = (key) => {
        setActive(key);
        setMuchContext({...MuchContext, sidebar: !MuchContext.sidebar})
    }
    return (
        <SidebarMain>
            <SidebarBack onClick={() => setMuchContext({...MuchContext, sidebar: !MuchContext.sidebar})} />
            <SidebarCon>
                {
                    SidebarMock.map((v) => {
                        return <p
                            key={v.id}
                            onClick={() =>{onFilterClick(v.key)}}
                            className={active === v.key ?
                                'aktiv link' :
                                'link'}                                >
                            {v.icon} {v.name}
                        </p>
                    })
                }
            </SidebarCon>
        </SidebarMain>
    )
}

export default Sidebar