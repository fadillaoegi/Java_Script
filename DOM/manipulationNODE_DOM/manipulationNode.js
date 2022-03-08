// MANIPULATION NODE DOM

// document.createElement();
// document.createTextNode();
// node.appendChild();
// node.insertBefore();
// parentNode.removeChild();
// paprentNode.removeChild();

// Make Element
const tag = document.createElement('p');
const value = document.createTextNode('Ini adalah value paraggraf');

// Memasukan value ke tag
tag.appendChild(value);

// Menampilkan -> Browser
const sectionB = document.getElementById('b');
sectionB.appendChild(tag);

const tagLi = document.createElement('li');
const valueLi = document.createTextNode('Value Li');

tagLi.appendChild(valueLi);

const ul = document.querySelector('section#b ul');
// jika tidak mempunyai attribute pakai sudo class -> nth-child(value);
//  -> nth-child = dimulai dari 1 (bukan 0)
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(valueLi, li2);




