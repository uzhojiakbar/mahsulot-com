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
        img: [{ id: 1, img: ochki, },
        { id: 2, img: masajyor, },
        { id: 3, img: ultra, },
        { id: 4, img: smartvatch, },],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'avtomabil', 'maishiy.'
        ],
        yetqazibBerish: '1 kundan 3 kungacha bepul',

    },
    {
        id: 2,
        img: [{ id: 1, img: shampun, }, { id: 2, img: shampun }, { id: 3, img: shampun }, { id: 4, img: shampun }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'foydali'
        ]

    },
    {
        id: 3,
        img: [{ id: 1, img: tool }, { id: 2, img: tool }, { id: 3, img: tool }, { id: 4, img: tool }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'foydali', 'medtexnika'
        ]

    },
    {
        id: 4,
        img: [{ id: 1, img: quyoshkozaynak }, { id: 2, img: quyoshkozaynak }, { id: 3, img: quyoshkozaynak }, { id: 4, img: quyoshkozaynak }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'foydali'
        ]

    },
    {
        id: 5,
        img: [{ id: 1, img: smartvatch }, { id: 2, img: smartvatch }, { id: 3, img: smartvatch }, { id: 4, img: smartvatch }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'smartWatch', 'telefonlar'
        ],
        yetqazibBerish: '1 kundan 3 kungacha bepul',


    },
    {
        id: 6,
        img: [{ id: 1, img: rejact }, { id: 2, img: rejact }, { id: 3, img: rejact }, { id: 4, img: rejact }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'foydali', 'medtexnika'
        ]

    },
    {
        id: 7,
        img: [{ id: 1, img: masajyor }, { id: 2, img: masajyor }, { id: 3, img: masajyor }, { id: 4, img: masajyor }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'foydali', 'medtexnika', 'bolalar'
        ]

    },
    {
        id: 8,
        img: [{ id: 1, img: ochki }, { id: 2, img: masajyor }, { id: 3, img: masajyor }, { id: 4, img: masajyor }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'avtomabil', 'foydali'
        ]

    },
    {
        id: 9,
        img: [{ id: 1, img: quyoshkozaynak }, { id: 2, img: quyoshkozaynak }, { id: 3, img: quyoshkozaynak }, { id: 4, img: quyoshkozaynak }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'avtomabil', 'bolalar', 'foydali'
        ]

    },
    {
        id: 10,
        img: [{ id: 1, img: kamera }, { id: 2, img: kamera }, { id: 3, img: kamera }, { id: 4, img: kamera }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'avtomabil', 'medtexnika', 'uyhovli', 'foydali'
        ]

    },
    {
        id: 11,
        img: [{ id: 1, img: ultra }, { id: 2, img: ultra }, { id: 3, img: ultra }, { id: 4, img: ultra }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'uyhovli', 'foydali', 'medtexnika'
        ]
    },
    {
        id: 12,
        img: [{ id: 1, img: smartvatch }, { id: 2, img: smartvatch }, { id: 3, img: smartvatch }, { id: 4, img: smartvatch }],
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
        colors: [{ id: 1, name: 'qizil', colorCode: '#212121' },
        { id: 2, name: 'qora', colorCode: '#212121' },
        { id: 3, name: 'yashil', colorCode: '#212121' }],
        deliver: [1, 3],
        count: 30,
        type: [
            'foydali', 'bolalar', 'kitoblar', 'telefonlar',
        ]

    },
]