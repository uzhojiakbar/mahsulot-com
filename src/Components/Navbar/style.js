import { styled } from "styled-components";

const media = [
    { Tablet: `(min-width: 768px)` },
    // { Laptop: `(min-width: 1024px)` },
    // { MobileL: `(min-width: 480px)` },
    // { MobileL: `(min-width: 480px)` },
]

const NavbarStyle = styled.div`
    
    height: 80px;
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin: 0 auto;
    .burger:hover{
        background-color: var(--third-color-opacity);
    }
`
const Burger = styled.i`
    width: fit-content;
    background-color: var(--third-text-color);
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: white;
`

const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 2;
    .logo{
        cursor: pointer;
    }
`
const SearchStyle = styled.div`
    width: 50%;
    display: flex;
    position: relative;
    transition: .3s;
    :focus{
        outline: 1px solid var(--second-color);
        box-shadow: 0 0 1px black;
    }
    > input{
        padding: 10px 10px;
        padding-right: 45px;
        background-color: transparent;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #001869;
        border-radius: 23px;
        background: rgba(82, 136, 193, 0.1);
        border: 1px solid #E4E4E4;
    }
    
    > img{
        position: absolute;
        right: 10px;
        cursor: pointer;
        padding: 10px 10px;
    }
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 25px;
    > .navlink{
        text-decoration: none;
        background-color: transparent;
        box-sizing: content-box;
        padding: 2px;
        border-radius: 50%;
    }
    > .navlink:hover{
        box-shadow:  0 5px 5px var(--main-color);
    }
    .active{
        box-shadow:  0 5px 5px var(--main-color);
    }
`

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
    width:  60px;
    height: 60px;
    user-select: none;
    > .name{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
        color: var(--third-text-color);
    }
`

export {
    NavbarStyle,
    Burger,
    SearchStyle,
    Right, Left,
    Button
}