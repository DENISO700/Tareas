//cREAR aRREGLO
var Noticias = [];


//fUNCION PARA AGREGAR ELEMENTOS,
//recibe todos los datos que se mandan del formulario 
function AgregarNoticia(pCaratula, pTitulo, pFecha, pLikes, pComentarios, pRedactor, pResumen, pDetalles, pCategoria, pPrincipal, pUltima) {


    //cREAR oBJETO, estilo JSON propiedad : valor
    var nuevaNoticia = {
        Caratula: pCaratula,
        Titulo: pTitulo,
        Fecha: pFecha,
        Likes: pLikes,
        Comentarios: pComentarios,
        Redactor: pRedactor,
        Resumen: pResumen,
        Detalles: pDetalles,
        Categoria: pCategoria,
        Principal: pPrincipal,
        Ultima: pUltima

    };

    //imprime el objeto en consolo para verificar
    console.log(nuevaNoticia);
    //hACEMOS EL PUSH DEL OBJETO CREADO, lo agrega al arreglo 
    Noticias.push(nuevaNoticia);
    //llamar la funcion actualizada con los datos agregados
    localStorageNoticias(Noticias);


}

//Funcion para retornar los valores del arreglo
function ObtenerNoticia() {

    //para traerlo de la base de datos, condicionado por si viene vacia 
    var storedList = localStorage.getItem("localNoticias");
    if (storedList == null) {
        Noticias = [];

    } else {
        //de estar lleno se imprime la lista convertida a objeto nuevamente
        Noticias = JSON.parse(storedList);

    }

    return Noticias;
}

//Funcion para guardar la lista en el local storage usando el API de HTML5 enviandole una lista de parametro utilizando stringfy para convertirlo a texto.
function localStorageNoticias(plist) {
    localStorage.setItem("localNoticias", JSON.stringify(plist));


}

//Crear Div, funciona solo toca categorizar y emplear de manera correcta los atributos


function mostrarTabla() {

    //Es lo que se insertara por linea en el html de la tabla

    // var cuerpotabla = document.getElementById("Equipos");
    // cuerpotabla.innerHTML = " <tr><td>Real Madrid<td><td>33</td></tr>";


    //Tabla es todo el arreglo cero linea cero nombre la clave del atributo

    var TablaLlena = "";
    var TablaLlena2 = "";
    var TablaLlena3 = "";

    for (var j = 0; j < Noticias.length; j++) {

        if (Noticias[j].Principal == "Principal") {



            if (Noticias[j].Ultima == "Ultima Hora") {

                var TablaLlena4 = "";

                //  for (i = 0; i < Noticias[j].Categoria.length; i++) {
                var cuerpotabla4 = document.getElementById("Principal");

                TablaLlena4 += "<div class=\" col-md-12 col-xs-12 col-sm-12  bg-white  mt-3 \"><div class=\"container bg-dark\"><div class=\"row\"><div class=\"contenedor\"><img src=\"" + Noticias[j].Caratula + "\" class=\"w-100 video2 \"><div class=\"texto-encima \"><span class=\"badge badge-danger p-1\">&nbsp;" + Noticias[j].Ultima + "</span></div></div></div><div class=\"row mt-2\"><h6 class=\"col-12\">" + Noticias[j].Titulo + "</h6><p style=\"color: darkgray;\" class=\"col-12 \"> " + Noticias[j].Resumen + " </p>  <p style=\"color: darkgray;\" class=\"col-12 \">" + Noticias[j].Likes + " / " + Noticias[j].Fecha + " <br> <a href=\"#\">Ver Mas</a>&nbsp;|<a href=\"#\">Eliminar</a></p></div></div></div>";

                //  };
                cuerpotabla4.innerHTML = TablaLlena4;

            } else {

                var TablaLlena4 = "";

                //  for (i = 0; i < Noticias[j].Categoria.length; i++) {
                var cuerpotabla4 = document.getElementById("Principal");

                TablaLlena4 += "<div class=\" col-md-12 col-xs-12 col-sm-12  bg-white  mt-3 \"><div class=\"container bg-dark\"><div class=\"row\"><div class=\"contenedor\"><img src=\"" + Noticias[j].Caratula + "\" class=\"w-100 video2 \"><div class=\"texto-encima \"></div></div></div><div class=\"row mt-2\"><h6 class=\"col-12\">" + Noticias[j].Titulo + "</h6><p style=\"color: darkgray;\" class=\"col-12 \"> " + Noticias[j].Resumen + " </p>  <p style=\"color: darkgray;\" class=\"col-12 \">" + Noticias[j].Likes + " / " + Noticias[j].Fecha + " <br> <a href=\"#\">Ver Mas</a>&nbsp;|<a href=\"#\">Eliminar</a></p></div></div></div>";

                //  };
                cuerpotabla4.innerHTML = TablaLlena4;

            }






            //inicia categoria Recientes

        } else if (Noticias[j].Categoria == 1) {

            if (Noticias[j].Ultima == "Ultima Hora") {

                //  for (i = 0; i < Noticias[j].Categoria.length; i++) {
                var cuerpotabla = document.getElementById("Recientes");

                TablaLlena += "<div class=\" col-md-4 col-xs-12 col-sm-12  bg-white  mt-3 \"><div class=\"container bg-dark\"><div class=\"row\"><div class=\"contenedor\"><img src=\"" + Noticias[j].Caratula + "\" class=\"w-100 video \"><div class=\"texto-encima \"><span class=\"badge badge-danger p-1\">&nbsp;" + Noticias[j].Ultima + "</span></div></div></div><div class=\"row mt-2\"><h6 class=\"col-12\">" + Noticias[j].Titulo + "</h6><p style=\"color: darkgray;\" class=\"col-12 \"> " + Noticias[j].Resumen + " </p>  <p style=\"color: darkgray;\" class=\"col-12 \">" + Noticias[j].Likes + " / " + Noticias[j].Fecha + " <br> <a href=\"#\">Ver Mas</a>&nbsp;|<a href=\"#\">Eliminar</a></p></div></div></div>";

                //  };
                cuerpotabla.innerHTML = TablaLlena;

            } else {
                //  for (i = 0; i < Noticias[j].Categoria.length; i++) {
                var cuerpotabla = document.getElementById("Recientes");



                TablaLlena += "<div class=\" col-md-4 col-xs-12 col-sm-12  bg-white  mt-3 \"><div class=\"container bg-dark\"><div class=\"row\"><div class=\"contenedor\"><img src=\"" + Noticias[j].Caratula + "\" class=\"w-100 video \"><div class=\"texto-encima \"></div></div></div><div class=\"row mt-2\"><h6 class=\"col-12\">" + Noticias[j].Titulo + "</h6><p style=\"color: darkgray;\" class=\"col-12 \"> " + Noticias[j].Resumen + " </p>  <p style=\"color: darkgray;\" class=\"col-12 \">" + Noticias[j].Likes + " / " + Noticias[j].Fecha + " <br> <a href=\"#\">Ver Mas</a>&nbsp;|<a href=\"#\">Eliminar</a></p></div></div></div>";

                //  };
                cuerpotabla.innerHTML = TablaLlena;

            }



            //siguiente categoria Internacionales 



        } else if (Noticias[j].Categoria == 2) {

            if (Noticias[j].Ultima == "Ultima Hora") {

                //  for (i = 0; i < Noticias[j].Categoria.length; i++) {
                var cuerpotabla2 = document.getElementById("Internacionales");

                TablaLlena2 += "<div class=\" col-md-4 col-xs-12 col-sm-12  bg-white  mt-3 \"><div class=\"container bg-dark\"><div class=\"row\"><div class=\"contenedor\"><img src=\"" + Noticias[j].Caratula + "\" class=\"w-100 video \"><div class=\"texto-encima \"><span class=\"badge badge-danger p-1\">&nbsp;" + Noticias[j].Ultima + "</span></div></div></div><div class=\"row mt-2\"><h6 class=\"col-12\">" + Noticias[j].Titulo + "</h6><p style=\"color: darkgray;\" class=\"col-12 \"> " + Noticias[j].Resumen + " </p>  <p style=\"color: darkgray;\" class=\"col-12 \">" + Noticias[j].Likes + " / " + Noticias[j].Fecha + " <br> <a href=\"#\">Ver Mas</a>&nbsp;|<a href=\"#\">Eliminar</a></p></div></div></div>";

                //  };
                cuerpotabla2.innerHTML = TablaLlena2;

            } else {
                //  for (i = 0; i < Noticias[j].Categoria.length; i++) {
                var cuerpotabla2 = document.getElementById("Internacionales");



                TablaLlena2 += "<div class=\" col-md-4 col-xs-12 col-sm-12  bg-white  mt-3 \"><div class=\"container bg-dark\"><div class=\"row\"><div class=\"contenedor\"><img src=\"" + Noticias[j].Caratula + "\" class=\"w-100 video \"><div class=\"texto-encima \"></div></div></div><div class=\"row mt-2\"><h6 class=\"col-12\">" + Noticias[j].Titulo + "</h6><p style=\"color: darkgray;\" class=\"col-12 \"> " + Noticias[j].Resumen + " </p>  <p style=\"color: darkgray;\" class=\"col-12 \">" + Noticias[j].Likes + " / " + Noticias[j].Fecha + " <br> <a href=\"#\">Ver Mas</a>&nbsp;|<a href=\"#\">Eliminar</a></p></div></div></div>";

                //  };
                cuerpotabla2.innerHTML = TablaLlena2;

            }

            //Siguiente categoria Tecnologia

        } else if (Noticias[j].Categoria == 3) {

            if (Noticias[j].Ultima == "Ultima Hora") {

                //  for (i = 0; i < Noticias[j].Categoria.length; i++) {
                var cuerpotabla3 = document.getElementById("Tecnologia");

                TablaLlena3 += "<div class=\" col-md-4 col-xs-12 col-sm-12  bg-white  mt-3 \"><div class=\"container bg-dark\"><div class=\"row\"><div class=\"contenedor\"><img src=\"" + Noticias[j].Caratula + "\" class=\"w-100 video \"><div class=\"texto-encima \"><span class=\"badge badge-danger p-1\">&nbsp;" + Noticias[j].Ultima + "</span></div></div></div><div class=\"row mt-2\"><h6 class=\"col-12\">" + Noticias[j].Titulo + "</h6><p style=\"color: darkgray;\" class=\"col-12 \"> " + Noticias[j].Resumen + " </p>  <p style=\"color: darkgray;\" class=\"col-12 \">" + Noticias[j].Likes + " / " + Noticias[j].Fecha + " <br> <a href=\"#\">Ver Mas</a>&nbsp;|<a href=\"#\">Eliminar</a></p></div></div></div>";

                //  };
                cuerpotabla3.innerHTML = TablaLlena3;

            } else {
                //  for (i = 0; i < Noticias[j].Categoria.length; i++) {
                var cuerpotabla3 = document.getElementById("Tecnologia");



                TablaLlena3 += "<div class=\" col-md-4 col-xs-12 col-sm-12  bg-white  mt-3 \"><div class=\"container bg-dark\"><div class=\"row\"><div class=\"contenedor\"><img src=\"" + Noticias[j].Caratula + "\" class=\"w-100 video \"><div class=\"texto-encima \"></div></div></div><div class=\"row mt-2\"><h6 class=\"col-12\">" + Noticias[j].Titulo + "</h6><p style=\"color: darkgray;\" class=\"col-12 \"> " + Noticias[j].Resumen + " </p>  <p style=\"color: darkgray;\" class=\"col-12 \">" + Noticias[j].Likes + " / " + Noticias[j].Fecha + " <br> <a href=\"#\">Ver Mas</a>&nbsp;|<a href=\"#\">Eliminar</a></p></div></div></div>";

                //  };
                cuerpotabla3.innerHTML = TablaLlena3;

            }

        }
    };


}

function Eliminar() {

    var Linea = document.getElementById("Linea");

    var Dato = Linea.value;
    Noticias.splice(Dato, 1, )

}

function verDetalles(indice) {
    document.getElementById('detalle').innerHTML =
        `Artista: ${artistas[indice].nombreArtista}<br>
        Caratula: <img style="width:300px" src="${artistas[indice].caratulaArtista}"><br>`;
    //JSON.stringify(artistas[indice]);
    document.querySelector('#tbl-detalle-albumes tbody').innerHTML = '';
    document.getElementById('artista').innerHTML = artistas[indice].nombreArtista;
    for (let j = 0; j < artistas[indice].albumes.length; j++)
        document.querySelector('#tbl-detalle-albumes tbody').innerHTML +=
        `<tr>
            <td>${artistas[indice].albumes[j].tituloAlbum}</td>
            <td>${artistas[indice].albumes[j].anio}</td>
            <td>${artistas[indice].albumes[j].genero}</td>
            <td>${artistas[indice].albumes[j].caratula}</td>
            <td>${artistas[indice].albumes[j].canciones.length}</td>
            <td><button type="button" onclick="verCanciones(${indice},${j})">Ver canciones</button></td>
            </tr>`;
}