import { styled } from "styled-components";

const media = {
    mobile: `@media (max-width:520px)`,
}

const NotFoundCon = styled.div`
    width: 100%;
    height: 320px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align:center;
    .btn:hover{
        background: #001969b3;
    }
    
`
const NotFoundImg = styled.img`

`
const InfoNotFound = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title{
        color: #001869;
        font-size: 22px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        ${media.mobile}{
            font-size: 20px;
        }
    }
    .title-info{
        color: #717171;
        text-align: center;
        font-size: 16px;
        width: 90%;
        margin: 0 auto;
        font-family: Poppins;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        ${media.mobile}{
            font-size: 14px;
        }
    }
`
const Button = styled.div`
    display: flex;
    padding: 12px 20px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    background: #001869;

    color: #FFF;
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    transition: .3s;
    cursor: pointer;
    user-select: none;
`

export {NotFoundImg,NotFoundCon,InfoNotFound,Button}