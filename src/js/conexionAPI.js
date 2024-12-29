async function listarLibros() {
    const conexion = await fetch("http://localhost:3001/libros");
    const conexionConvertida = await conexion.json();
    return conexionConvertida
}

function crearLibro(imagen,nombre,precio) {
    const conexion = fetch("http://localhost:3001/libros",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            imagen:imagen,
            nombre:nombre,
            precio:precio
        })
    })
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}
async function eliminarLibros(index) {
    const conexion = await fetch(`http://localhost:3001/libros/${index}`,{
        method: "DELETE",
    })
    const conexionConvertida = await conexion.json();
    return conexionConvertida
}

export const conexionAPI ={
    listarLibros, crearLibro, eliminarLibros
}


