s1={name:"yogesh",
    age:23,
    mobile:{m1:6382501973,m2:9876543210}
}

function contactPerson({name,mobile:{m1}}){
    console.log("contacting ",name,"through ",m1)
}

contactPerson(s1) // contacting  yogesh through  6382501973