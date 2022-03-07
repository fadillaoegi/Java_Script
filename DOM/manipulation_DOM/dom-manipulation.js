// Manipulation DOM innerHTML

const data = document.getElementById('title');
data.innerHTML = '<b>Fadil broo</b>';

const sec = document.querySelector('section#a');
sec.innerHTML = 'Haii';

// Manipulation DOM style
const stile = document.getElementsByTagName('h1')[0];
stile.style.backgroundColor = 'salmon';

// Manipulation DOM Attribute
const attri = document.querySelector('section#a a')
// Menambah Attribute
attri.setAttribute('id', 'blalba');
// Mengambil Attribute
// attri.getAttribute('id');
// Menghapus Attribute
// attri.removeAttribute('href');
