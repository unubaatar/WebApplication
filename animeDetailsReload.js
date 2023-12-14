// uunuu
// const apiUrl = "https://api.jsonbin.io/v3/b/654f4bb354105e766fce7c86"

// amirda
const apiUrl = "https://api.jsonbin.io/v3/b/655d6c2b0574da7622ca003f" 

// haliunaa
// const apiUrl = "https://api.jsonbin.io/v3/b/655d82ba54105e766fd367c6"

// ene functionoor page ee shinechlene parameteree huleej avaad info haruulas section doo bicsn htmlee renderlesen 
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const animeId = urlParams.get("id");
    fetch(apiUrl).then(response => response.json()).then(data=> {
        let animes = data.record;
        const animeDetails = getAnimeById(animeId, animes);
        const animeInfoSection = document.getElementById("renderAnimeInfo");
        animeInfoSection.innerHTML = `
        <section class="animeInfo" id="renderAnimeInfo">
              <h3>Дэлгэрэнгүй мэдээлэл</h3>
              <article class="animeDetails">
                <img class="animeImage" src="${animeDetails.animeImg}" alt="Anime img" />
                <ul>
                  <li>
                    <i class="fa-solid fa-pen"></i>
                    Нэр: <span><strong id="animeName">${animeDetails.name}</strong></span>
                  </li>
                  <li>
                    <i class="fa-solid fa-calendar"></i>
                    Гарсан он: <span><strong>${animeDetails.releasedDate}</strong></span>
                  </li>
                  <li>
                    <i class="fa-solid fa-arrow-down-1-9"></i>
                    Анги: <span><strong>${animeDetails.totalEpisode}</strong></span>
                  </li>
                  <li>
                    <i class="fa-solid fa-clock"></i>
                    Нийт хугацаа: <span><strong>${animeDetails.totalDuration}</strong></span>
                  </li>
                  <li>
                    <i class="fa-solid fa-list-ul"></i>
                    Төрөл: <span><strong>${animeDetails.category}</strong></span>
                  </li>
                  <li>
                    <i class="fa-solid fa-music"></i>
                    Дууны төрөл: <span><strong>${animeDetails.songType}</strong></span>
                  </li>
                  <li>
                    <i class="fa-solid fa-ranking-star"></i>
                    MyAnimeList Rank: <span><strong>${animeDetails.malRank}</strong></span>
                  </li>  
                </ul>
                </article>
                <article class="watchAccessBuySection">
                  <button class="playButton addComment"><i class="fa-solid fa-play" style="color: #042834;"></i><p>PLAY</p></button>
                  <ul>
                    <li><i class="fa-regular fa-star" style="color: #fbff00"></i></li>
                    <li><i class="fa-regular fa-star" style="color: #fbff00"></i></li>
                    <li><i class="fa-regular fa-star" style="color: #fbff00"></i></li>
                    <li><i class="fa-regular fa-star" style="color: #fbff00"></i></li>
                    <li><i class="fa-regular fa-star" style="color: #fbff00"></i></li>
                  </ul>
                  <button class="addComment" onclick = "moveToShoppingPage()"" ><i class="fa-solid fa-cart-shopping"></i><p>Худалдан авах</p> </button>
              </article>
        `;
    })
});

// enuuugeer jsonoo oosoo anime name r ni anime infogo avsan 
function getAnimeById(animeId , list) {
    return list.find(anime => anime.id == animeId);
}

function moveToShoppingPage() {
  const nowUrl =new URL(window.location.href);
  nowUrl.search="";
  let newUrl = nowUrl.href.replace("animeDetails.html" , "shopping.html")
  console.log(newUrl);
  window.location.href = newUrl;
}
