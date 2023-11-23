// uunuu
// const apiUrl = "https://api.jsonbin.io/v3/b/654f4bb354105e766fce7c86"

// amirda
//const apiUrl = "https://api.jsonbin.io/v3/b/655d6c2b0574da7622ca003f" 

// haliunaa
const apiUrl = "https://api.jsonbin.io/v3/b/655d82ba54105e766fd367c6"

animeList = [
  {
    "name": "Bleach",
    "releasedDate": 2003,
    "totalEpisode": 366,
    "totalDuration": 5400,
    "category": [
      "Action",
      "Shonen",
      "Fight"
    ],
    "songType": "Rock",
    "malRank": 255,
    "animeImg": "https://i.ibb.co/XXWSzXY/bleach.png",
    "views": 11111,
    "id": 1
  },
  {
    "name": "One Piece",
    "releasedDate": 1999,
    "totalEpisode": 1000,
    "totalDuration": 15000,
    "category": [
      "Adventure",
      "Shonen",
      "Pirate"
    ],
    "songType": "Pop",
    "malRank": 4,
    "animeImg": "https://i.ibb.co/THCq70F/one-piece.jpg",
    "views": 8530,
    "id": 2
  },
  {
    "name": "Naruto",
    "releasedDate": 2002,
    "totalEpisode": 220,
    "totalDuration": 3300,
    "category": [
      "Action",
      "Shonen",
      "Ninja"
    ],
    "songType": "Hip-Hop",
    "malRank": 71,
    "animeImg": "https://i.ibb.co/7S8w68z/naruto.jpg",
    "views": 2354,
    "id": 3
  },
  {
    "name": "Attack on Titan",
    "releasedDate": 2013,
    "totalEpisode": 75,
    "totalDuration": 1125,
    "category": [
      "Action",
      "Dark Fantasy",
      "Mystery"
    ],
    "songType": "Orchestral",
    "malRank": 6,
    "animeImg": "https://i.ibb.co/QFSj2Hc/aot.jpg",
    "views": 1111,
    "id": 4
  },
  {
    "name": "Death Note",
    "releasedDate": 2006,
    "totalEpisode": 37,
    "totalDuration": 555,
    "category": [
      "Mystery",
      "Psychological",
      "Supernatural"
    ],
    "songType": "Classical",
    "malRank": 12,
    "animeImg": "https://i.ibb.co/nr187Qs/deathnote.jpg",
    "views": 899,
    "id": 5
  },
  {
    "name": "Fullmetal Alchemist: Brotherhood",
    "releasedDate": 2009,
    "totalEpisode": 64,
    "totalDuration": 960,
    "category": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "songType": "Orchestral",
    "malRank": 1,
    "animeImg": "https://i.ibb.co/rMtmcMh/fma-bh.png",
    "views": 1684,
    "id": 6
  },
  {
    "name": "Dragon Ball Z",
    "releasedDate": 1989,
    "totalEpisode": 291,
    "totalDuration": 4365,
    "category": [
      "Action",
      "Adventure",
      "Superpower"
    ],
    "songType": "Rock",
    "malRank": 135,
    "animeImg": "https://i.ibb.co/7NFJvSZ/dbz.jpg",
    "views": 500,
    "id": 7
  },
  {
    "name": "One Punch Man",
    "releasedDate": 2015,
    "totalEpisode": 24,
    "totalDuration": 360,
    "category": [
      "Action",
      "Comedy",
      "Superhero"
    ],
    "songType": "J-Pop",
    "malRank": 17,
    "animeImg": "https://i.ibb.co/gRdGqkV/one-punch.jpg",
    "views": 632,
    "id": 8
  },
  {
    "name": "Hunter x Hunter",
    "releasedDate": 2011,
    "totalEpisode": 148,
    "totalDuration": 2220,
    "category": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "songType": "Orchestral",
    "malRank": 7,
    "animeImg": "https://i.ibb.co/5jkdRnK/HxH.jpg",
    "views": 2300,
    "id": 9
  },
  {
    "name": "My Hero Academia",
    "releasedDate": 2016,
    "totalEpisode": 113,
    "totalDuration": 1695,
    "category": [
      "Action",
      "Superpower",
      "School"
    ],
    "songType": "J-Pop",
    "malRank": 5,
    "animeImg": "https://i.ibb.co/t8hc46V/my-Heroace.jpg",
    "views": 874,
    "id": 10
  },
  {
    "name": "Cowboy Bebop",
    "releasedDate": 1998,
    "totalEpisode": 26,
    "totalDuration": 390,
    "category": [
      "Action",
      "Sci-Fi",
      "Space"
    ],
    "songType": "Jazz",
    "malRank": 22,
    "animeImg": "https://i.ibb.co/vcKMV0f/cowboy.jpg",
    "views": 112,
    "id": 11
  },
  {
    "name": "Demon Slayer",
    "releasedDate": 2019,
    "totalEpisode": 26,
    "totalDuration": 390,
    "category": [
      "Action",
      "Supernatural",
      "Demons"
    ],
    "songType": "Orchestral",
    "malRank": 2,
    "animeImg": "https://i.ibb.co/4MRzMQ5/demon-slayer.jpg",
    "views": 447,
    "id": 12
  },
  {
    "name": "Steins Gate",
    "releasedDate": 2011,
    "totalEpisode": 24,
    "totalDuration": 360,
    "category": [
      "Sci-Fi",
      "Thriller",
      "Time Travel"
    ],
    "songType": "Electronic",
    "malRank": 3,
    "animeImg": "https://i.ibb.co/sQHM0PD/steins-gate.jpg",
    "views": 789,
    "id": 13
  },
  {
    "name": "Neon Genesis Evangelion",
    "releasedDate": 1995,
    "totalEpisode": 26,
    "totalDuration": 390,
    "category": [
      "Mecha",
      "Psychological",
      "Sci-Fi"
    ],
    "songType": "Classical",
    "malRank": 25,
    "animeImg": "https://i.ibb.co/v11QfzJ/neon-genises.jpg",
    "views": 456,
    "id": 14
  },
  {
    "name": "Fairy Tail",
    "releasedDate": 2009,
    "totalEpisode": 175,
    "totalDuration": 2625,
    "category": [
      "Adventure",
      "Fantasy",
      "Magic"
    ],
    "songType": "Pop",
    "malRank": 42,
    "animeImg": "https://i.ibb.co/dGSKB6m/dairy-tail",
    "views": 235,
    "id": 15
  },
  {
    "name": "Fairy Tail",
    "releasedDate": 2009,
    "totalEpisode": 175,
    "totalDuration": 2625,
    "category": [
      "Adventure",
      "Fantasy",
      "Magic"
    ],
    "songType": "Pop",
    "malRank": 42,
    "animeImg": "https://i.ibb.co/dGSKB6m/dairy-tail.jpg",
    "views": 235,
    "id": 16
  },
  {
    "name": "Sword Art Online",
    "releasedDate": 2012,
    "totalEpisode": 97,
    "totalDuration": [
      "Action",
      "Adventure",
      "Game"
    ],
    "category": [
      "Adventure",
      "Fantasy",
      "Magic"
    ],
    "songType": "J-Pop",
    "malRank": 42,
    "animeImg": "https://i.ibb.co/Pr9yjmL/sword-art-online.jpg",
    "views": 112,
    "id": 17
  }
]

const carousels = [
  {
  source: "https://i.ibb.co/8bYT85P/j-test.png",
  description: "J-TEST шалгалтын тов гарлаа. "
  },
  {
    source: "https://i.ibb.co/yhwdfRt/monboshu.png",
    description: "Монбошү тэтгэлгт бүртгүүлэгчидийн анхааралд."
  },
  {
      source: "https://i.ibb.co/sHGpqYf/040820231691143972-1458689631.webp",
      description: "Монгол япон соёлын өдөрлөг болно."
  },
] 

changeCarouselImageRight = function() {
  let nowImage = document.getElementById("carouselImage").src;
  for(let i = 0 ; i < carousels.length ; i++) {
    if(nowImage === carousels[i].source && i !== carousels.length -1) {
      document.getElementById("carouselImage").src = carousels[i+1].source
      document.getElementById("carouselDescription").innerText = carousels[i+1].description;
      break;
    } else if(nowImage === carousels[i].source &&  i === carousels.length -1) {
      document.getElementById("carouselImage").src = carousels[0].source;
      document.getElementById("carouselDescription").innerText = carousels[0].description;
      break;
    }
  }
}

changeCarouselImageLeft = function() {
  let nowImage = document.getElementById("carouselImage").src;
  for(let i = 0 ; i < carousels.length ; i++) {
    if(nowImage === carousels[i].source && i !== 0) {
      document.getElementById("carouselImage").src = carousels[i-1].source
      document.getElementById("carouselDescription").innerText = carousels[i-1].description;
      break;
    } else if(nowImage === carousels[i].source &&  i === 0) {
      document.getElementById("carouselImage").src = carousels[carousels.length-1].source
      document.getElementById("carouselDescription").innerText = carousels[carousels.length-1].description;
      break;
    }
  }
}



class Anime {
  constructor(animeListItem) {
    this.name = animeListItem.name;
    this.releasedDate = animeListItem.releasedDate;
    this.totalEpisode = animeListItem.totalEpisode;
    this.animeImg = animeListItem.animeImg;
    this.malRank = animeListItem.malRank;
    this.category = animeListItem.category;
    this.id = animeListItem.id;
  }

  getCatogeries = function() {
    let categoryList = "";
    for(let i = 0 ; i < this.category.length ; i++) {
        if(i !== this.category.length -1 ) {
            categoryList += `${this.category[i]}, `;
        } else {
            categoryList += `${this.category[i]}`;
        }

    }
    return categoryList;
  }

  render = function () {
    return `
        <li>
        <div class="anime-card">
          <div class="anime-card-inner anime-card-front">
            <img src="${this.animeImg}" alt="Recommended anime" />
          </div>
          <div class="anime-card-inner anime-card-back">
            <div class="anime-card-back-content">
              <p><strong>Нэр: </strong>${this.name}</p>
              <p><strong>Гарсан он: </strong>${this.releasedDate}</p>
              <p><strong>Ангийн тоо: </strong>${this.totalEpisode}</p>
              <p><strong>Төрөл: <br></strong>${this.getCatogeries()}</p>
            </div>
            <button class="anime-card-button" onclick= "moveToAnimeDetailPage('${this.id}')" >Дэлгэрэнгүй</button>
          </div>
        </div>
      </li>
        `;
  };
}

class App {
  constructor(targetId) {
    this.target = targetId;
    this.apiUrl = apiUrl;
  }

  init = function(sortType) {
    fetch(this.apiUrl).then(response => response.json()).then(data => {
      let animes = data.record;
      const trgt = document.getElementById(this.target);
      let sortedAnimeList = this.sortAnimeType(animes ,sortType);
      let count = 0;
      for (const anime of sortedAnimeList) {
        if (count === 6) {
          break;
        }
        const renderedAnime = new Anime(anime);
        trgt.insertAdjacentHTML("beforeend", renderedAnime.render());
        count++;
      }
    })
  }

  sortAnimeType = function(list ,sortType) {
    switch(sortType) {
      case "RecentlyAdded": return this.sortByDate(list);
      case "MalRank": return this.sortByMalRank(list);
      case "MostViews": return this.sortByViews(list);
    }
  }

  sortByDate = function(list) {
    const sortedArray = list.sort((anime1, anime2) => {
      return anime2.releasedDate - anime1.releasedDate;
    });
    return sortedArray;
  };

  sortByViews = function(list) {
    const sortedArray = list.sort((anime1, anime2) => {
      return anime2.views - anime1.views;
    });
    return sortedArray;
  };

  sortByMalRank = function(list) {
    const sortedArray = list.sort((anime1, anime2) => {
      return anime1.malRank - anime2.malRank;
    });
    return sortedArray;
  };
}

// enuuger anime iin delgerengu page iihe dataga url aar damjulad avn deer render dree onclick der ni zaagd ugcin
moveToAnimeDetailPage = function(id) {
  console.log("hello");
  let currentURL = window.location.href;
  let newUrl = currentURL.replace("index.html" , "animeDetails.html");
  newUrl += `?id=${id}`
  window.location.href = newUrl;
}
