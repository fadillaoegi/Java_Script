// DECLARATION
const darkmode = document.querySelector('#darkmode');
const sliderRed = document.querySelector('.Sred');
const sliderGreen = document.querySelector('.Sgreen');
const sliderBlue = document.querySelector('.Sblue');


// MENAMBAHKAN HTLML PADA JS
const randomButton = document.createElement('button');
const tittleButton = document.createTextNode('Random');
randomButton.appendChild(tittleButton);
randomButton.setAttribute('type', 'button');
darkmode.after(randomButton);


// MENAMBAHKAN OnClickListener PADA JS
darkmode.addEventListener('click', function () {
    // element.classList.toggle("mystyle");
    // document.body.style.color = 'white';
    // document.body.style.backgroundColor = 'black';
    document.body.classList.toggle('changes');
});

randomButton.addEventListener('click', function () {
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +',' + blue +')';
});

sliderRed.addEventListener('input', function () {
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +',' + blue +')';
});

sliderGreen.addEventListener('input', function () {
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +',' + blue +')';
});

sliderBlue.addEventListener('input', function () {
    const red = Math.round(Math.random() * 255 + 1);
    const green = Math.round(Math.random() * 255 + 1);
    const blue = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ red +','+ green +',' + blue +')';
});