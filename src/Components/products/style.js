import { styled } from "styled-components";

const media = {
  mobile: "@media (max-width: 520px)",
  tablet: "@media (max-width: 768px)",
}
export const ProductsMain = styled.div`
  width: 1440px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  padding-top: 30px;
  background-color: #E2E2E2;
  ${media.mobile}{
    width: 100%;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
  }
`

export const ProductsHeader = styled.div`
 margin: 0 auto;
 background: #fff;
 box-shadow: 0 0 5px #fff;
 margin-bottom: 30px;
 .padding{
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
 }
 ${media.mobile}{
  img{
    width: 100%;
  }
 }
`
export const Name = styled.div`
font-family: 'Neue Machina';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 23px;
color: var(--main-color);
${media.mobile}{
  font-size: 20px;
}
`
export const Info = styled.div`
width: 241px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: rgba(0, 0, 0, 0.5);
margin-top: 10px;
${media.mobile}{
   width: 100%;
}
`

export const StartsQoldiq = styled.div`
display: flex;
align-items: center;
gap: 30px;
margin-top: 10px;
span{
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 15px;
color: #5288C1;
}
`
export const ProductPrice = styled.div`
 font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #000000;
margin-top: 30px;
`