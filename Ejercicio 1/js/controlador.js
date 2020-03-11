var localStorage = window.localStorage;
var canales;

//Verifica si hay datos en el local storage 

if (localStorage.getItem("canales") == null) {
    canales = [{
            canal: "Fuera JOH",
            Descripcion: "Canal de Marchas",
            Videos: [{
                Caratula: "/img/1.jpg",
                Titulo: "Marcha de las Antorchas",
                Visualizaciones: "19k",
                Duracion: "3:55",
                Subido: "Hace 19 horas"

            }, ]

        },

        {
            canal: "Anime Cool",
            Descripcion: "Canal de Animes",
            Videos: [{
                    Caratula: "/img/2.jpg",
                    Titulo: "Shingeki no Kyoyin",
                    Visualizaciones: "19k",
                    Duracion: "24 : 54",
                    Subido: " Hace 3 Años"
                },
                {
                    Caratula: "/img/3.jpg",
                    Titulo: "Shingeki no Kyoyin",
                    Visualizaciones: "19k",
                    Duracion: "24 : 54",
                    Subido: " Hace 2 Años"
                },
                {
                    Caratula: "/img/4.jpg",
                    Titulo: "Dragon Ball Super Cap 130 Sub-Español",
                    Visualizaciones: "19k",
                    Duracion: "24 : 54",
                    Subido: " Hace 2 Años"
                }
            ]

        },

        {
            canal: "Epica",
            Descripcion: "Canal de Musica",
            Videos: [{
                Caratula: "/img/2.jpg",
                Titulo: "Epica",
                Visualizaciones: "19k",
                Duracion: "3:55",
                Subido: "Hace 19 horas"

            }, ]

        },





    ]
    localStorage.setItem("canales", JSON.stringify(canales));
} else {
    canales = JSON.parse(localStorage.getItem('canales'));
}



//Genra los videos del arreglo
function generarVideo() {

    document.getElementById("Videos").innerHTML = '';
    for (let i = 0; i < canales.length; i++) {

        for (let j = 0; j < canales[i].Videos.length; j++) {

            document.getElementById("Videos").innerHTML +=

                ` <div class=" col-md-2 col-xs-12 col-sm-12 bg-light ">
        <div class="container mt-3">
            <div class="row">
                <div class="contenedor">
                    <img src="${canales[i].Videos[j].Caratula}" class="w-100 video ">
                    <div class="texto-encima ">${canales[i].Videos[j].Titulo}<span class="badge badge-dark p-1">&nbsp;${canales[i].Videos[j].Duracion}</span></div>
                </div>

            </div>
            <div class="row">
                <h6 class="col-12">${canales[i].Videos[j].Titulo}</h6>
                <p style="color: darkgray;" class="col-12 ">${canales[i].canal}</p>
                <p style="color: darkgray;" class="col-12 ">${canales[i].Videos[j].Visualizaciones}/ ${canales[i].Videos[j].Subido}</p>

            </div>

        </div>
    </div>`;

        }
    }
}

generarVideo();


//Toma el valor del select e inserta el video en el canal correspondiente
function guardarVideo() {

    let canal = document.getElementById('canal').value;
    let video = {
        Caratula: document.getElementById('txtCaratula').value,
        Titulo: document.getElementById('txtTitulo').value,
        Visualizaciones: document.getElementById('vistas').value,
        Duracion: document.getElementById('duracion').value,
        Subido: document.getElementById('subido').value

    };

    canales[canal].Videos.push(video);

    localStorage.setItem('canales', JSON.stringify(canales));


    generarVideo();

}

//Carga los datos de los canales para agregar videos correctamente
function generarSelect() {

    document.getElementById("canal").innerHTML = '';
    for (let i = 0; i < canales.length; i++) {



        document.getElementById("canal").innerHTML +=

            `  <option value="${i}">${canales[i].canal}</option>`;


    }
}

generarSelect();