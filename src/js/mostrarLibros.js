import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(imagen,nombre,precio){
    const libro = document.createElement  ("div");
    libro.className = "card";
    libro.innerHTML = `<img src="${imagen}" class= "card--image">
                    <div class="card__details" >
                        <p class="card_name">${nombre}</p>
                        <div class="card__container--value">
                            <p class="card__price">$${precio}</p>
                            <img src="#"> 
                        </div>
                    </div>`;
                    return libro; 
}

async function listarLibros() {
    const listAPI = await conexionAPI.listarLibros()
    listAPI.forEach(libro => lista.appendChild(crearCard(libro.imagen,libro.nombre,libro.precio )));
}
listarLibros()