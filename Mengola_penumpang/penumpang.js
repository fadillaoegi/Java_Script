var penumpang = [];
var tambahPenumpang = function(nama, penumpang) {

// Jika Angkot kosong
    if (penumpang.length == 0) {
        
        // Memasukan Penumpang di array
        penumpang.push(nama);

        // keluar dari funnction dan mengembalikan  ke array
        return penumpang;

    } 

    else {

        // Menulusuri kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            
            if (penumpang[i] == undefined) {

                // Tambah Penumpang di kursi yang undefined
                penumpang[i] = nama;

                // keluar dari funnction dan mengembalikan ke array

                return penumpang;
                
            } // Jika Nama sudah ada
            else if ( penumpang[i] == nama ) {
        
                // Menampilkan pemberitahuan (melalui consol dan alert)
        
                alert(nama + " sudah ada dalam pesawat");
                console.log ( nama + " sudah ada di dalam pesawat");
        
                // keluar dari funnction dan mengembalikan ke array
        
                return penumpang;
                
            } else if ( i == penumpang.length - 1 ) {

                penumpang.push(nama);

                return penumpang;
                
            }
            
            // return penumpang;

        }

    }
    
}


var HapusPenumpang = function(nama, penumpang) {

    //jika angkot kosong
    if (penumpang.length == 0) {
        
        console.log('angkot masih kosong');
        //return penumpang;

    } else {

        for (var i = 0 ; i < penumpang.length; i++) {

            if (penumpang[i] == nama) {

                penumpang[i] = undefined;

                console.log(nama + ' Telah di hapus dari maskapai');

                //return penumpang;
                
            } else if (i == penumpang.length - 1) {

                console.log(nama + ' Tidak terdaftar di penerbangan');
                
            }
            
            
        }

    }

    return penumpang;
        
    
}