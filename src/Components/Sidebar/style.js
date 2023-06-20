import { styled } from "styled-components";

const SidebarMain = styled.div`
    position: absolute;
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
`


export { SidebarCon, SidebarMain, SidebarBack }