console.log ("conectado el JS")
let cuadro1 = document.getElementById("div1");
let cuadro2 = document.getElementById("div2");
let cuadro3 = document.getElementById("div3");
let cuadro4 = document.getElementById("div4");
let global = cuadro4 + cuadro3 + cuadro2 +cuadro1;
const accion =() => global.style.backgroundColor = "black";
global.addEventListener("click", accion);


