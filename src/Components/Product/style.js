import { styled } from "styled-components";


export const ProductHome = styled.div`
 width: 1440px;
 margin-top: 70px;
.desc{
   width: 1300px;
   color: #5288C1;
font-size: 20px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 30px;
}
.kulrang{
   color: #929292;
font-size: 16px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 10px;
}
`


export const ProductSt = styled.div`
 display: flex;
 .flex{
    display: flex;
    flex-direction: column;
    padding-left: 30px;
 }
 .flex1{
    display: flex;
    gap: 30px;
    color: #565656;
font-size: 20px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
line-height: normal;
    span{
      color: #565656;
font-size: 20px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
    }
 }
 .flex2{
    border-bottom: 2px solid grey;
    padding-bottom:10px;
 }
 .drection{
   .imgs{
      img{
         width: 85px;
      }
   }
 }
 .productflex{
   display: flex;
   height: 355px;
   gap: 10px;
 }
 .name{
   color: #000;
font-size: 32px;
font-family: Poppins;
font-style: normal;
font-weight: 500;
line-height: normal;
 }
`
export const ProductSection = styled.div`
 margin-top: 10px;
  .colorname{
   display: flex;
   gap: 20px;
   margin-top: 10px;
   button{
      width: 50px;
      padding: 5px;
      margin-bottom: 10px;
   }
  }
  .miqdor{
   display: flex;
   align-items: center;
   margin-top: 10px;
   .kokyozuv{
      color: #001869;
font-size: 16px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
   }
   .qoldiq{
      background-color: #EBEBEB;
      width: 100px;
      padding: 5px;
      display: flex;
      justify-content: space-around;
      cursor: pointer;
      margin-right: 10px;
      span{
         padding: 0 10px;
      }
   }
  }
  .narxi{
   color: #001869;
font-size: 20px;
font-family: Poppins;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 10px;
.narxi1{
   margin-top: 10px;
}
  }
`

export const MainOpenImage = styled.div`
  .Openimage{
   img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.7);
   }
  }
`