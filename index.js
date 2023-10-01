const x = "X"
const o = "O"
let estadoJuego = "P1";

const cuadrados = document.querySelectorAll(".cuadrado");

cuadrados.forEach((cuadrado,i) =>{
    cuadrado.addEventListener("click", ()=>{
        console.log("Cuadreadosssss",i)
        cuadrado.innerText = estadoJuego === "P1" ? x : o;
        estadoJuego = estadoJuego === "P1" ? "P2" : "P1";
    })
})