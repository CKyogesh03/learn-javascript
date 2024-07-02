var a=10;
let b="hi";
const c=true;
console.log(a,b,c)
function x(){
    var user="Sam";
    let company="google";
    const sal=20000;
    console.log(user,company,sal);
    function y(){
        console.log(a,b,c)
        console.log(user,company,sal);
        var num=100000;
        console.log(num)
        function z(){
            console.log(user)
            console.log(num)
        }
        z()
    }
    y()
}
x();