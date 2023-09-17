console.log("conectado el JS")

const cuadro1 = document.getElementById('div1');
const cuadro2 = document.getElementById("div2");
const cuadro3 = document.getElementById("div3");
const cuadro4 = document.getElementById("div4");
const key = document.getElementById('key')
const global = cuadro4 + cuadro3 + cuadro2 + cuadro1;
const changeColor = (e) => {
    e.target.style.backgroundColor = 'black';
};

cuadro1.addEventListener('click', changeColor);
cuadro2.addEventListener('click', changeColor);
cuadro3.addEventListener('click', changeColor);
cuadro4.addEventListener('click', changeColor);

//////////////////////////////////////////////////////////////////////


function cuadrado6(color) {
    const cuadro6 = document.createElement("div")
    cuadro6.style.width = "200px"
    cuadro6.style.height = "200px"
    cuadro6.style.backgroundColor = color
    cuadro6.style.border = "2px black solid"
    document.body.appendChild(cuadro6);
}



document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        key.style.backgroundColor = "pink"
    } else if (event.key === 's') {
        key.style.backgroundColor = "orange"
    } else if (event.key === 'd') {
        key.style.backgroundColor = 'skyblue'
    } else if (event.key === 'q') {
        console.log("q")
        cuadrado6('black');
    } else if (event.key ==='w'){
        cuadrado6('grey')
    } else if (event.key ==='e'){
        cuadrado6('#804000')
    }
})