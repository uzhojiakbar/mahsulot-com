import ochki from '../Assets/img/ochki.svg';
import shampun from '../Assets/img/shampun.svg';
import tool from '../Assets/img/tool.svg';
import quyoshkozaynak from '../Assets/img/quyoshkozaynak.svg';
import smartvatch from '../Assets/img/smartvatch.svg';
import rejact from '../Assets/img/rejact.svg';
import masajyor from '../Assets/img/masajyor.svg';
import kamera from '../Assets/img/kamera.svg';
import ultra from '../Assets/img/ultra.svg';


export const products = [
    {
        id: 1,
        img: { img1: ochki, img2: ochki, img3: ochki, img4: ochki, },
        name: 'Ochki',
         info: {
            seller: 'apple',
            info: "Simkarta tushadi, Aql charhlaydigan o’yinlari bor",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 179_000,
        colors: [{id:1, name:qizil,colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,
    }
]