async function listarLibros() {
    const conexion = await fetch("http://localhost:3001/libros");
    const conexionConvertida = await conexion.json();
    return conexionConvertida
}
export const conexionAPI ={
    listarLibros
}


