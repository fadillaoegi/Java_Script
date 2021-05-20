// Contoh Rekursif
function rekursif(r) {

    // Base case
    if ( r===0 ) {

        return;
        
    }

    console.log(r);
    rekursif(r-1)
    
    
}

rekursif(9);

// Contoh Implementasi Rekursif dengan membuat program penyelesaian "Faktorial"

// Semua looping dapat di buat rekursif, tapi tidak sebaliknya

// dengan rekursif

// function faktorial(f) {

//     if (f === 0) {

//         return;
        
//     }

//     console.log(f);
//     return f * faktorial(f-1);
    
// }


// dengan Looping
// function faktorials(f) {

//     var hasil = 1;

//     for (var i = f; i > 0; i--) {

//         hasil += i;
        
//     }

//     return hasil;
    
// }

// faktorials(10);
