const arreglo = []

const app = Vue.createApp({

    data() {
        return {
            miarreglo: arreglo,
            nombre: '',
            apellido: '',
            edad: '',
            genero: '',
        }
    },

    methods: {
        agregarEstudiante() {
            console.log('Vamos agregar')
            const nuevoEstudiante = {
                nombre: this.nombre,
                apellido: this.apellido,
                edad: this.edad,
                genero: this.genero,
            }

            this.miarreglo.push(nuevoEstudiante)

            // Restablecer los valores de los campos de entrada
            this.nombre = "";
            this.apellido = "";
            this.edad = "";
            this.genero = "";
        }


    }


})

//# -> identificador
app.mount('#myAppFormulario')