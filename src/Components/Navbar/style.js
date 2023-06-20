import { styled } from "styled-components";

const media = {
    laptopL: "@media (max-width: 1440px)",
    laptop: "@media (max-width: 1240px)",
    tablet: "@media (max-width: 768px)",
    mobileL: "@media (max-width: 360px)",
    mobileM: "@media (max-width: 400px)",
    mobile: "@media (max-width: 520px)",
};
const NavbarWindow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: white;
    ${media.mobile} {
        width: 100%;
        height: 160px;
    }
    ${media.mobileL} {
        width: 360px;
    }
`

const NavbarStyle = styled.div`
    height: 80px;
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 10px;

    .burger:hover{
        background-color: var(--third-color-opacity);
    }
    background-color: transparent;

    /* MEDIA LAPTOP */
    ${media.tablet} {
        width: 768px;
    }
    /* MEDIA MOBILE*/
    ${media.mobile} {
        flex-wrap: wrap;
        width: 100%;
        height: 160px;
        background-color: white;
        .burger:hover{
            background-color: transparent;
        }
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
    font-size: 20px;
    /* MEDIA MOBILE*/
    ${media.mobile} {
        background-color: transparent;
        color: black;
        font-size: 25px;
    }
`

const Left = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 120px;
    .logo{
        cursor: pointer;
    }
    .navigation{
        display: flex;
        align-items: center;
    }
    /* MEDIA MOBILE*/
    ${media.mobile} {
        display: flex;
        justify-content: left;
        gap: 10px;
        align-items: center;
    }
`
const SearchStyle = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
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
        font-weight: 700;
        font-size: 16px;
        letter-spacing: 1.2px;
        word-spacing: 7px;
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
    /* MEDIA MOBILE*/
    ${media.mobile} {
        order: 1;
        width: 95%;
        margin: 0 auto;
        margin-top: -10px;
        > input{
            /* padding: 12px 10px; */
            padding: 10px 10px;
            padding-left: 45px;
        }
        > img{
        left: 10px;
    }
    }
`
const Right = styled.div`
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
    /* MEDIA MOBILE */
    ${media.mobile} {
        gap: 10px;
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

    /* MEIDA MOBILE */
    ${media.mobile} {
        width:  40px;
        height: 40px;
        .name{
            display: none;
        }
    }
`

export {
    NavbarStyle,
    Burger,
    SearchStyle,
    Right, Left,
    Button, NavbarWindow
}