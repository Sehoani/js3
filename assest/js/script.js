
let ele = document.getElementById("ele1")

function pintar(color = "green") {
  ele.style.backgroundColor = 'yellow'
}

ele.addEventListener("click", pintar);