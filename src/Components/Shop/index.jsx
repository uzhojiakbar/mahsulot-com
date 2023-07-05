import React from 'react'

import NotFound from '../../Assets/img/not-found.svg'
import { Button, InfoNotFound, NotFoundCon, NotFoundImg } from './style'

const isNotFound = () => {
    return <NotFoundCon>
    <NotFoundImg src={NotFound} />
    <InfoNotFound>
        <div className="title">
            Savatda hozircha mahsulot yo’q
        </div>
        <div className="title-info">
            Bosh sahifadagi termalardan boshlang yoki kerakli mahsulotni
            qidiruv orqali toping
        </div>
    </InfoNotFound>
    <Button className='btn' >
        Bosh sahifa
    </Button>

</NotFoundCon>
}

const Shop = () => {
    const shop = [

    ]
    return (
        <div>
            {
                shop.length ? <></> : isNotFound()
            }
        </div>
    )
}

export default Shop