import React from 'react'
import { products } from '../../Mock/products'
import { Name, Info, ProductsHeader, ProductsMain, StartsQoldiq, ProductPrice } from './style'

const Products = ({ filter }) => {
  const onFilter = (v) =>{
    if (filter==='') {
      return v.type[0].includes(filter)
    }else{
      return v.type.includes(filter)
    }
  }
  return (
    <ProductsMain>
      {
        products.map((v) => onFilter(v) &&
          <ProductsHeader key={v.id} >
            <img src={v.img.img1} alt="rasm bor" />
            <div className='padding'>
              <Name>{v.name}</Name>
              <Info>{v.info.info}</Info>
              <StartsQoldiq>
                <div>
                  <img src={v.starts} alt="rasm bor" />
                </div>
                <span>
                  Qoldi {v.qoldiq}
                </span>
              </StartsQoldiq>
              <ProductPrice>
                Narxi:  {v.price} so'm
              </ProductPrice>
            </div>
          </ProductsHeader>
        )
      }
    </ProductsMain>
  )
}


export default Products