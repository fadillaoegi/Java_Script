function tambah () {

    var total = 0;

    for (var i = 0; i < arguments.length; i++) {

        total += arguments[i];
        
    }

    return total;

}

// var perom = parseInt(prompt('Silahkan masukan Nilainya : '));

var eksekyut = tambah (1,2,3,4,5,6,7);

console.log(eksekyut);