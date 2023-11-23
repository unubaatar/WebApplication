// uunuu
// const apiUrl = "https://api.jsonbin.io/v3/b/654f4bb354105e766fce7c86"

// amirda
//const apiUrl = "https://api.jsonbin.io/v3/b/655d6c2b0574da7622ca003f" 

// haliunaa
const apiUrl = "https://api.jsonbin.io/v3/b/655d82ba54105e766fd367c6"

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
  let newUrl = nowUrl.origin;
  window.location.href = newUrl + "/shopping.html";
}


// animeList = [
//     {
//         "name": "Bleach",
//         "releasedDate": 2003,
//         "totalEpisode": 366,
//         "totalDuration": 5400,
//         "category": [
//             "Action",
//             "Shonen",
//             "Fight"
//         ],
//         "songType": "Rock",
//         "malRank": 255,
//         "animeImg": "https://i.ibb.co/XXWSzXY/bleach.png",
//         "views": 11111
//     },
//     {
//         "name": "One Piece",
//         "releasedDate": 1999,
//         "totalEpisode": 1000,
//         "totalDuration": 15000,
//         "category": [
//             "Adventure",
//             "Shonen",
//             "Pirate"
//         ],
//         "songType": "Pop",
//         "malRank": 4,
//         "animeImg": "https://i.ibb.co/THCq70F/one-piece.jpg",
//         "views": 8530
//     },
//     {
//         "name": "Naruto",
//         "releasedDate": 2002,
//         "totalEpisode": 220,
//         "totalDuration": 3300,
//         "category": [
//             "Action",
//             "Shonen",
//             "Ninja"
//         ],
//         "songType": "Hip-Hop",
//         "malRank": 71,
//         "animeImg": "https://i.ibb.co/7S8w68z/naruto.jpg",
//         "views": 2354
//     },
//     {
//         "name": "Attack on Titan",
//         "releasedDate": 2013,
//         "totalEpisode": 75,
//         "totalDuration": 1125,
//         "category": [
//             "Action",
//             "Dark Fantasy",
//             "Mystery"
//         ],
//         "songType": "Orchestral",
//         "malRank": 6,
//         "animeImg": "https://i.ibb.co/QFSj2Hc/aot.jpg",
//         "views": 1111
//     },
//     {
//         "name": "Death Note",
//         "releasedDate": 2006,
//         "totalEpisode": 37,
//         "totalDuration": 555,
//         "category": [
//             "Mystery",
//             "Psychological",
//             "Supernatural"
//         ],
//         "songType": "Classical",
//         "malRank": 12,
//         "animeImg": "https://i.ibb.co/nr187Qs/deathnote.jpg",
//         "views": 899
//     },
//     {
//         "name": "Fullmetal Alchemist: Brotherhood",
//         "releasedDate": 2009,
//         "totalEpisode": 64,
//         "totalDuration": 960,
//         "category": [
//             "Action",
//             "Adventure",
//             "Fantasy"
//         ],
//         "songType": "Orchestral",
//         "malRank": 1,
//         "animeImg": "https://i.ibb.co/rMtmcMh/fma-bh.png",
//         "views": 1684
//     },
//     {
//         "name": "Dragon Ball Z",
//         "releasedDate": 1989,
//         "totalEpisode": 291,
//         "totalDuration": 4365,
//         "category": [
//             "Action",
//             "Adventure",
//             "Superpower"
//         ],
//         "songType": "Rock",
//         "malRank": 135,
//         "animeImg": "https://i.ibb.co/7NFJvSZ/dbz.jpg",
//         "views": 500
//     },
//     {
//         "name": "One Punch Man",
//         "releasedDate": 2015,
//         "totalEpisode": 24,
//         "totalDuration": 360,
//         "category": [
//             "Action",
//             "Comedy",
//             "Superhero"
//         ],
//         "songType": "J-Pop",
//         "malRank": 17,
//         "animeImg": "https://i.ibb.co/gRdGqkV/one-punch.jpg",
//         "views": 632
//     },
//     {
//         "name": "Hunter x Hunter",
//         "releasedDate": 2011,
//         "totalEpisode": 148,
//         "totalDuration": 2220,
//         "category": [
//             "Action",
//             "Adventure",
//             "Fantasy"
//         ],
//         "songType": "Orchestral",
//         "malRank": 7,
//         "animeImg": "https://i.ibb.co/5jkdRnK/HxH.jpg",
//         "views": 2300
//     },
//     {
//         "name": "My Hero Academia",
//         "releasedDate": 2016,
//         "totalEpisode": 113,
//         "totalDuration": 1695,
//         "category": [
//             "Action",
//             "Superpower",
//             "School"
//         ],
//         "songType": "J-Pop",
//         "malRank": 5,
//         "animeImg": "https://i.ibb.co/t8hc46V/my-Heroace.jpg",
//         "views": 874
//     },
//     {
//         "name": "Cowboy Bebop",
//         "releasedDate": 1998,
//         "totalEpisode": 26,
//         "totalDuration": 390,
//         "category": [
//             "Action",
//             "Sci-Fi",
//             "Space"
//         ],
//         "songType": "Jazz",
//         "malRank": 22,
//         "animeImg": "https://i.ibb.co/vcKMV0f/cowboy.jpg",
//         "views": 112
//     },
//     {
//         "name": "Demon Slayer",
//         "releasedDate": 2019,
//         "totalEpisode": 26,
//         "totalDuration": 390,
//         "category": [
//             "Action",
//             "Supernatural",
//             "Demons"
//         ],
//         "songType": "Orchestral",
//         "malRank": 2,
//         "animeImg": "https://i.ibb.co/4MRzMQ5/demon-slayer.jpg",
//         "views": 447
//     },
//     {
//         "name": "Steins Gate",
//         "releasedDate": 2011,
//         "totalEpisode": 24,
//         "totalDuration": 360,
//         "category": [
//             "Sci-Fi",
//             "Thriller",
//             "Time Travel"
//         ],
//         "songType": "Electronic",
//         "malRank": 3,
//         "animeImg": "https://i.ibb.co/sQHM0PD/steins-gate.jpg",
//         "views": 789
//     },
//     {
//         "name": "Neon Genesis Evangelion",
//         "releasedDate": 1995,
//         "totalEpisode": 26,
//         "totalDuration": 390,
//         "category": [
//             "Mecha",
//             "Psychological",
//             "Sci-Fi"
//         ],
//         "songType": "Classical",
//         "malRank": 25,
//         "animeImg": "https://i.ibb.co/v11QfzJ/neon-genises.jpg",
//         "views": 456
//     },
//     {
//         "name": "Fairy Tail",
//         "releasedDate": 2009,
//         "totalEpisode": 175,
//         "totalDuration": 2625,
//         "category": [
//             "Adventure",
//             "Fantasy",
//             "Magic"
//         ],
//         "songType": "Pop",
//         "malRank": 42,
//         "animeImg": "https://i.ibb.co/dGSKB6m/dairy-tail",
//         "views": 235
//     },
//     {
//         "name": "Fairy Tail",
//         "releasedDate": 2009,
//         "totalEpisode": 175,
//         "totalDuration": 2625,
//         "category": [
//             "Adventure",
//             "Fantasy",
//             "Magic"
//         ],
//         "songType": "Pop",
//         "malRank": 42,
//         "animeImg": "https://i.ibb.co/dGSKB6m/dairy-tail.jpg",
//         "views": 235
//     },
//     {
//         "name": "Sword Art Online",
//         "releasedDate": 2012,
//         "totalEpisode": 97,
//         "totalDuration": [
//             "Action",
//             "Adventure",
//             "Game"
//         ],
//         "category": [
//             "Adventure",
//             "Fantasy",
//             "Magic"
//         ],
//         "songType": "J-Pop",
//         "malRank": 42,
//         "animeImg": "https://i.ibb.co/Pr9yjmL/sword-art-online.jpg",
//         "views": 112
//     }
//   ]