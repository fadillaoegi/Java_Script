// MANIPULATION NODE DOM

// document.createElement();
// document.createTextNode();
// node.appendChild();
// node.insertBefore();
// parentNode.removeChild();
// paprentNode.replaceChild();

// Make Element
const tag = document.createElement('p');
const value = document.createTextNode('Ini adalah value paraggraf');

// Memasukan value ke tag
tag.appendChild(value);

// Menampilkan -> Browser
const sectionB = document.getElementById('b');
// node.appendChild();
sectionB.appendChild(tag);

const tagLi = document.createElement('li');
const valueLi = document.createTextNode('Value Li');

tagLi.appendChild(valueLi);

const ul = document.querySelector('section#b ul');
// jika tidak mempunyai attribute pakai sudo class -> nth-child(value);
//  -> nth-child = dimulai dari 1 (bukan 0)
const li2 = ul.querySelector('li:nth-child(2)');
// node.insertBefore();
ul.insertBefore(tagLi, li2);

const sectionA = document.getElementById('a');
// document.getElementsByTagName() -> jadi sebuah array
const link = document.getElementsByTagName('a')[0];
// parentNode.removeChild();
sectionA.removeChild(link);

const tagH2 = document.createElement('h2');
const valueH2 = document.createTextNode('Transform');
const tagP4 = sectionB.querySelector('p');

tagH2.appendChild(valueH2);

sectionB.replaceChild(tagH2, tagP4);


tagH2.style.backgroundColor = 'salmon';
li2.style.backgroundColor = 'salmon';
tag.style.backgroundColor = 'salmon';






