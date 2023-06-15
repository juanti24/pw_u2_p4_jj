//options Api
const app = Vue.createApp({
    //opcion1,
    //opcion2,
    //opcion..n

    //template:`
    //<h1>Hola mundo</h1>
    //<p>Desde Vue.JS</p>
    //<p>{{1+1}}</p>
    //`
    data() {
        return {
            numero: "",
            cambiarFondo: false,
            colores: ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal", "magenta", "cyan"],
            colorDefault: "rgb(5, 130, 172)",
            intervalId: null
        }
    },

    methods: {
        obtener(event) {
            this.numero += event.target.innerText;
        },


        operacionCalcular(event) {

            pantalla = event.target.innerText;

            if (pantalla != '=') {
                this.numero += pantalla
                this.verificarCambioFondo(this.numero);
            } else {
                resultado = eval(this.numero)
                this.numero = resultado.toString()
            }

        },

        borrar() {
            this.numero = ""
        },

        verificarCambioFondo(codigo) {
            const calculadoraDiv = document.querySelector('.calculadora');
            if (this.numero === "159357") {
                this.cambiarFondo = true;
                if (this.intervalId === null) {
                    this.intervalId = setInterval(() => {
                        const colorAleatorio =
                            this.colores[
                            Math.floor(Math.random() * this.colores.length)
                            ];
                        calculadoraDiv.style.backgroundColor = colorAleatorio;
                    }, 1000); // Cambia de color cada 1 segundo
                }
            } else {
                calculadoraDiv.style.backgroundColor = this.colorDefault;
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        },

    }


})

//# -> identificar un identificadr
app.mount('#myAppCalculadora')