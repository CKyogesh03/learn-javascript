function demo(){
    return new Promise((resolve)=>
    setTimeout(()=>{
        resolve("promise printing")
    },3000)
    )}