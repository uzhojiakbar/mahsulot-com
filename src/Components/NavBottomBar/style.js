import { styled } from "styled-components";

const NavBottomBarStyle = styled.div`
    background-color: #001869;
    width: 100%;
    max-width: 1980px;
    margin: 0 auto;
    height: 50px;
    display: flex;
    align-items: center;
    @media (max-width: 1240px){
        display: none;
    }
`
const NavBottomMain = styled.div`
    display: flex;
    width: 1440px;
    margin: 0 auto;
    gap: 40px;
    padding: 0 40px;
    .link{
        color: #fff;
        opacity: .8;
        font-size: 15px;
        font-family: Poppins;
        font-weight: 400;   
        cursor: pointer;
        text-decoration: none;
        padding: 5px 10px;
    }
    .link:hover{
        opacity: 1;
    }
    .aktv{
        background-color: white;
        color: #001869;
        opacity: 1;
        font-weight: 600;   
    }
`
const Link = styled.div`
    
`

export { NavBottomBarStyle, NavBottomMain, Link }