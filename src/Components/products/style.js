import { styled } from "styled-components";

export const ProductsMain = styled.div`
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  padding-top: 30px;
  background-color: #E2E2E2;
`

export const ProductsHeader = styled.div`
 width: 270px;
 margin: 0 auto;
 background: #fff;
 box-shadow: 0 0 5px #fff;
 margin-top: 30px;
 .padding{
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
 }
`
export const Name = styled.div`
font-family: 'Neue Machina';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 23px;
color: var(--main-color);
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