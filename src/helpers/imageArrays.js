import af_cover from '../images/cassettes/acces_de_faiblesse/70229637_911070585930378_6026411403500322816_n.jpg'
import aguire_cover from '../images/aguire/1.jpg'
import cortoni_cover from '../images/cortoni/CORELIAN.jpg'
import dark_tshirt_cover from "../images/tshirts/darkspace/dark_tish_carré.jpg"
import gate_tshirt_cover from "../images/tshirts/gate/Emgalai_s-Gatezoom1.jpg"
import rib_tshirt_cover from "../images/tshirts/rib/67567580_1310293545798865_9137664366735261696_o.jpg"
import aluk_cover from '../images/aluk_todolo/carré-site.jpg'
import chaos_cover from '../images/chaos/Capture d’écran 2022-08-16 à 17.07.02.png'
import conan_cover from '../images/conan/3.jpg'
import cult_cover from '../images/cult_of_fire/3.jpg'
import darkspace_cover from '../images/darkspace/ZOOM3.jpg'
import doom_cover from '../images/doom/61171990_1260684680759752_8179678087525433344_o.jpg'
import escarion_cover from '../images/escarion/Escarion-Envy.jpg'
import glazart_cover from '../images/glazart/glaz-carré.jpg'
import goblin_cover from '../images/goblin/6.jpg'
import godflesh_cover from '../images/godflesh/1.jpg'
import hifi_cover from '../images/hifi/hifi-store-totebag-old.jpg'
import king_cover from '../images/king_dude/2.jpg'
import metalorgie_cover from '../images/metalorgie/carré.jpg'
import mongolito_cover from '../images/cd/mongolito/carré-en-fait-.jpg'
import mysticum_cover from '../images/mysticum/3.jpg'
import nespresso_cover from '../images/nespresso/08_DSC_8518.jpg'
import penn_cover from '../images/penn_men/cover.jpg'
import rio_cover from '../images/rio/3.jpg'
import rocketgum_cover from '../images/cd/rocket_gum/43436560_1830087720379682_7671300873330360320_o.jpg'
import structure_cover from '../images/structure/5.jpg'
import sunn_cover from '../images/sunn/1 (1).jpg'
import ulver_cover from '../images/ulver/zoom-3.jpg'
import urbanfest_cover from '../images/urban_fest/12898318_576300052531555_183095972173381426_o.jpg'
import vaurien_cover from '../images/cassettes/vaurien/1.jpg'

// import tshirts_cover from "../images/tshirts/gate/Emgalai_s-Gatezoom1.jpg"
// import vinyls_cover from "../images/vinyls/carré-en-fait-.jpg"
// import cassettes_cover from "../images/cassettes/70229637_911070585930378_6026411403500322816_n.jpg"
// import cd_cover from ""

import {
    af,
    aluk,
    aguire,
    chaos,
    conan,
    cortoni,
    cult,
    darkspace,
    doom,
    escarion,
    glazart,
    goblin,
    godflesh,
    hifi,
    king,
    metalorgie,
    mongolito,
    mysticum,
    nespresso,
    penn,
    rio,
    rocketgum,
    structure,
    sunn,
    ulver,
    vaurien,
    tshirtDark,
    tshirtGate,
    tshirtRib,
    urbanfest,
} from './images'
import {logos} from './images'

export const musicArray = [
  {
     images: chaos,
     videos: ['8_AlRJW3SRs'],
     cover: chaos_cover,
     title: 'Chaos E.T. Sexual',
     imageIndex: [0,1,2,3,4,5,6,7,8],
     videoIndex: [9],
     medIndex: [],
     squareIndex: [2,3,4,5,6,7],
     smallIndex: [],
     tinyIndex: []
   },
   {
      images: aguire,
      cover: aguire_cover,
      title: 'Aguirre',
      videos: [],
      imageIndex: [0,1,2,3,4],
      videoIndex: [],
      medIndex: [],
      squareIndex: [1,2,3,4],
      smallIndex: [],
      tinyIndex: []
    },
    {
       images: cortoni,
       cover: cortoni_cover,
       title: 'Cortoni',
       videos: [],
       imageIndex: [0,1],
       videoIndex: [],
       medIndex: [],
       squareIndex: [],
       smallIndex: [],
       tinyIndex: []
     }
]

export const logoArray = {
    images: logos,
    imageIndex: [0,1,2,3,4,5,6,7],
    medIndex: [],
    smallIndex: [],
    videoIndex: [],
    medIndex: [],
    squareIndex: [],
    smallIndex: [],
    tinyIndex: [],
    videos: []
}

export const tshirtArray = [
    {
        images: tshirtDark,
        cover: dark_tshirt_cover,
        title: 'Darkspace',
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
    {
        images: tshirtGate,
        cover: gate_tshirt_cover,
        title: 'Ëmgalaï\'s Gate',
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
    {
        images: tshirtRib,
        cover: rib_tshirt_cover,
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

export const vinylArray = [
    {
        images: mongolito,
        cover: mongolito_cover,
        title: 'Mongolito',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2],
        videoIndex: [],
        squareIndex: [0,1],
        tinyIndex: []
    }
]

export const cdArray = [
    {
        images: rocketgum,
        cover: rocketgum_cover,
        title: 'Rocket Gum',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    }
]

export const cassetteArray = [
    {
        images: af,
        cover: af_cover,
        title: 'Accès de Faiblesse',
        text: "",
        medIndex: [],
        smallIndex: [2, 3, 4],
        videos: [],
        imageIndex: [0,1,2,3,4],
        videoIndex: [],
        squareIndex: [0,1],
        tinyIndex: []
    },
    {
        images: vaurien,
        cover: vaurien_cover,
        title: 'Vaurien',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2,3,4,5,6],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    }
]

// todo
// export const posterArray = {
//     images: posters,
//     medIndex: [],
//     smallIndex: [],
//     video: null
// }

export const othersArray = [
    {
        images: nespresso,
        cover: nespresso_cover,
        title: 'Nespresso',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2,3,4],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    }
]

export const visuIdArray = [
  {
      images: hifi,
      videos: [],
      cover: hifi_cover,
      title: 'Hifi Store',
      text: "Graphics for the Hifi store - Paris\n",
      imageIndex: [0,1,2,3,4,5],
      videoIndex: [],
      medIndex: [],
      squareIndex: [],
      smallIndex: [],
      tinyIndex: []
  },
  {
      images: rio,
      videos: [],
      cover: rio_cover,
      title: 'RIO',
      text: "This was my last year project of my graphic design studies at LISAA\nI redesigned all the graphics of the Rock in Opposition Festival taking place at Albi on an old industrial land\nThis is an underground festival about RIO music / progressive rock / Canterbury scene",
      imageIndex: [0,1,2,3,4,5,6,7,8],
      videoIndex: [],
      medIndex: [],
      squareIndex: [],
      smallIndex: [],
      tinyIndex: []
  },
  {
    images: penn,
    videos: [],
    cover: penn_cover,
    title: 'Penn Men',
    imageIndex: [0,1,2,3,4,5],
    videoIndex: [],
    medIndex: [1],
    squareIndex: [2,3,4,5],
    smallIndex: [],
    tinyIndex: []
  },
  {
    images: structure,
    videos: [],
    cover: structure_cover,
    title: 'Structure',
    imageIndex: [0,1,2,3,4,5],
    videoIndex: [],
    medIndex: [],
    squareIndex: [],
    smallIndex: [2,3,4],
    tinyIndex: []
  }
]

export const workArray = [
    {
        images: aluk,
        cover: aluk_cover,
        title: 'Aluk Todolo',
        text: "Poster / T-Shirt / Tote bag for the french blackened kraut rock band Aluk Todolo\n\nLimited screenprinted poster for the Lille show\nLimited to 25 copies",
        imageIndex: [0,1,2,3],
        videoIndex: [],
        medIndex: [],
        squareIndex: [1,2],
        smallIndex: [],
        tinyIndex: [],
        videos: []
    },
    {
        images: conan,
        cover: conan_cover,
        title: 'Conan',
        text: "'Guardians of Heaviness' merch for the UK caveman doom band Conan\n\nLimited 3 colors screenprinted poster for the french shows\nLimited to 50 copies",
        medIndex: [],
        videos: [],
        imageIndex: [0,1,2,3,4,5,6],
        videoIndex: [],
        squareIndex: [2,3,4,5],
        smallIndex: [],
        tinyIndex: []
    },
    {
        images: cult,
        cover: cult_cover,
        title: 'Cult Of Fire',
        text: "Limited screenprinted poster for the black metal band Cult of Fire playing at 'Feux de Beltane' festival\nInk made with pigments from indian traditional holi ceremony and spices\nPigments are mixed with water from Gange river\nHomemade paper made by hand in Nepal\n\nThanks to Capitaine Max for those ingredients",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2,3,4],
        videoIndex: [],
        squareIndex: [1,2,3,4],
        tinyIndex: []
    },
    {
        images: darkspace,
        cover: darkspace_cover,
        title: 'Darkspace',
        text: "Limited screenprinted poster for the industrial black metal band Darkspace playing at 'Feux de Beltane' festival\nPoster incrusted with meteorite powder\nProcess on the video\nLimited to 40 copies",
        medIndex: [],
        smallIndex: [],
        videos: ['BTH4pOOHyug'],
        imageIndex: [0,1,2,3,4,5],
        videoIndex: [6],
        squareIndex: [1,2,3,4],
        tinyIndex: []
    },
    {
        images: doom,
        cover: doom_cover,
        title: 'Doom',
        text: "Screenprinted poster for the UK crust legends Doom\nSpecial ink mixed with ashes of a tear gas grenade puck, found during a 'gilet jaune' protest.\nProcess on the video\nLimited to 50 copies\nAnarchy, Equality and fuck police brutality and Macron fuckin' corrupted system",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2],
        videoIndex: [],
        squareIndex: [1,2],
        tinyIndex: []
    },
    {
        images: escarion,
        cover: escarion_cover,
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
        images: glazart,
        cover: glazart_cover,
        title: 'Glazart',
        text: "Artworks for the night club Glazart, porte de la Villette - Paris",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2,3,4,5],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: [0,1,2,3,4,5]
    },
    {
        images: goblin,
        cover: goblin_cover,
        title: 'Goblin',
        text: "Graphics for the special show of legendary italian progressive rock band Goblin, playing at Le Flow - Paris\nFlyer / collector tickets / coasters and limited gatefold screenprinted poster\nProcess on the video made by Guillaume Quincy",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2,3,4,5,6],
        videoIndex: [],
        squareIndex: [3,4,5,6],
        tinyIndex: []
    },
    {
        images: godflesh,
        cover: godflesh_cover,
        title: 'Godflesh',
        text: "Limited screenprinted poster for the UK industrial gods Godflesh playing at Roadburn festival in 2018\nPoster laminated with aluminum paper\n Limited to 55 copies",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2,3],
        videoIndex: [],
        squareIndex: [1,2],
        tinyIndex: []
    },
    {
        images: king,
        cover: king_cover,
        title: 'King Dude',
        text: "Limited screenprinted poster for the US dark folk band King Dude\nPoster laminated with real snake skin\nDesign reused for the french show at 'La Plage de Glazart'\nProcess on the video made by Guillaume Quincy\nLimited to 50 copies",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2,3,4],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    },
    {
        images: metalorgie,
        cover: metalorgie_cover,
        title: 'Metalorgie Fest',
        text: "Designs for the French webzine Metalorgie's Festival\nLogo / flyers / ads / limited screenprinted poster\nLimited to 30 copies",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2,3,4,5,6,7,8],
        videoIndex: [],
        squareIndex: [0,1],
        tinyIndex: []
    },
    {
        images: mysticum,
        cover: mysticum_cover,
        title: 'Mysticum',
        text: "Designs for the show of the Norwegian industrial black metal pioneers Mysticum playing at Le Flow - Paris\nFlyers / exclusive t-shirt / screenprinted poster limited to 30 copies\n\nDesign used for Headbang Brewery who made a beer especially for the show",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2,3,4,5,6,7,8,9],
        videoIndex: [],
        squareIndex: [0,1],
        tinyIndex: []
    },
    {
        images: sunn,
        cover: sunn_cover,
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
        cover: ulver_cover,
        title: 'Ulver',
        text: "Limited screenprinted poster for 'The Assassination of Julius Caesar' tour of the Norwegian band Ulver\nLimited to 80 copies and incrusted with real bay leaves\n\nProcess on the video by Guillaume Quincy",
        medIndex: [],
        smallIndex: [],
        videos: ['HrqhgHYFM8k'],
        imageIndex: [0,1,2,3,4,5],
        videoIndex: [6],
        squareIndex: [1,2,3,4],
        tinyIndex: []
    },
    {
        images: urbanfest,
        cover: urbanfest_cover,
        title: 'Urban Fest',
        text: "",
        medIndex: [],
        smallIndex: [],
        videos: [],
        imageIndex: [0,1,2,3,4,5],
        videoIndex: [],
        squareIndex: [],
        tinyIndex: []
    }
]
