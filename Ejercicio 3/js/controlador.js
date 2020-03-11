var localStorage = window.localStorage;
var Noticias;

var Categorias = [

    {
        nombreCategoria: "Recientes",
        Descripcion: "Noticias Recientes"
    },
    {
        nombreCategoria: "Internacionales",
        Descripcion: "Noticias Internacionales"
    },
    {
        nombreCategoria: "Tecnologia",
        Descripcion: "Noticias Tecnologicas"
    },

];



//Verifica si hay datos en el local storage 

if (localStorage.getItem("Noticias") == null) {
    Noticias = [

        {
            Caratula: "/img/1.jpg",
            Titulo: "Ayuwoki",
            fechaPublicacion: "12/12/2012",
            likes: "3k",
            comentarios: "5k",
            redactor: "Juan",
            resumenNoticia: "Lorem ipsum dolor....",
            detalleNoticia: "Lorem iptum dolor por 100.....",
            categoria: "Recientes",
            principal: false,
            ultimaHora: false,
        },
        {
            Caratula: "/img/1.jpg",
            Titulo: "Ayuwoki",
            fechaPublicacion: "12/12/2012",
            likes: "3k",
            comentarios: "5k",
            redactor: "Juan",
            resumenNoticia: "Lorem ipsum dolor....",
            detalleNoticia: "Lorem iptum dolor por 100.....",
            categoria: "Recientes",
            principal: false,
            ultimaHora: true,
        },
        {
            Caratula: "/img/2.jpg",
            Titulo: "Marcha de las Antorchas",
            fechaPublicacion: "12/12/2012",
            likes: "3k",
            comentarios: "5k",
            redactor: "Juan",
            resumenNoticia: "Lorem ipsum dolor....",
            detalleNoticia: "Lorem iptum dolor por 100.....",
            categoria: "Internacionales",
            principal: false,
            ultimaHora: true,
        },
        {
            Caratula: "/img/2.jpg",
            Titulo: "Marcha de las Antorchas",
            fechaPublicacion: "12/12/2012",
            likes: "3k",
            comentarios: "5k",
            redactor: "Juan",
            resumenNoticia: "Lorem ipsum dolor....",
            detalleNoticia: "Lorem iptum dolor por 100.....",
            categoria: "Internacionales",
            principal: false,
            ultimaHora: false,
        },
        {
            Caratula: "/img/1.jpg",
            Titulo: "Trump esta enojado",
            fechaPublicacion: "12/12/2012",
            likes: "3k",
            comentarios: "5k",
            redactor: "Juan",
            resumenNoticia: "Lorem ipsum dolor....",
            detalleNoticia: "Lorem iptum dolor por 100.....",
            categoria: "Tecnologia",
            principal: false,
            ultimaHora: true,
        },
        {
            Caratula: "/img/principal.jpg",
            Titulo: "Trump esta enojado",
            fechaPublicacion: "12/12/2012",
            likes: "3k",
            comentarios: "5k",
            redactor: "Juan",
            resumenNoticia: "Lorem ipsum dolor....",
            detalleNoticia: "Lorem iptum dolor por 100.....",
            categoria: "Tecnologia",
            principal: true,
            ultimaHora: true,
        },





    ]
    localStorage.setItem("Noticias", JSON.stringify(Noticias));
} else {
    Noticias = JSON.parse(localStorage.getItem('Noticias'));
}


//Generar las filas
function Filas() {

    document.getElementById("inicio").innerHTML = "";

    for (let i = 0; i < Categorias.length; i++) {

        document.getElementById("inicio").innerHTML += `<div class="row" id="${Categorias[i].nombreCategoria}"><div class=" col-md-12 col-xs-12 col-sm-12  bg-white ">

        <label for="">${Categorias[i].nombreCategoria}</label>

    </div></div> `



    }

}

//Ejecutamos la Funcion
Filas();


//Generar Noticias
function generarNoticias() {

    //Recorre el arreglo

    for (let j = 0; j < Noticias.length; j++) {

        //Limpia Principal

        document.getElementById("Principal").innerHTML = "";

        //Verifica el atributo principal

        if (Noticias[j].principal == true) {

            //Verifica el atributo ultima hora
            if (Noticias[j].ultimaHora == true) {

                document.getElementById("Principal").innerHTML += ` <div class=" col-md-12 col-xs-12 col-sm-12 bg-white ">

    <div class="container bg-dark">
        <div class="row">
            <div class="contenedor ">
                <img src="${Noticias[j].Caratula}" class="w-100 principal ">
                <div class="texto-encima "><span class="badge badge-danger p-1">&nbsp;Ultima Hora</span></div>
            </div>

        </div>

        <div class="row mt-2">
            <h6 class="col-12">${Noticias[j].Titulo}</h6>
            <p style="color: darkgray;" class="col-12 ">${Noticias[j].resumenNoticia}</p>
            <p style="color: darkgray;" class="col-12 ">${Noticias[j].likes} / ${Noticias[j].fechaPublicacion}<br> <a href="#" onclick="verDetalles(indice);">Ver Mas</a>&nbsp;|<a href="#">Eliminar</a></p>

        </div>



    </div>
</div> `

            } else {
                document.getElementById("Principal").innerHTML = "";
                document.getElementById("Principal").innerHTML += ` <div class=" col-md-12 col-xs-12 col-sm-12 bg-white ">

    <div class="container bg-dark">
        <div class="row">
            <div class="contenedor ">
                <img src="${Noticias[j].Caratula}" class="w-100 principal ">
                          </div>

        </div>

        <div class="row mt-2">
            <h6 class="col-12">${Noticias[j].Titulo}</h6>
            <p style="color: darkgray;" class="col-12 ">${Noticias[j].resumenNoticia}</p>
            <p style="color: darkgray;" class="col-12 ">${Noticias[j].likes} / ${Noticias[j].fechaPublicacion}<br> <a href="#">Ver Mas</a>&nbsp;|<a href="#">Eliminar</a></p>

        </div>



    </div>
</div> `
            }


        } else {

            //Verifica el atributo Catagoria
            if (Noticias[j].categoria == "Recientes") {
                //Verifica el atributo ultima hora
                if (Noticias[j].ultimaHora == true) {
                    document.getElementById("Recientes").innerHTML += `<div class=" col-md-4 col-xs-12 col-sm-12 bg-white  mt-3 ">

                    <div class="container bg-dark">
                
                        <div class="row">
                            <div class="contenedor ">
                                <img src="${Noticias[j].Caratula}" class="w-100 video ">
                                <div class="texto-encima "><span class="badge badge-danger p-1">&nbsp;Ultima Hora</span></div>
                            </div>
                
                        </div>
                
                        <div class="row mt-2">
                            <h6 class="col-12">${Noticias[j].Titulo}</h6>
                            <p style="color: darkgray;" class="col-12 ">${Noticias[j].resumenNoticia}</p>
                            <p style="color: darkgray;" class="col-12 ">${Noticias[j].likes}/ ${Noticias[j].fechaPublicacion} <br> <a href="#">Ver Mas</a>&nbsp;|<a href="#">Eliminar</a></p>
                
                        </div>
                
                    </div>
                
                </div>
                `
                } else {
                    document.getElementById("Recientes").innerHTML += `<div class=" col-md-4 col-xs-12 col-sm-12 bg-white  mt-3 ">

    <div class="container bg-dark">

        <div class="row">
            <div class="contenedor ">
                <img src="${Noticias[j].Caratula}" class="w-100 video ">
            </div>

        </div>

        <div class="row mt-2">
            <h6 class="col-12">${Noticias[j].Titulo}</h6>
            <p style="color: darkgray;" class="col-12 ">${Noticias[j].resumenNoticia}</p>
            <p style="color: darkgray;" class="col-12 ">${Noticias[j].likes}/ ${Noticias[j].fechaPublicacion} <br> <a href="#">Ver Mas</a>&nbsp;|<a href="#">Eliminar</a></p>

        </div>

    </div>

</div>
`


                }

                //Verifica el atributo categoria
            } else if (Noticias[j].categoria == "Internacionales") {
                //Verifica el atributo ultima hora
                if (Noticias[j].ultimaHora == true) {
                    document.getElementById("Internacionales").innerHTML += `<div class=" col-md-4 col-xs-12 col-sm-12 bg-white  mt-3 ">

                    <div class="container bg-dark">
                
                        <div class="row">
                            <div class="contenedor ">
                                <img src="${Noticias[j].Caratula}" class="w-100 video ">
                                <div class="texto-encima "><span class="badge badge-danger p-1">&nbsp;Ultima Hora</span></div>
                            </div>
                
                        </div>
                
                        <div class="row mt-2">
                            <h6 class="col-12">${Noticias[j].Titulo}</h6>
                            <p style="color: darkgray;" class="col-12 ">${Noticias[j].resumenNoticia}</p>
                            <p style="color: darkgray;" class="col-12 ">${Noticias[j].likes}/ ${Noticias[j].fechaPublicacion} <br> <a href="#">Ver Mas</a>&nbsp;|<a href="#">Eliminar</a></p>
                
                        </div>
                
                    </div>
                
                </div>
                `
                } else {
                    document.getElementById("Internacionales").innerHTML += `<div class=" col-md-4 col-xs-12 col-sm-12 bg-white  mt-3 ">

    <div class="container bg-dark">

        <div class="row">
            <div class="contenedor ">
                <img src="${Noticias[j].Caratula}" class="w-100 video ">
            </div>

        </div>

        <div class="row mt-2">
            <h6 class="col-12">${Noticias[j].Titulo}</h6>
            <p style="color: darkgray;" class="col-12 ">${Noticias[j].resumenNoticia}</p>
            <p style="color: darkgray;" class="col-12 ">${Noticias[j].likes}/ ${Noticias[j].fechaPublicacion} <br> <a href="#">Ver Mas</a>&nbsp;|<a href="#">Eliminar</a></p>

        </div>

    </div>

</div>
`


                }

            } else if (Noticias[j].categoria == "Tecnologia") {

                //Verifica el atributo ultima hora
                if (Noticias[j].ultimaHora == true) {
                    document.getElementById("Tecnologia").innerHTML += `<div class=" col-md-4 col-xs-12 col-sm-12 bg-white  mt-3 ">

                    <div class="container bg-dark">
                
                        <div class="row">
                            <div class="contenedor ">
                                <img src="${Noticias[j].Caratula}" class="w-100 video ">
                                <div class="texto-encima "><span class="badge badge-danger p-1">&nbsp;Ultima Hora</span></div>
                            </div>
                
                        </div>
                
                        <div class="row mt-2">
                            <h6 class="col-12">${Noticias[j].Titulo}</h6>
                            <p style="color: darkgray;" class="col-12 ">${Noticias[j].resumenNoticia}</p>
                            <p style="color: darkgray;" class="col-12 ">${Noticias[j].likes}/ ${Noticias[j].fechaPublicacion} <br> <a href="#">Ver Mas</a>&nbsp;|<a href="#">Eliminar</a></p>
                
                        </div>
                
                    </div>
                
                </div>
                `
                } else {
                    document.getElementById("Tecnologia").innerHTML += `<div class=" col-md-4 col-xs-12 col-sm-12 bg-white  mt-3 ">

    <div class="container bg-dark">

        <div class="row">
            <div class="contenedor ">
                <img src="${Noticias[j].Caratula}" class="w-100 video ">
            </div>

        </div>

        <div class="row mt-2">
            <h6 class="col-12">${Noticias[j].Titulo}</h6>
            <p style="color: darkgray;" class="col-12 ">${Noticias[j].resumenNoticia}</p>
            <p style="color: darkgray;" class="col-12 ">${Noticias[j].likes}/ ${Noticias[j].fechaPublicacion} <br> <a href="#">Ver Mas</a>&nbsp;|<a href="#">Eliminar</a></p>

        </div>

    </div>

</div>
`


                }

            }

        }
    }

}

//Ejecutamos la funcion
generarNoticias();


//Carga los datos de los canales para agregar las noticias correctamente
function generarSelect() {

    document.getElementById("Categoria").innerHTML = '';
    for (let i = 0; i < Categorias.length; i++) {
        document.getElementById("Categoria").innerHTML +=
            `  <option value="${Categorias[i].nombreCategoria}">${Categorias[i].nombreCategoria}</option>`;
    }
}
//Ejecutamos la funcion
generarSelect();


//Insertamos un nuevo objeto con la funcion push , luego generamos las noticias de nuevo y recargamos el select
function guardarNoticia() {


    let nuevaNoticia = {
        Caratula: document.getElementById('txtCaratula').value,
        Titulo: document.getElementById('txtTitulo').value,
        fechaPublicacion: document.getElementById('txtFecha').value,
        likes: document.getElementById('txtLikes').value,
        comentarios: document.getElementById('txtComentarios').value,
        redactor: document.getElementById('txtRedactor').value,
        resumenNoticia: document.getElementById('txtResumen').value,
        detalleNoticia: document.getElementById('txtDetalle').value,
        categoria: document.getElementById('Categoria').value,
        principal: document.getElementById('txtPrincipal').value,
        ultimaHora: document.getElementById('txtUltima').value,

    };

    Noticias.push(nuevaNoticia);

    localStorage.setItem('Noticias', JSON.stringify(Noticias));


    generarNoticias();

    generarSelect();

}


//Ver version detallada de la noticia
function verDetalles(indice) {
    document.getElementById('indice-artista-seleccionado').value = indice;
    artistaSeleccionado = indice;


    document.getElementById('detalle').innerHTML =
        `
    <div class=" col-md-12 col-xs-12 col-sm-12 bg-white ">

        <div class="container bg-dark">
            <div class="row">
                <div class="contenedor ">
                    <img src="${Noticias[indice].Caratula}" class="w-100 principal ">
                    <div class="texto-encima "><span class="badge badge-danger p-1">&nbsp;Ultima Hora</span></div>
                </div>

            </div>

            <div class="row mt-2">
                <h6 class="col-12">${Noticias[indice].Titulo}</h6>
                <p style="color: darkgray;" class="col-12 ">${Noticias[indice].detalleNoticia}</p>
                <p style="color: darkgray;" class="col-12 ">${Noticias[indice].likes} / ${Noticias[indice].fechaPublicacion}<br>
                    <p style="color: darkgray;" class="col-12 ">${Noticias[indice].redactor}<br>

            </div>



        </div>
    </div> `;

    $("#detalle").show();




}