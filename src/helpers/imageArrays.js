/* eslint-disable */

import { getImageFromFolder } from './imageLoader'

import {
    aetheria,
    aguire,
    alcest,
    af,
    aluk,
    alt,
    brus,
    cerbere,
    chaos,
    conan,
    cratophane,
    cult,
    darkspace,
    doom,
    edc,
    escarion,
    glazart,
    goblin,
    godflesh,
    hifi,
    imperial,
    king,
    lsm,
    metalorgie,
    mongolito,
    mysticum,
    nespresso,
    ocean,
    pyramid,
    rio,
    rocketgum,
    sabbath,
    stortreng,
    structure,
    sunn,
    sylvaine,
    ulver,
    ulver_edition,
    valve,
    vaurien,
    weidorje,
    welcomex,
    tshirtDark,
    tshirtGate,
    tshirtRib,
    urbanfest,
    yonl,
    frozen,
    ladlo,
    essonne,
} from './images'
import { logos } from './images'

export const editionArray = [
    {
        images: brus,
        videos: [],
        cover: getImageFromFolder('../images/brus', 'uz-1.jpg'),
        title: 'Brus Undazir',
        imageIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: sabbath,
        videos: [],
        cover: getImageFromFolder('../images/sabbath', '1.jpg'),
        title: 'Sabbath 66',
        imageIndex: [0, 1, 2, 3, 4],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: structure,
        videos: [],
        cover: getImageFromFolder('../images/structure', '5.jpg'),
        title: 'Structure',
        imageIndex: [0, 1, 2, 3, 4, 5],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [2, 3, 4],
        tinyIndex: []
    },
    {
        images: ulver_edition,
        videos: [],
        cover: getImageFromFolder('../images/ulver_edition', 'mock-up-fourreau.jpg'),
        title: 'Ulver',
        imageIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
]

export const musicArray = [

    {
        images: [],
        videos: [],
        cover: getImageFromFolder('../images/aetheria', 'Aetheria.jpg'),
        title: 'Albums',
        imageIndex: [],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: [],
        videos: [],
        cover: getImageFromFolder('../images/alt', '1.jpg'),
        title: 'Packaging',
        imageIndex: [],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: [],
        videos: [],
        cover: getImageFromFolder('../images/aluk_todolo', 'carré-site.jpg'),
        title: 'Merch',
        imageIndex: [],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: [],
        videos: [],
        cover: getImageFromFolder('../images/hifi', 'hifi-store-totebag-old.jpg'),
        title: 'Identities',
        imageIndex: [],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    }

]

export const albumArray = [
    {
        images: aetheria,
        videos: [],
        cover: getImageFromFolder('../images/aetheria', 'Aetheria.jpg'),
        title: 'Aetheria Constentia',
        imageIndex: [0, 1, 2, 3, 4],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: aguire,
        cover: getImageFromFolder('../images/aguire', 'artwork.jpg'),
        title: 'Aguirre',
        videos: [],
        imageIndex: [0, 1, 2, 3, 4],
        videoIndex: [],
        medIndex: [],
        squareIndex: [1, 2, 3, 4],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: chaos,
        videos: ['8_AlRJW3SRs'],
        cover: getImageFromFolder('../images/chaos', '4.png'),
        title: 'Chaos E.T. Sexual',
        imageIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        videoIndex: [10],
        medIndex: [],
        squareIndex: [2, 3, 4, 5, 6, 7],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: cratophane,
        cover: getImageFromFolder('../images/cratophane', 'artwork-web.jpg'),
        title: 'Cratophane',
        videos: [],
        imageIndex: [0, 1, 2, 3, 4, 5],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: escarion,
        cover: getImageFromFolder('../images/escarion', 'Escarion-Envy.jpg'),
        title: 'Escarion',
        text: "Cover design made for the Australian death metal band Escarion",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
    {
        images: lsm,
        cover: getImageFromFolder('../images/lsm', 'artworkLSM.jpg'),
        title: 'Love Sex Machine',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
    {
        images: valve,
        cover: getImageFromFolder('../images/valve', '1.jpg'),
        title: 'Valve',
        videos: [],
        imageIndex: [0, 1, 2],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: weidorje,
        cover: getImageFromFolder('../images/weidorje', '1.jpg'),
        title: 'Weidorje',
        videos: [],
        imageIndex: [0, 1, 2],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: welcomex,
        cover: getImageFromFolder('../images/welcomex', '1.jpg'),
        title: 'Welcome X',
        videos: [],
        imageIndex: [0, 1, 2, 3, 4, 5, 6],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
]

export const merchArray = [
    {
        images: aluk,
        cover: getImageFromFolder('../images/aluk_todolo', 'carré-site.jpg'),
        title: 'Aluk Todolo',
        text: "Poster / T-Shirt / Tote bag for the french blackened kraut rock band Aluk Todolo\n\nLimited screenprinted poster for the Lille show\nLimited to 25 copies",
        imageIndex: [0, 1, 2, 3],
        videoIndex: [],
        medIndex: [],
        squareIndex: [1, 2],
        smallIndex: [],
        tinyIndex: [],
        videos: []
    },
    {
        images: cerbere,
        cover: getImageFromFolder('../images/cerbere', 'CERBERE.jpg'),
        title: 'Cerbere',
        imageIndex: [0, 1],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: [],
        videos: []
    },
    {
        images: stortreng,
        cover: getImageFromFolder('../images/stortreng', '1.jpg'),
        title: 'Stortreng',
        imageIndex: [0, 1, 2],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: [],
        videos: []
    },
    {
        images: sylvaine,
        cover: getImageFromFolder('../images/sylvaine', 'Sylvaine-MockUp_IceGrey.jpg'),
        title: 'Sylvaine',
        imageIndex: [0, 1, 2],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: [],
        videos: []
    },
    {
        images: yonl,
        cover: getImageFromFolder('../images/yonl', '0.jpg'),
        title: 'Year Of No Light',
        imageIndex: [0, 1, 2, 3, 4, 5],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: [],
        videos: []
    },
    {
        images: ocean,
        cover: getImageFromFolder('../images/ocean', 'the-ocean-v2.jpg'),
        title: 'The Ocean',
        imageIndex: [0, 1, 2],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: [],
        videos: []
    },
]

export const packagingArray = [
    {
        images: alt,
        videos: [],
        cover: getImageFromFolder('../images/alt', '1.jpg'),
        title: 'Alt236',
        imageIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: pyramid,
        videos: [],
        cover: getImageFromFolder('../images/pyramid', '0.jpg'),
        title: 'Black Pyramid',
        imageIndex: [0, 1, 2, 3, 4, 5, 6, 7],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
]

export const visuIdArray = [
    {
        images: hifi,
        videos: [],
        cover: getImageFromFolder('../images/hifi', 'hifi-store-totebag-old.jpg'),
        title: 'Hifi Store',
        text: "Graphics for the Hifi store - Paris\n",
        imageIndex: [0, 1, 2, 3, 4, 5],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: rio,
        videos: [],
        cover: getImageFromFolder('../images/rio', '3.jpg'),
        title: 'RIO',
        text: "This was my last year project of my graphic design studies at LISAA\nI redesigned all the graphics of the Rock in Opposition Festival taking place at Albi on an old industrial land\nThis is an underground festival about RIO music / progressive rock / Canterbury scene",
        imageIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: structure,
        videos: [],
        cover: getImageFromFolder('../images/structure', '5.jpg'),
        title: 'Structure',
        imageIndex: [0, 1, 2, 3, 4, 5],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [2, 3, 4],
        tinyIndex: []
    },
    {
        images: edc,
        videos: [],
        cover: getImageFromFolder('../images/edc', 'format 5_4.jpg'),
        title: 'EDC',
        imageIndex: [0, 1, 2],
        videoIndex: [],
        medIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: glazart,
        cover: getImageFromFolder('../images/glazart', 'glaz-carré.jpg'),
        title: 'Glazart',
        text: "Artworks for the night club Glazart, porte de la Villette - Paris",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4, 5],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: [0, 1, 2, 3, 4, 5]
    },
    {
        images: metalorgie,
        cover: getImageFromFolder('../images/metalorgie', 'carré.jpg'),
        title: 'Metalorgie Fest',
        text: "Designs for the French webzine Metalorgie's Festival\nLogo / flyers / ads / limited screenprinted poster\nLimited to 30 copies",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        videoIndex: [],
        squareIndex: [0, 1],
        tinyIndex: []
    },
]

 export const posterArray = [
    {
        images: alcest,
        cover: getImageFromFolder('../images/alcest', '1.jpg'),
        title: 'Alcest',
        text: "",
        medIndex: [],
        videos: [],
        imageIndex: [0],
        videoIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: conan,
        cover: getImageFromFolder('../images/conan', '3.jpg'),
        title: 'Conan',
        text: "'Guardians of Heaviness' merch for the UK caveman doom band Conan\n\nLimited 3 colors screenprinted poster for the french shows\nLimited to 50 copies",
        medIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4, 5, 6],
        videoIndex: [],
        squareIndex: [2, 3, 4, 5],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: cult,
        cover: getImageFromFolder('../images/cult_of_fire', '3.jpg'),
        title: 'Cult Of Fire',
        text: "Limited screenprinted poster for the black metal band Cult of Fire playing at 'Feux de Beltane' festival\nInk made with pigments from indian traditional holi ceremony and spices\nPigments are mixed with water from Gange river\nHomemade paper made by hand in Nepal\n\nThanks to Capitaine Max for those ingredients",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4],
        videoIndex: [],
        squareIndex: [1, 2, 3, 4],
        tinyIndex: []
    },
    {
        images: darkspace,
        cover: getImageFromFolder('../images/darkspace', 'ZOOM3.jpg'),
        title: 'Darkspace',
        text: "Limited screenprinted poster for the industrial black metal band Darkspace playing at 'Feux de Beltane' festival\nPoster incrusted with meteorite powder\nProcess on the video\nLimited to 40 copies",
        medIndex: [],
        smallIndex: [],
        videos: ['BTH4pOOHyug'],
        imageIndex: [0, 1, 2, 3, 4, 5],
        videoIndex: [6],
        squareIndex: [1, 2, 3, 4],
        tinyIndex: []
    },
    {
        images: doom,
        cover: getImageFromFolder('../images/doom', '61171990_1260684680759752_8179678087525433344_o.jpg'),
        title: 'Doom',
        text: "Screenprinted poster for the UK crust legends Doom\nSpecial ink mixed with ashes of a tear gas grenade puck, found during a 'gilet jaune' protest.\nProcess on the video\nLimited to 50 copies\nAnarchy, Equality and fuck police brutality and Macron fuckin' corrupted system",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2],
        videoIndex: [],
        squareIndex: [1, 2],
        tinyIndex: []
    },
    {
        images: goblin,
        cover: getImageFromFolder('../images/goblin', '6.jpg'),
        title: 'Goblin',
        text: "Graphics for the special show of legendary italian progressive rock band Goblin, playing at Le Flow - Paris\nFlyer / collector tickets / coasters and limited gatefold screenprinted poster\nProcess on the video made by Guillaume Quincy",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4, 5, 6],
        videoIndex: [],
        squareIndex: [3, 4, 5, 6],
        tinyIndex: []
    },
    {
        images: godflesh,
        cover: getImageFromFolder('../images/godflesh', '1.jpg'),
        title: 'Godflesh',
        text: "Limited screenprinted poster for the UK industrial gods Godflesh playing at Roadburn festival in 2018\nPoster laminated with aluminum paper\n Limited to 55 copies",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3],
        videoIndex: [],
        squareIndex: [1, 2],
        tinyIndex: []
    },
    {
        images: imperial,
        cover: getImageFromFolder('../images/imperial', 'IT-facebook.jpg'),
        title: 'Imperial Triumphant',
        text: "",
        medIndex: [],
        videos: [],
        imageIndex: [0],
        videoIndex: [],
        squareIndex: [],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: king,
        cover: getImageFromFolder('../images/king_dude', '2.jpg'),
        title: 'King Dude',
        text: "Limited screenprinted poster for the US dark folk band King Dude\nPoster laminated with real snake skin\nDesign reused for the french show at 'La Plage de Glazart'\nProcess on the video made by Guillaume Quincy\nLimited to 50 copies",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },

    {
        images: mysticum,
        cover: getImageFromFolder('../images/mysticum', '3.jpg'),
        title: 'Mysticum',
        text: "Designs for the show of the Norwegian industrial black metal pioneers Mysticum playing at Le Flow - Paris\nFlyers / exclusive t-shirt / screenprinted poster limited to 30 copies\n\nDesign used for Headbang Brewery who made a beer especially for the show",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        videoIndex: [],
        squareIndex: [0, 1],
        tinyIndex: []
    },
    {
        images: sunn,
        cover: getImageFromFolder('../images/sunn', '1 (1).jpg'),
        title: 'Sunn O)))',
        text: "Limited screenprinted poster for US drone metal pioneers SunnO))) playing at Paradiso - Amsterdam\nLimited to 50 copies, mirror paper pasted on the poster",
        medIndex: [],
        smallIndex: [1, 2, 3],
        videos: [],
        imageIndex: [0],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
    {
        images: ulver,
        cover: getImageFromFolder('../images/ulver', 'zoom-3.jpg'),
        title: 'Ulver',
        text: "Limited screenprinted poster for 'The Assassination of Julius Caesar' tour of the Norwegian band Ulver\nLimited to 80 copies and incrusted with real bay leaves\n\nProcess on the video by Guillaume Quincy",
        medIndex: [],
        smallIndex: [],
        videos: ['HrqhgHYFM8k'],
        imageIndex: [0, 1, 2, 3, 4, 5],
        videoIndex: [6],
        squareIndex: [1, 2, 3, 4],
        tinyIndex: []
    },
 ]

export const logoArray = {
    images: logos,
    imageIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    medIndex: [],
    smallIndex: [],
    videoIndex: [],
    squareIndex: [],
    tinyIndex: [],
    videos: []
}

// WORKSHOP ARRAYS

export const workshopArray = [
    {
        images: essonne,
        cover: getImageFromFolder('../images/workshop_workshops/essonne', '1.jpg'),
        title: 'Essonne',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    }
]

export const tshirtArray = [
    {
        images: tshirtDark,
        cover: getImageFromFolder('../images/tshirts/darkspace', 'dark_tish_carré.jpg'),
        title: 'Darkspace',
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
    {
        images: tshirtGate,
        cover: getImageFromFolder('../images/tshirts/gate', 'Emgalai_s-Gatezoom1.jpg'),
        title: 'Ëmgalaï\'s Gate',
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
    {
        images: tshirtRib,
        cover: getImageFromFolder('../images/tshirts/rib', '67567580_1310293545798865_9137664366735261696_o.jpg'),
        title: 'Rock In Bourlon',
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    }
]

export const lpArray = [
    {
        images: mongolito,
        cover: getImageFromFolder('../images/cd/mongolito', 'carré-en-fait-.jpg'),
        title: 'Mongolito',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2],
        videoIndex: [],
        squareIndex: [0, 1],
        tinyIndex: []
    }
]

export const cdArray = [
    {
        images: rocketgum,
        cover: getImageFromFolder('../images/cd/rocket_gum', '43436560_1830087720379682_7671300873330360320_o.jpg'),
        title: 'Rocket Gum',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    }
]

export const tapeArray = [
    {
        images: af,
        cover: getImageFromFolder('../images/cassettes/acces_de_faiblesse', '70229637_911070585930378_6026411403500322816_n.jpg'),
        title: 'Accès de Faiblesse',
        text: "",
        medIndex: [],
        smallIndex: [2, 3, 4],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4],
        videoIndex: [],
        squareIndex: [0, 1],
        tinyIndex: []
    },
    {
        images: vaurien,
        cover: getImageFromFolder('../images/cassettes/vaurien', '1.jpg'),
        title: 'Vaurien',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4, 5, 6],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    }
]

export const othersArray = [
    {
        images: nespresso,
        cover: getImageFromFolder('../images/workshop_others/nespresso', '08_DSC_8518.jpg'),
        title: 'Nespresso',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
    {
        images: frozen,
        cover: getImageFromFolder('../images/workshop_others/frozen', 'MOCK-UP-PIONS.jpg'),
        title: 'Frozen Records',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
    {
        images: ladlo,
        cover: getImageFromFolder('../images/workshop_others/ladlo', '2.jpeg'),
        title: 'LADLO',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0, 1, 2, 3, 4],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
]



//  export const workArray = [

     
     
//      {
//          images: urbanfest,
//          cover: getImageFromFolder('../images/urban_fest', '12898318_576300052531555_183095972173381426_o.jpg'),
//          title: 'Urban Fest',
//          text: "",
//          medIndex: [],
//          smallIndex: [],
//          videos: [],
//          imageIndex: [0, 1, 2, 3, 4, 5],
//          videoIndex: [],
//          squareIndex: [],
//          tinyIndex: []
//      }
//  ]
