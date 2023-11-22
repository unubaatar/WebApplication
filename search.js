const apiUrl = "https://api.jsonbin.io/v3/b/655d6c2b0574da7622ca003f" 
 async function doSearch(search){
    const result = await fetch(apiUrl).then(response => response.json()).then(data=> {
        let animes = data.record;})
 }