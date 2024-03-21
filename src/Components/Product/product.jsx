import React, { useState } from 'react'
import { products } from '../../Mock/products'
import { MainOpenImage, ProductHome, ProductSection, ProductSt } from './style'

const Product = () => {
    const [id] = useState(0)
    let [count, setcount] = useState(1)
    let [slcPic, setSlcPic] = useState(0)
    let [openPic, SetOpenpic] = useState(false)
    return (
        <ProductHome>
            <ProductSt>
                <div className='productflex'>
                    <div className='drection'>
                        {
                            products[id].img.map((v) => {
                                return <div className='imgs'>
                                    <img onClick={() => setSlcPic(v.id - 1)} src={v.img} alt="" />
                                </div>
                            })
                        }
                    </div>
                    <img className='asosiyrasm'onClick={()=>SetOpenpic(!openPic)}  src={products[id].img[slcPic].img} alt="" />
                </div>
                <div className='flex'>

                    <div className='name'>
                        {
                            products[id].name
                        }

                    </div>
                    <div className='flex1'>
                        <span>Sotuvchi:</span>
                        {
                            products[id].info.seller
                        }
                    </div>
                    <div className='flex1 flex2'>
                        <span>Yetqazip berish:</span>
                        {
                            products[id].yetqazibBerish
                        }
                    </div>
                    <ProductSection>
                        <div className='kulrang'>
                            Range:
                        </div>
                        <div className='colorname'>
                            {
                                products[id].colors.map((v) =>
                                    <button>{v.name}</button>
                                )
                            }
                        </div>

                        <div>
                            <div className='kulrang'>Miqdor:</div>
                            <div className='miqdor'>
                                <div className='qoldiq'>

                                    <span onClick={() => count > 0 && setcount(count--)}>-</span>
                                    <div>{count}</div>
                                    <span onClick={() => count <= 10 && setcount(count++)}>+</span>
                                </div>
                                <div className='kokyozuv'>Mahsulot qoldi: {products[id].qoldiq}</div>
                            </div>
                        </div>
                        <div>
                            <div className='kulrang'>Narxi:</div>
                            <div className='narxi'>
                                {products[id].price * count}
                            </div>
                        </div>
                    </ProductSection>
                </div>
            </ProductSt>
            <div className='desc'>
                {
                    products[id].info.desc
                }
            </div>
            <MainOpenImage>
                {
                    openPic? 
                    <div className='Openimage'>
                        <img onClick={()=>SetOpenpic(!openPic)} src={products[id].img[slcPic].img} alt="" />
                    </div>
                    : null
                }
            </MainOpenImage>
        </ProductHome>
    )
}

export default Product;