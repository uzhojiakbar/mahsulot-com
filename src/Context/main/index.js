import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const MainContext = createContext()

const Main = ({ children }) => {
    const [MuchContext,setMuchContext] = useState(
        {
            sidebar: true,
            filter: ''
        }
    )
    return (
        <MainContext.Provider
            value={[MuchContext,setMuchContext]}
        >
            {children}
        </MainContext.Provider>
    )
}

export default Main