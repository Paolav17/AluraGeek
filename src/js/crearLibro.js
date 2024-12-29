import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const botonLimpiar = document.getElementById("limpiar")
botonLimpiar.addEventListener("click", () => {
    formulario.reset(); 
});
async function crearLibro(evento){

    evento.preventDefault();
    
    const imagen =document.querySelector("[data-img]").value.trim();
    const nombre =document.querySelector("[data-name]").value.trim();
    const precio =document.querySelector("[data-price]").value.trim();

    if (!nombre || !precio || !imagen) {
        evento.preventDefault(); 
        alert ( "Por favor, completa todos los campos antes de enviar el formulario.");
        return;
    }

    await conexionAPI.crearLibro(imagen,nombre,precio);

}
formulario.addEventListener("submit",evento=> crearLibro(evento));