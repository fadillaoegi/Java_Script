/*
Method pada array :

	push	= menambah  element  paling akhir pada array
	pop	    = menghapus element  paling akhir pada array
	shift	= menghapus element  paling awal  pada array
	unshift = menambah  element  paling awal  pada array

	slice	= mengiris data array untuk dijadikan array baru
	splice	= mengedit data secara flexibel pada array

    sort    = mengurutkan element
    filter  = mencari element banyak nilai dan mengembalikannya jadi array
    find    = mencari element satu nilai dan elementnya tidak lagi jadi array

*/

// Cara mengubah array menjadi string

var x = ['M','Fadil', 'Muhtarom', 'Laoegi'];

console.log(x.join());

// Cara mengubah array menjadi string dan mengubah separator nya

var y = ['M','Fadil', 'Muhtarom', 'Laoegi'];

console.log(y.join(' - '));

// foreach dapat di simpan di variabel tetapi tidak dapat di operasikan

var nominal = [1,2,3,4,5,6,7,8,9,10];

x.forEach(function (q, i) {

    console.log('Mahasiswa ke-' + (i+1) + ' Bernama ' + q);
    
});

// Map dapat di operasikan dan dapat di simpan di variabel

var map = nominal.map(function(q) {

    return q * 3;
    
});

console.log(map.join(' - '));

// Sort untuk mengurutkan

var angka = [4,2,5,7,4,3,9,6,8];

angka.sort();

console.log(angka.join(' - '));

y.sort();
console.log(y.join(' - '));

var angka1 = [1,2,1,56,6,7,23,11,22]

angka1.sort(function(a,b) {

    return a-b;
    
})

console.log(angka1.join(' - '));

// cara penggunaan filter

var cari = angka1.filter(function (x) {

    // dapat memakai semua operator tergantung kebutuhan
    return x > 20;
    
});

console.log(cari);


// cara penggunaan find

var cari1 = angka1.find(function (x) {

    // dapat memakai semua operator tergantung kebutuhan
    return x > 20;
    
});

console.log(cari1);