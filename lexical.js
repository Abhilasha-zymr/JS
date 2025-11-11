//scope whwre you can access specific variable or fnction inside the code 

//lexical scope  whenever execution context created c is lexically present in a  
//means function inside function where that code is present 

function a(){
    //console.log(b);
    var b=10;
    
    function c(){
        var e=30;
        console.log(b);
        console.log(e);
    }
    c()
}

a();
