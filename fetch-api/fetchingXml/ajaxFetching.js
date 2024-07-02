
function fetchTitle(){
   
    let response = new XMLHttpRequest();
    response.open("GET","https://api.github.com/users");
    response.onloadend=function(){
        let data=JSON.parse(response.responseText);
        let store=document.getElementById("storeData");
        [...data].map(title=>{
        store.innerHTML+=`<img src=${title.avatar_url}>
        <h1>${title.login}</h1>`})
    }
    response.send();
}
fetchTitle();