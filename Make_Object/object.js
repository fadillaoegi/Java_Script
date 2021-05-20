// Membuat Object Biasa

var mhs = {

    nama : 'Nur Anisa Febriana',

    nim  : '19410100076',

    email : 'anisa@gmail.com', 

    hoby   : 'Tadarus'

};



// Membuat Object ( function declaration )

function DataMhs (nama, nim, email, hoby) {

    var mhs = {};

    mhs.nama    = nama;

    mhs.nim     = nim;

    mhs.email   = email;

    mhs.hoby    = hoby;

    return mhs;
    
};

var mhs_1 = DataMhs (

    'Fadil', '19410100076', '19410100076@dinamika.ac.id', 'Ngoding'

);


// Membuat Object ( Constructor )

function DataMhs1 (nama, nim, email, hoby) {

    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.hoby = hoby;
    
};

var mhs_2 = new DataMhs1 (

    'Wang-Jarim', '19410100076', 'jaring@gmail.com', 'jutek'  

);


// Study kasus Make Object




