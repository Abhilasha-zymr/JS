//it is combination of function bundle together enclosed
// with surrounding state of lexical environment OR
//it access to to an outer function scope from 
//innner function in js closure are created every time function is created
debugger
 function adder(num){
    function add(b){
        console.log(num+b);
    }
    return add;
 }
 const addTo5=adder(5);
 const addTo10=adder(10);

 addTo5(3);
 addTo10(3);