// Event OnClick
const dataOnclick = document.querySelector('.p2');
const dataOnclick2 = document.querySelector('.p3');
const dataOnclick3 = document.querySelector('section#b p');

function bg() {

    dataOnclick.style.backgroundColor = 'blue';
}

function bg2() {

    dataOnclick2.style.backgroundColor = 'pink';

}

function bg3(){
    dataOnclick3.style.backgroundColor = 'brown';
}


dataOnclick2.onclick = bg2;
dataOnclick3.onclick = bg3;

// Event addEventListener
const dataEventListener = document.querySelector('section#b p');

// memkakai doble click
dataEventListener.addEventListener('dblclick', function() {

    alert('Hello, Mr.Morning Star !!');
    const dataUl = document.querySelector('section#b ul');

    const addLi = document.createElement('li');
    const textLi = document.createTextNode('Item baru mas broo');

    addLi.appendChild(textLi);
    dataUl.appendChild(addLi);
    
});

// jika memakai 1 click 
// dataEventListener.addEventListener('click', function () {

//     dataOnclick3.style.backgroundColor = 'brown';
    
// });

// jika memakai hover pada DOM
// dataEventListener.addEventListener('mouseenter', function () {

//     dataOnclick3.style.backgroundColor = 'brown';
    
// });

// dataEventListener.addEventListener('mouseleave', function () {

//     dataOnclick3.style.backgroundColor = 'white';
    
// });