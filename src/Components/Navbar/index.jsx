import React, { useContext } from 'react'

// STYLE
import { Burger, Right, NavbarStyle, SearchStyle, Left, Button, NavbarWindow } from './style.js'
// LOGO
import Logo from '../../Assets/logo/logo.svg'
// ICONS
import SearchLogo from '../../Assets/icon/search.svg'
import ProfileLogo from '../../Assets/icon/profile.svg'
import BuyLogo from '../../Assets/icon/buy.svg'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../../Context/main/index.js'

const Navbar = () => {
    const [MuchContext,setMuchContext] = useContext(MainContext)
    return (
        <NavbarWindow>
            <NavbarStyle>
                <Left>
                    <Burger onClick={()=>setMuchContext({...MainContext, sidebar: !MuchContext.sidebar})} className='fa-solid fa-bars burger' ></Burger>
                    <NavLink className={'navigation'} to={'/'}><img src={Logo} alt="" className="logo" /></NavLink>
                </Left>
                <SearchStyle>
                    <input placeholder='Search' type="text" />
                    <img src={SearchLogo} alt="" />

                </SearchStyle>
                <Right>
                    <NavLink className={({ isActive }) => isActive ? 'active navlink' : 'navlink'} to={'/profile'}>
                        <Button className='btn'>
                            <img src={ProfileLogo} alt="" />
                            <div className="name">My profile</div>
                        </Button>
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'active navlink' : 'navlink'} to={'/buy'}>
                        <Button className='btn'>
                            <img src={BuyLogo} alt="" />
                            <div className="name">Purchase</div>
                        </Button>
                    </NavLink>
                </Right>
            </NavbarStyle>
        </NavbarWindow >
    )
}

export default Navbar