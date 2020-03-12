//El siguiente código es el encargado de generar la informaación de prueba. Se recomienda no modificarlo.

var categorias;
var localStorage = window.localStorage;
var indiceCategoria, indiceAplicacion;

//Verifica si hay datos en el local storage 

if (localStorage.getItem("categorias") == null) {
    categorias = [


        {
            nombreCategoria: "Categoria 0",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            aplicaciones: [

                {
                    codigo: 1,
                    nombre: "App 1",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/1.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 1",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 2,
                    nombre: "App 2",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/2.webp",
                    instalada: true,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 2",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 3,
                    nombre: "App 3",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/3.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 3",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 4,
                    nombre: "App 4",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/4.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 4",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 5,
                    nombre: "App 5",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/5.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 5",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 6,
                    nombre: "App 6",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/6.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 6",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },

            ]
        },

        {
            nombreCategoria: "Categoria 1",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            aplicaciones: [

                {
                    codigo: 7,
                    nombre: "App 7",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/7.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 7",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 8,
                    nombre: "App 8",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/8.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 8",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 9,
                    nombre: "App 9",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/9.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 9",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 10,
                    nombre: "App 10",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/10.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 10",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 11,
                    nombre: "App 11",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/11.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 11",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 1,
                    nombre: "App 12",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/12.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 12",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
            ]
        },

        {
            nombreCategoria: "Categoria 2",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            aplicaciones: [

                {
                    codigo: 13,
                    nombre: "App 13",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/13.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 13",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 14,
                    nombre: "App 14",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/14.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 14",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 15,
                    nombre: "App 15",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/15.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 15",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 16,
                    nombre: "App 16",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/16.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 16",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 17,
                    nombre: "App 17",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/17.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 17",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 18,
                    nombre: "App 18",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/18.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 18",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },

            ]
        },

        {
            nombreCategoria: "Categoria 3",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            aplicaciones: [

                {
                    codigo: 19,
                    nombre: "App 19",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/19.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 19",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 20,
                    nombre: "App 20",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/20.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 20",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 21,
                    nombre: "App 21",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/21.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 21",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 22,
                    nombre: "App 22",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/22.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 22",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 23,
                    nombre: "App 23",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/23.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 23",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 24,
                    nombre: "App 24",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/24.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 24",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },


            ]
        },

        {
            nombreCategoria: "Categoria 4",
            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            aplicaciones: [


                {
                    codigo: 25,
                    nombre: "App 25",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/25.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 25",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 26,
                    nombre: "App 26",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/26.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 26",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 27,
                    nombre: "App 27",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/27.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 27",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 28,
                    nombre: "App 28",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/28.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 28",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 29,
                    nombre: "App 29",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/29.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 29",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },
                {
                    codigo: 30,
                    nombre: "App 30",
                    descripcion: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                    icono: "img/app-icons/30.webp",
                    instalada: false,
                    app: "app/demo.apk",
                    calificacion: 3,
                    descargas: 1000,
                    desarrollador: "Desarrollador 30",
                    imagenes: [
                        "img/app-screenshots/1.webp",
                        "img/app-screenshots/2.webp",
                        "img/app-screenshots/3.webp"
                    ],
                    comentarios: [{
                            comentario: "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
                            calificacion: 2,
                            fecha: "12/12/2012",
                            usuario: "Juan"
                        },
                        {
                            comentario: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            calificacion: 1,
                            fecha: "12/12/2012",
                            usuario: "Pedro"
                        },
                        {
                            comentario: "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
                            calificacion: 4,
                            fecha: "12/12/2012",
                            usuario: "Maria"
                        }
                    ]
                },

            ]
        },

    ];
    localStorage.setItem("categorias", JSON.stringify(categorias));
} else {
    categorias = JSON.parse(localStorage.getItem('categorias'));
}


//Genra los Apps del arreglo
//data-filter=".electronicos"
function generarApps() {

    document.getElementById("Apps").innerHTML = '';

    for (let i = 0; i < categorias.length; i++) {

        for (let j = 0; j < categorias[i].aplicaciones.length; j++) {

            indiceCategoria = categorias[i].aplicaciones[j];



            document.getElementById("Apps").innerHTML +=

                `   <div class="col-md-3 col-lg-2 col-xl-2 col-6 cambio" data-toggle="modal" data-target="#exampleModalScrollable" style="cursor:pointer" onclick="guardarIndices(${i}, ${j});Modal();">
                   <div class=" bg-white p-2 my-2 sombra" style="width: 10rem; ">
                   <img src="${categorias[i].aplicaciones[j].icono}" class="card-img-top w-100 " >
                    <div class="">
                        <h5 class="card-title">${categorias[i].aplicaciones[j].nombre}</h5>
                        <p>${categorias[i].aplicaciones[j].desarrollador}</p>
                        <p class="text-center" ><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
                    </div>
                </div>
            </div>`;

        }
    }
}

generarApps();

//Carga los datos de los canales para agregar videos correctamente
function generarSelect() {


    for (let i = 0; i < categorias.length; i++) {



        document.getElementById("cat").innerHTML +=

            `  <option value="${i}">${categorias[i].nombreCategoria}</option>`;


    }
}

generarSelect();

//filtra los elementos segun categoria
function Filtro() {

    let indice = document.getElementById("cat").value;

    if (indice < 5) {


        document.getElementById("Apps").innerHTML = "";

        for (let j = 0; j < categorias[indice].aplicaciones.length; j++) {

            document.getElementById("Apps").innerHTML +=

                `   <div class="col-md-3 col-lg-2 col-xl-2 col-6">
            <div class= " bg-white p-2 my-2   sombra " style="width: 10rem; " >
                <img src="${categorias[indice].aplicaciones[j].icono}" class="card-img-top w-100 ">
                <div class="">
                    <h5 class="card-title">${categorias[indice].aplicaciones[j].nombre}</h5>
                    <p>${categorias[indice].aplicaciones[j].desarrollador}</p>
                    <p class="text-center"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>

                </div>
            </div>
        </div>`;

        }
    } else {
        generarApps();
    }

}

//guardar Indices
function guardarIndices(ic, ia) {
    indiceCategoria = ic;
    indiceAplicacion = ia;
}

//generar la modal
function Modal() {

    document.getElementById("cuerpo").innerHTML =

        `      <div class="row" id="datos">

        <div class="col-4">
            <img src="${categorias[indiceCategoria].aplicaciones[indiceAplicacion].icono}" class="w-100" alt="">
        </div>

        <div class="col-6">
            <h5>${categorias[indiceCategoria].aplicaciones[indiceAplicacion].nombre}</h5>
            <h6>${categorias[indiceCategoria].aplicaciones[indiceAplicacion].desarrollador}</h6>
            <p>${categorias[indiceCategoria].aplicaciones[indiceAplicacion].descripcion}</p>
        </div>

        <hr>

        <div class="col-12">
        <p class="text-center"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></p>
        </div>

        <hr>

    </div>

    <div class="row" id="carrusel">

        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${categorias[indiceCategoria].aplicaciones[indiceAplicacion].imagenes[0]}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${categorias[indiceCategoria].aplicaciones[indiceAplicacion].imagenes[1]}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${categorias[indiceCategoria].aplicaciones[indiceAplicacion].imagenes[2]}" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

    </div>

    <div class="row" id="comentarios">

        <div class="row">

        
            <div class="col-2 my-2 ">
                <img src="img/user.webp" class="w-100 img-thumbnail text-center m-auto">
            </div>

            <div class="col-10 my-2 text-rigth">
                <h6>${categorias[indiceCategoria].aplicaciones[indiceAplicacion].comentarios[0].usuario}</h6>
                <p>${categorias[indiceCategoria].aplicaciones[indiceAplicacion].comentarios[0].comentario}</p>
            </div>
        </div>

        <div class="row">
            <div class=" col-2 my-2 ">
                <img src="img/user.webp " class="w-100 img-thumbnail text-center m-auto ">
            </div>

            <div class="col-10 my-2 text-rigth ">
                <h6>${categorias[indiceCategoria].aplicaciones[indiceAplicacion].comentarios[1].usuario}</h6>
                <p>${categorias[indiceCategoria].aplicaciones[indiceAplicacion].comentarios[1].comentario}</p>
            </div>
        </div>

        <div class="row">
            <div class="col-2 my-2 ">
                <img src="img/user.webp" class="w-100 img-thumbnail text-center m-auto">
            </div>

            <div class="col-10 my-2 text-rigth">
                <h6>${categorias[indiceCategoria].aplicaciones[indiceAplicacion].comentarios[2].usuario}</h6>
                <p>${categorias[indiceCategoria].aplicaciones[indiceAplicacion].comentarios[2].comentario}</p>
            </div>
        </div>

    </div>`;


}

//Estrellas



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