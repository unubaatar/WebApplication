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
