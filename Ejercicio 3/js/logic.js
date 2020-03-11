//Se le crea un evento de escucha al boton en base a su ID 
document.querySelector("#agregarNoticia").addEventListener("click", GuardarNoticia);

//se crea la fumcion para guardar la noticia en el arreglo Noticis

CrearNoticia();

function GuardarNoticia() {

    //se crean variables para cada valor con el query selector se apunta al id de cada dato obteniendo asi su valor 
    var sCaratula = document.querySelector("#txtCaratula").value,
        sTitulo = document.querySelector("#txtTitulo").value,
        sFecha = document.querySelector("#txtFecha").value,
        sLikes = document.querySelector("#txtLikes").value,
        sComentarios = document.querySelector("#txtComentarios").value,
        sRedactor = document.querySelector("#txtRedactor").value,
        sResumen = document.querySelector("#txtResumen").value,
        sDetalles = document.querySelector("#txtDetalle").value,
        sCategoria = document.querySelector("#txtCategoria").value,
        sPrincipal = document.querySelector("#txtPrincipal").value,
        sUltima = document.querySelector("#txtUltima").value;

    //se llama la funcion agregar noticia que hara el push al arreglo insertando las variables declaradas anteriormente ya con el valor del dato asignado
    AgregarNoticia(sCaratula, sTitulo, sFecha, sLikes, sComentarios, sRedactor, sResumen, sDetalles, sCategoria, sPrincipal, sUltima);

    CrearNoticia();

}

//Funcion para imprimir noticia en pantalla, obtendra los datos que esten el el arreglo Noticias y asi recorrerla y dibujar la noticia en la interfaz del usuario
function CrearNoticia() {


    //variable para almacenar la funcion
    var lista = ObtenerNoticia();


    //Variable para acceder al body de la tabla
    var contenedor = document.querySelector("#mostrar tbody");

    //limpiar el htm para asegurarnos que siempre este limpio y muestre las tablas desde cero 
    contenedor.innerHTML = "";


    //Ciclo para recorrer los datos del arreglo
    for (var i = 0; i < lista.length; i++) {

        //variables para revisar celdas por fila y obtener su valor
        var row = contenedor.insertRow(i);
        var CaratulaCell = row.insertCell(0);
        var TituloCell = row.insertCell(1);
        var FechaCell = row.insertCell(2);
        var LikesCell = row.insertCell(3);
        var ComentariosCell = row.insertCell(4);
        var RedactorCell = row.insertCell(5);
        var ResumenCell = row.insertCell(6);
        var DetalleCell = row.insertCell(7);
        var CategoriaCell = row.insertCell(8);
        var PrincipalCell = row.insertCell(9);
        var UltimaCell = row.insertCell(10);
        // var SelectCell = row.insertCell(11);



        //nos devuelve el primer elemento en su recorrido y lo imprime en pantalla
        CaratulaCell.innerHTML = lista[i].Caratula;
        TituloCell.innerHTML = lista[i].Titulo;
        FechaCell.innerHTML = lista[i].Fecha;
        LikesCell.innerHTML = lista[i].Likes;
        ComentariosCell.innerHTML = lista[i].Comentarios;
        RedactorCell.innerHTML = lista[i].Redactor;
        ResumenCell.innerHTML = lista[i].Resumen;
        DetalleCell.innerHTML = lista[i].Detalles;
        CategoriaCell.innerHTML = lista[i].Categoria;
        PrincipalCell.innerHTML = lista[i].Principal;
        UltimaCell.innerHTML = lista[i].Ultima;


        // var inputSelect = document.createElement("input");

        // inputSelect.type = "radio";
        // inputSelect.value = lista[i];
        // SelectCell.appendChild(inputSelect);




        //SelectCell.innerHTML = lista[i].Select;


        //agregamos la fila al cuerpo de la tabla
        contenedor.appendChild(row);

    }


}