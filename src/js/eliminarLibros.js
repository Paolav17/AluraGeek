import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");
lista.addEventListener("click", (evento) => {
    if (evento.target.matches("[data-delete]")) {
        const id = evento.target.dataset.index;
        console.log("ID del libro a eliminar:", id);
        eliminarLibro(id);
    }
});

async function eliminarLibro(id) {
    try {
        await conexionAPI.eliminarLibros(id); 
        const libro = document.querySelector(`[data-index="${id}"]`).closest(".card"); 
        libro.remove();
        console.log(`Libro con ID ${id} eliminado correctamente.`);
    } catch (error) {
        console.error("Error al eliminar el libro:", error);
    }
}
