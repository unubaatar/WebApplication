const animeUrl = "https://api.jsonbin.io/v3/b/655d6c2b0574da7622ca003f"

async function getData() {
    let response = await fetch(animeUrl);
    let data = await response.json();
    console.log(data.record);
} 
getData();