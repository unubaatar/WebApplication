// uunuu
// const apiUrl = "https://api.jsonbin.io/v3/b/654f4bb354105e766fce7c86"

// amirda
const apiUrl = "https://api.jsonbin.io/v3/b/655d6c2b0574da7622ca003f" 

// haliunaa
// const apiUrl = "https://api.jsonbin.io/v3/b/655d82ba54105e766fd367c6"


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

  getCatogeries = function () {
    let categoryList = "";
    for (let i = 0; i < this.category.length; i++) {
      if (i !== this.category.length - 1) {
        categoryList += `${this.category[i]}, `;
      } else {
        categoryList += `${this.category[i]}`;
      }
    }
    return categoryList;
  };

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


let listCatogeries =  document.getElementById("categoryList").getElementsByTagName('li');
for(let list of listCatogeries) {
  list.addEventListener("click" , (event) => {
    let categoryType = event.target.textContent
    const nowUrl = new URL(window.location.href);
    let newUrl = nowUrl.origin; 
    newUrl += `${nowUrl.pathname}?category=${categoryType}`;
    window.location.href = newUrl;
  })
}

document.getElementById("animeSelection").addEventListener("change" , (event) => {
  const categoryType = event.target.value;
  const nowUrl = new URL(window.location.href);
  let newUrl = nowUrl.origin; 
  newUrl += `${nowUrl.pathname}?category=${categoryType}`;
  window.location.href = newUrl;
})


document.addEventListener("DOMContentLoaded" , async() => {
    let response = await fetch(apiUrl);
    let data = await response.json();
    let listOfAnime = await data.record;
    let urlParams = new URLSearchParams(window.location.search);
    let categoryType = urlParams.get("category");
    document.getElementById("filteredType").value = categoryType;
    let target = document.getElementById("filteredAnimeList");
    let selectedAnimes = listOfAnime.filter((anime) => anime.category.includes(categoryType));
    selectedAnimes.map((anime) => {
      const renderedAnime = new Anime(anime);
      target.insertAdjacentHTML("beforeend" , renderedAnime.render());
    })
})

// enuuger anime iin delgerengu page iihe dataga url aar damjulad avn deer render dree onclick der ni zaagd ugcin
moveToAnimeDetailPage = function(id) {
  let nowUrl = new URL(window.location.href);
  let newUrl = nowUrl.origin;
  newUrl += nowUrl.pathname;
  let lastUrl = newUrl.replace("filter.html", "animeDetails.html");
  lastUrl += `?id=${id}`
  window.location.href = lastUrl;
}


// const animeList = [
//   {
//     name: "Bleach",
//     releasedDate: 2003,
//     totalEpisode: 366,
//     totalDuration: 5400,
//     category: ["Action", "Shonen", "Fight"],
//     songType: "Rock",
//     malRank: 255,
//     animeImg: "https://i.ibb.co/XXWSzXY/bleach.png",
//     views: 11111,
//   },
//   {
//     name: "One Piece",
//     releasedDate: 1999,
//     totalEpisode: 1000,
//     totalDuration: 15000,
//     category: ["Adventure", "Shonen", "Pirate"],
//     songType: "Pop",
//     malRank: 4,
//     animeImg: "https://i.ibb.co/THCq70F/one-piece.jpg",
//     views: 8530,
//   },
//   {
//     name: "Naruto",
//     releasedDate: 2002,
//     totalEpisode: 220,
//     totalDuration: 3300,
//     category: ["Action", "Shonen", "Ninja"],
//     songType: "Hip-Hop",
//     malRank: 71,
//     animeImg: "https://i.ibb.co/7S8w68z/naruto.jpg",
//     views: 2354,
//   },
//   {
//     name: "Attack on Titan",
//     releasedDate: 2013,
//     totalEpisode: 75,
//     totalDuration: 1125,
//     category: ["Action", "Dark Fantasy", "Mystery"],
//     songType: "Orchestral",
//     malRank: 6,
//     animeImg: "https://i.ibb.co/QFSj2Hc/aot.jpg",
//     views: 1111,
//   },
//   {
//     name: "Death Note",
//     releasedDate: 2006,
//     totalEpisode: 37,
//     totalDuration: 555,
//     category: ["Mystery", "Psychological", "Supernatural"],
//     songType: "Classical",
//     malRank: 12,
//     animeImg: "https://i.ibb.co/nr187Qs/deathnote.jpg",
//     views: 899,
//   },
//   {
//     name: "Fullmetal Alchemist: Brotherhood",
//     releasedDate: 2009,
//     totalEpisode: 64,
//     totalDuration: 960,
//     category: ["Action", "Adventure", "Fantasy"],
//     songType: "Orchestral",
//     malRank: 1,
//     animeImg: "https://i.ibb.co/rMtmcMh/fma-bh.png",
//     views: 1684,
//   },
//   {
//     name: "Dragon Ball Z",
//     releasedDate: 1989,
//     totalEpisode: 291,
//     totalDuration: 4365,
//     category: ["Action", "Adventure", "Superpower"],
//     songType: "Rock",
//     malRank: 135,
//     animeImg: "https://i.ibb.co/7NFJvSZ/dbz.jpg",
//     views: 500,
//   },
//   {
//     name: "One Punch Man",
//     releasedDate: 2015,
//     totalEpisode: 24,
//     totalDuration: 360,
//     category: ["Action", "Comedy", "Superhero"],
//     songType: "J-Pop",
//     malRank: 17,
//     animeImg: "https://i.ibb.co/gRdGqkV/one-punch.jpg",
//     views: 632,
//   },
//   {
//     name: "Hunter x Hunter",
//     releasedDate: 2011,
//     totalEpisode: 148,
//     totalDuration: 2220,
//     category: ["Action", "Adventure", "Fantasy"],
//     songType: "Orchestral",
//     malRank: 7,
//     animeImg: "https://i.ibb.co/5jkdRnK/HxH.jpg",
//     views: 2300,
//   },
//   {
//     name: "My Hero Academia",
//     releasedDate: 2016,
//     totalEpisode: 113,
//     totalDuration: 1695,
//     category: ["Action", "Superpower", "School"],
//     songType: "J-Pop",
//     malRank: 5,
//     animeImg: "https://i.ibb.co/t8hc46V/my-Heroace.jpg",
//     views: 874,
//   },
//   {
//     name: "Cowboy Bebop",
//     releasedDate: 1998,
//     totalEpisode: 26,
//     totalDuration: 390,
//     category: ["Action", "Sci-Fi", "Space"],
//     songType: "Jazz",
//     malRank: 22,
//     animeImg: "https://i.ibb.co/vcKMV0f/cowboy.jpg",
//     views: 112,
//   },
//   {
//     name: "Demon Slayer",
//     releasedDate: 2019,
//     totalEpisode: 26,
//     totalDuration: 390,
//     category: ["Action", "Supernatural", "Demons"],
//     songType: "Orchestral",
//     malRank: 2,
//     animeImg: "https://i.ibb.co/4MRzMQ5/demon-slayer.jpg",
//     views: 447,
//   },
//   {
//     name: "Steins Gate",
//     releasedDate: 2011,
//     totalEpisode: 24,
//     totalDuration: 360,
//     category: ["Sci-Fi", "Thriller", "Time Travel"],
//     songType: "Electronic",
//     malRank: 3,
//     animeImg: "https://i.ibb.co/sQHM0PD/steins-gate.jpg",
//     views: 789,
//   },
//   {
//     name: "Neon Genesis Evangelion",
//     releasedDate: 1995,
//     totalEpisode: 26,
//     totalDuration: 390,
//     category: ["Mecha", "Psychological", "Sci-Fi"],
//     songType: "Classical",
//     malRank: 25,
//     animeImg: "https://i.ibb.co/v11QfzJ/neon-genises.jpg",
//     views: 456,
//   },
//   {
//     name: "Fairy Tail",
//     releasedDate: 2009,
//     totalEpisode: 175,
//     totalDuration: 2625,
//     category: ["Adventure", "Fantasy", "Magic"],
//     songType: "Pop",
//     malRank: 42,
//     animeImg: "https://i.ibb.co/dGSKB6m/dairy-tail.jpg",
//     views: 235,
//   },
//   {
//     name: "Sword Art Online",
//     releasedDate: 2012,
//     totalEpisode: 97,
//     totalDuration: 1455,
//     category: ["Action", "Adventure", "Game"],
//     songType: "J-Pop",
//     malRank: 32,
//     animeImg: "https://i.ibb.co/Pr9yjmL/sword-art-online.jpg",
//     views: 112,
//   },
// ];


// let listCatogeries =  document.getElementById("categoryList").getElementsByTagName('li');
// for(let category of listCatogeries) {
//     category.addEventListener("click", function (event) {
//         const clickedElement = event.target;
//         document.getElementById("filteredType").value = clickedElement.textContent;
//         let target = document.getElementById("filteredAnimeList");
//         while(target.hasChildNodes()) {
//           target.removeChild(target.firstChild)
//         }
//         fetch(apiUrl).then(response => response.json()).then(data => {
//           let animes = data.record;
//           for (const anime of animes) {
//             for (let i = 0; i < anime.category.length; i++) {
//               if (
//                 anime.category[i] === document.getElementById("filteredType").value
//               ) {
//                 const renderedAnime = new Anime(anime);
//                 target.insertAdjacentHTML("beforeend", renderedAnime.render());
//                 break;  
//               }
//             }
//           }
//         })
//       });
// }

// document.getElementById("animeSelection").addEventListener("change" , (event) => {
//   const selectedElement = event.target;
//   document.getElementById("filteredType").value = selectedElement.value;
//   let target = document.getElementById("filteredAnimeList");
//   while(target.hasChildNodes()) {
//     target.removeChild(target.firstChild);
//   }
//   fetch(apiUrl).then(response => response.json()).then(data => {
//     let animes = data.record;
//     for(const anime of animes) {
//       for(let i = 0 ; i < anime.category.length ; i++) {
//         if(anime.category[i] === selectedElement.value) {
//           const renderedAnime = new Anime(anime);
//           target.insertAdjacentHTML("beforeend" , renderedAnime.render());
//           break;
//         }
//       }
//     }
//   })
// })
