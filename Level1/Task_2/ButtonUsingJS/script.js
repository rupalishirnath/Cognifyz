let btn = document.querySelector('button');


document.addEventListener('click', function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    btn.style.backgroundColor = `rgb(${red},${green},${blue})`;

})