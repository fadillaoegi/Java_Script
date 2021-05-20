alert('Hallo Minna-san!!');

console.log('Gojou Satoru');
var fadil = 'Keiko';

    console.log('Nama saya adalah ' + fadil);

var d = prompt('silahkan isi Nim');

confirm('apakah anda yakin Nim anda sudah benar ?');

alert('Nim anda adalah ' + d);

// var jml = 10,
//     no  = 1;

// while(no <= 13) {

//     if (no == 5) {

//         console.log('Ini adalah angkot No.'+ no +' Rusak');

//     } else if (no == 7) {

//         console.log('Ini adalah angkot No.'+ no +' Rusak');

//     } else {
//         console.log('Ini adalah angkot No.'+ no +' Lancar');
//     }

//     no++
// }


// for (var c = 7; c <= 13; c++) {

//     console.log('Ini adalah angkot No.'+ c +' Rusak');

// }

var qustion = true;

while (qustion) {

    var comp    = Math.random();
    var player  = prompt('Silahkan pilih : \n 1.Batu\n 2.Gunting\n 3.Kertas'); 
    var put     = '';

        
        if (comp <= 0.67) {

            comp = 'kertas';
        
        } else if (comp >= 0.67 && comp <= 0.97) {

            comp = 'batu'

            
        } else {

            comp = 'gunting';

        }


            if (player == comp) {

                put = 'DRAW'; 

                alert ('Anda melilih ' + player + ', komputer memilih ' + comp + '\n maka Anda ' + put);
                
            } else if (player == 'batu') {

                put = (comp == 'gunting') ? 'WIN' : 'LOSE' ;
                

            } else if (player == 'kertas') {

                put = (comp == 'batu') ? 'WIN' : 'LOSE' ;
                alert ('Anda melilih ' + player + ', komputer memilih ' + comp + '\n maka Anda ' + put);

            } else if (player == 'gunting') {

                put = (comp == 'kertas') ? 'WIN' : 'LOSE';
                alert ('Anda melilih ' + player + ', komputer memilih ' + comp + '\n maka Anda ' + put);
            } else {

                alert ('Maaf yang anda inputkana salah!')

            }


           qustion =  confirm ('Play Again ?');
        
    }
