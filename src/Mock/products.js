import ochki from '../Assets/img/ochki.svg';
import shampun from '../Assets/img/shampun.svg';
import tool from '../Assets/img/tool.svg';
import quyoshkozaynak from '../Assets/img/quyoshkozaynak.svg';
import smartvatch from '../Assets/img/smartvatch.svg';
import rejact from '../Assets/img/rejact.svg';
import masajyor from '../Assets/img/masajyor.svg';
import kamera from '../Assets/img/kamera.svg';
import ultra from '../Assets/img/ultra.svg';
import yulduz from '../Assets/img/yulduz.svg'


export const products = [
    {
        id: 1,
        img: { img1: ochki, img2: ochki, img3: ochki, img4: ochki, },
        name: 'Ochki',
        starts: yulduz,
        qoldiq: 2,
         info: {
            seller: 'apple',
            info: "Kompyuter va telefon nuridan100% himoyachi ochki",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 179_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 2,
        img: { img1: shampun, img2: shampun, img3: shampun, img4: shampun, },
        name: 'Rapm Shampun',
        starts: yulduz,
        qoldiq: 2,
         info: {
            seller: 'apple',
            info: "Bosh terisidagi qon aylanishiniyaxshilaydi.",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 215_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 3,
        img: { img1: tool, img2: tool, img3: tool, img4: tool, },
        name: 'Swifty Sharp Tool',
        starts: yulduz,
        qoldiq: 5,
         info: {
            seller: 'apple',
            info: "Simsiz elektr to'ki yordamidaishlovchi yengil charx.",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 169_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 4,
        img: { img1: quyoshkozaynak, img2: quyoshkozaynak, img3: quyoshkozaynak, img4: quyoshkozaynak, },
        name: 'Quyosh ko’zoynagi',
        starts: yulduz,
        qoldiq: 50,
         info: {
            seller: 'apple',
            info: "Quyosh nurini toʻ suvchibardoshli linzlarning mukammal",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 169_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 5,
        img: { img1: smartvatch, img2: smartvatch, img3: smartvatch, img4: smartvatch, },
        name: 'Smart Watch',
        starts: yulduz,
        qoldiq: 2,
         info: {
            seller: 'apple',
            info: "Simkarta tushadi , Aql charhlaydigan o’yinlari bor",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 347_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 6,
        img: { img1: rejact, img2: rejact, img3: rejact, img4: rejact, },
        name: 'Rest Rejact',
        starts: yulduz,
        qoldiq: 2,
         info: {
            seller: 'apple',
            info: "Sizni hasharotlar vkemiruvchilarni qilyaptimi",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 189_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 7,
        img: { img1: masajyor, img2: masajyor, img3: masajyor, img4: masajyor, },
        name: 'Masajyor',
        starts: yulduz,
        qoldiq: 20,
         info: {
            seller: 'apple',
            info: "Badandagi yogʻlar ortiqchavazndan xalos etadi",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 195_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 8,
        img: { img1: ochki, img2: ochki, img3: ochki, img4: ochki, },
        name: 'Ochki',
        starts: yulduz,
        qoldiq: 2,
         info: {
            seller: 'apple',
            info: "Kompyuter va telefon nuridan 100% himoyachi ochki",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 179_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 9,
        img: { img1: quyoshkozaynak, img2: quyoshkozaynak, img3: quyoshkozaynak, img4: quyoshkozaynak, },
        name: 'Quyosh ko’zoynagi',
        starts: yulduz,
        qoldiq: 2,
         info: {
            seller: 'apple',
            info: "Quyosh nurini toʻ suvchibardoshli linzlarning mukammal",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 179_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 10,
        img: { img1: kamera, img2: kamera, img3: kamera, img4: kamera, },
        name: 'Kamera299',
        starts: yulduz,
        qoldiq: 2,
         info: {
            seller: 'apple',
            info: "Kompyuter va telefon nuridan100% himoyachi ochki",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 179_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 11,
        img: { img1: ultra, img2: ultra, img3: ultra, img4: ultra, },
        name: 'Arctic Air Ultra',
        starts: yulduz,
        qoldiq: 2,
         info: {
            seller: 'apple',
            info: "Mini konditsioner: Sovutadi,namlaydi, tozalaydi",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 179_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    {
        id: 12,
        img: { img1: smartvatch, img2: smartvatch, img3: smartvatch, img4: smartvatch, },
        name: 'Smart Watch',
        starts: yulduz,
        qoldiq: 30,
         info: {
            seller: 'apple',
            info: "Simkarta tushadi ,Aql charhlaydigan o’yinlari bor",
            desc: `Mahsulot haqida     Smart Watch M26 Plus  Simsiz quvvat oladi,     Trenarovka rejimi,   Yurak urushini oʻlchash,
                    Bluetooth orqali ulanadi,  18 ta sefirblat + ilovasini oʻrnatib yana qoʻshsa boʻladi,  Ob-havo taqvimi,
                    Qoʻngʻiroq bildirishnomalari,  Ilovalardan kelgan habarlar,    Soatni oʻzidan qoʻngʻiroq qilish imkoniyati,
                    Remishok almashadi,     Yana koʻplab funksiyalar  Narxi 387.000 So'm  Oʻzbekiston boʻylab yetkazib berish bepul` },
        price: 179_000,
        colors: [{id:1, name:'qizil', colorCode:'#212121'}],
        deliver: [1,3],
        count: 30,

    },
    
]