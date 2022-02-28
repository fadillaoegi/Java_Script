// Scope Function

function Scope () {

    for (let index = 0; index < array.length; index++) {
        
        console.log(index);
        
    }

}

Scope();




// Anonymous Function Scope
(function(){

    for (let index = 0; index < array.length; index++) {
        
        console.log(index);
        
    }

}());