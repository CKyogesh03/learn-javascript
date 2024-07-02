//PROMISE
// let p1=new Promise((resolve,reject)=>{
// })
// console.log(p1) //promise object is in pending state
// let p2=new Promise((resolve,reject)=>{
//     resolve("promise2 resolved")
// })
// console.log(p2) //promise object is in resolved state
// let p3=new Promise((resolve,reject)=>{
//     reject("promise 3 rejected")
// })
// console.log(p3) //promise object is in rejected state
//============================================================

//
let p1=new Promise((resolve,reject)=>{
    resolve("promise1 resolved")
})
let p2=new Promise((resolve,reject)=>{
    resolve("promise2 resolved")
})
let p3=new Promise((resolve,reject)=>{
    resolve("promise3 resolved")
})
Promise.all([p1,p2,p3])
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(final=>console.log("finally is printing"))

let p4=new Promise((resolve,reject)=>{
    reject("promise4 rejected")
})
Promise.any([p1,p2,p3,p4])
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(final=>console.log("finally is printing"))

//=========================================================================
let p5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise5 resolved")
    },3000)
})
let p6=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("promise6 rejected")
    },4000)
})
let p7=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise7 resolved")
    },4000)
});

Promise.race([p5,p6,p7])
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(final=>console.log("finally is printing"))

Promise.allSettled([p5,p6,p7])
.then(response=>console.log(response))
.catch(error=>console.log(error))
.finally(final=>console.log("finally is printing"))