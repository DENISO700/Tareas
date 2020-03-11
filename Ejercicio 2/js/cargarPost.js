var localStorage = window.localStorage;
var post;


//Verifica si hay datos en el local storage 
if (localStorage.getItem("post") == null) {
    post = [{
            usuario: "Darwin Rodas",
            comentario: [{
                    contenido: "Marcha de las Antorchas",
                    Fecha: "19/20/2016",
                },
                {
                    contenido: "Marcha de las Antorchas 2",
                    Fecha: "19/20/2017",
                }
            ],



        }, {
            usuario: "Isaac Ramirez",
            comentario: [{
                contenido: "Marcha de las Antorchas",
                Fecha: "19/20/2016",
            }],

        }, {
            usuario: "Hector Mejia",
            comentario: [{
                contenido: "Marcha de las Antorchas",
                Fecha: "19/20/2016",
            }],

        }, {
            usuario: "Kath Santos",
            comentario: [{
                contenido: "Marcha de las Antorchas",
                Fecha: "19/20/2016",
            }],

        }

    ]
    localStorage.setItem("post", JSON.stringify(post));
} else {
    post = JSON.parse(localStorage.getItem('post'));
}



//Genera todos  los post en el Local Storage
function generarPost() {
    document.getElementById("nuevo").innerHTML = '';

    //inicia
    document.getElementById("nuevo").innerHTML = `  <div class="col-lg-4 col-xl-4 col-md-6 col-xs-12 col-sm-12 px-3 mt-4">
<div class="container bg-light">
    <form action="" id="action">
        <h4>Agregar Post</h4>

        

        <select id="usuarios"></select>

        <textarea cols="49" rows="2" class="mt-2 form-control" placeholder="Que estas Pensando" id="contenido" ></textarea>

        <input type="date" class="form-control mt-2" id="fecha" >

        <button type="button" class="btn btn-primary mt-2 mb-2" onclick="guardarPost();" id="post">Post</button>
    </form>
</div>
</div> `;



    for (let j = 0; j < post.length; j++) {

        for (let i = 0; i < post[j].comentario.length; i++) {

            document.getElementById("nuevo").innerHTML +=

                ` <div class="col-lg-4 col-xl-4 col-md-6 col-xs-12 col-sm-12 mt-4 px-3">
        <div class="container bg-light">
            <div class="row">
                <div class=" container col-4">
                    <div class="text-center m-auto ">
                        <img src="/img/usuario.png" class=" w-100 mt-5 rounded-circle img-thumbnail ">
                    </div>

                </div>
                <div class="container contenedor col-8 ml-0">
                    <span style="font-weight: bold;">${post[j].usuario}</span>&nbsp;<span>${post[j].comentario[i].Fecha}</span>
                </div>
            </div>
            <hr>
            <div class="row">

                <div class="container col-12 text-justify">
                    <p> ${post[j].comentario[i].contenido}</p>
                </div>
            </div>
        </div>
    </div>`;
        }
    }

}

generarPost();






//Toma el valor del select autocargado y inserta el comentario en el usuario correspondiente
function guardarPost() {
    var texto = document.getElementById("contenido").value.length;
    var fecha = document.getElementById("fecha").value.length;

    if (texto == 0) {
        alert("El textarea no puede estar vacío");

    } else if (fecha == 0) {
        alert("Debe Ingresar la fecha");
    } else {
        //Guardar sin validar
        var id = document.getElementById('usuarios').value;
        let nuevo = {
            contenido: document.getElementById('contenido').value,
            Fecha: document.getElementById('fecha').value,


        };

        post[id].comentario.push(nuevo);

        localStorage.setItem('post', JSON.stringify(post));
        generarPost();
        generarSelect();

    }


}



//Genera el select con los usuarios en el Arreglo
function generarSelect() {

    document.getElementById("usuarios").innerHTML = '';
    for (let k = 0; k < post.length; k++) {



        document.getElementById("usuarios").innerHTML +=

            `  <option value="${k}">${post[k].usuario}</option>`;
    }
}

generarSelect();