import { styled } from "styled-components";

const media = {
    tablet: "@media (max-width: 768px)",
    mobileL: "@media (max-width: 360px)",
    mobile: "@media (max-width: 520px)",
};

const SidebarMain = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    *::-webkit-scrollbar {
        width: 10px;
        border-radius: 5px;
        cursor: pointer;
        background: #EDF4FE;
        border-radius: 10px;
    }

    *::-webkit-scrollbar-thumb {
        background: #C1C1C1;
        opacity: 0.86;
        cursor: pointer;
    }
`
const SidebarBack = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.4);
    width: 100%;
    height: 100%;
    ${media.mobile}{
        display: none;
    }
`

const SidebarCon = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;
    left: 50px;
    top: 10px;
    width: 320px;
    height: fit-content;
    max-height: 600px;
    overflow: auto;
    
    background: #FFFFFF;
    border-radius: 8px;

    gap: 5px;
    padding: 10px 15px;       
    .link{
        display: flex;
        align-items: center;
        justify-content: left;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-decoration: none;
        color: rgba(7, 7, 7, 0.5);

        background-color: white;
        cursor: pointer;
        transition: .2s;

        user-select: none;

        padding: 10px 15px;
        width: 95%;
    }
    .link:hover{
        background: rgba(82, 136, 193, 0.15);
        border-radius: 4px;
        color: #001869;
        padding-left: 30px;
    }
    .aktiv{
        background: rgba(82, 136, 193, 0.15);
        border-radius: 4px;
        color: #001869;
        font-weight: 500;
    }
    ${media.mobile}{
        width: 100%;
        min-height: 100vh;
        height: 100vh;
        max-height: 100%;
        left: 0;
        align-items: center;
    }
`

const SidebarButtons = styled.div`
    display: none;
    ${media.mobile}{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        width: 95%;
        .button{
            img{
                width: 120%;
            }
        }
    }
`


export { SidebarCon, SidebarMain, SidebarBack,SidebarButtons }