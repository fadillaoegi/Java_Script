const dataOnclick = document.querySelector('.p2');
const dataOnclick2 = document.querySelector('.p3');
const dataOnclick3 = document.querySelector('#b');

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