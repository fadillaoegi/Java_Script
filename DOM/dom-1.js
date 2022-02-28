// console.log(document);

// DOM selection

// -> document.getElementById()

const data = document.getElementById('title');
// Merubah warna
title.style.color = "blue";
// Merubah Background
title.style.backgroundColor = "black";
// Merubah Text
title.innerHTML = "Hello Broo !!";

// -> document.getElementByTagName();
// HTMLCollection -> Array

const data2 = document.getElementsByTagName('p');

for (let index = 0; index < data2.length; index++) {
    
    data2[index].style.backgroundColor = "lightblue";
    
}

const data3 = document.getElementsByTagName('h1')[0];
data3.style.fontSize = "70px";

// -> document.getElementByClassName()
// HTMLCollection -> Array

const data4 = document.getElementsByClassName('p1');

data4[0].innerHTML = "Ini Berubah Brooo, ya kaa ??";