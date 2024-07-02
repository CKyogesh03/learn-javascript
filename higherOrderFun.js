function hof(a){
        return a;
    }
    console.log(hof(function(){return 10}()))
    
    function hof(callback){
        console.log( callback);
    }
    let x=hof(function(a,b){return a+b}(10,5));
    console.log(x)
    
    function hof(x){
      console.log(x)
    }
    hof(add(5,5));
    hof(sub(10,5))
    
    function add(a,b){
        return a+b
    }
    function sub(a,b){
        return a-b;
    }