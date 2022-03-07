// Manipulation DOM innerHTML

const data = document.getElementById('title');
// data.innerHTML = '<b>Fadil broo</b>';

const sec = document.querySelector('section#a');
// sec.innerHTML = 'Haii';

// Manipulation DOM style BytagName
const stile = document.getElementsByTagName('h1')[0];
stile.style.backgroundColor = 'salmon';
// Manipulation DOM Attribute BytagName
stile.setAttribute('id', 'style');
// Mengambil Attribute
// stile.getAttribute('id');
// Menghapus Attribute
// stile.removeAttribute('href');

// Manipulation DOM Attribute querySelector
const attri = document.querySelector('section#a a');
// Menambah Attribute
attri.setAttribute('id', 'blalba');
// Mengambil Attribute
// attri.getAttribute('id');
// Menghapus Attribute
// attri.removeAttribute('href');

// Manipulation DOM Attribute
const p2 = document.querySelector('.p2');
// setAttribute -> Menimpa
// p2.setAttribute('class', 'label');

// ClassList
// element.classList.add();
p2.classList.add('fadil'); 

// element.classList.remove('nama_kelas');
// p2.classList.remove('fadil');

// element.classList.replace('nama_kelas', 'pergantian');
p2.classList.replace('p2', 'p7');

// element.classList.togle('nama_kelas');

// element.classList.item('urutan kelas'); -> sesuai array 
p2.classList.item(2);

// element.classList.contains('nama_kelas');
p2.classList.contains('dua');
// hasil true -> ada kelas and false -> tidak ada kelas