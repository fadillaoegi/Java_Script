const darkmode = document.querySelector('#darkmode');
// const random = document.querySelector('.random');

// MENAMBAHKAN HTLML PADA JS
const randomButton = document.createElement('button');
const tittleButton = document.createTextNode('Random');
randomButton.appendChild(tittleButton);
randomButton.setAttribute('type', 'button');
darkmode.after(darkmode);


// MENAMBAHKAN OnClickListener PADA JS
darkmode.addEventListener('click', function () {
    // element.classList.toggle("mystyle");
    // document.body.style.color = 'white';
    // document.body.style.backgroundColor = 'black';
    document.body.classList.toggle('changes');


});

// random.addEventListener('click', function () {
//     document.body.style.color = 'white';
//     document.body.style.backgroundColor = 'salmon';
// });

// console.log(modeOn);