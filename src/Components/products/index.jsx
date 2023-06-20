import React from 'react'
import { products } from '../../Mock/products'
import { Name, Info, ProductsHeader, ProductsMain, StartsQoldiq, ProductPrice } from './style'

const Products = () => {
  return (
    <ProductsMain>
      {
        products.map((v) => {
          return <ProductsHeader>
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
        })
      }
    </ProductsMain>
  )
}

export default Products