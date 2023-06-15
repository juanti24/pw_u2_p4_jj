
const arreglo = [
    { nombre: 'Kevin', apellido: 'Chiguano' },
    { nombre: 'Jaime', apellido: 'Delgado' },
    { nombre: 'Carlos', apellido: 'Montes' },
    { nombre: 'Mario', apellido: 'Virgilio' },
    { nombre: 'Elbert', apellido: 'Galarga' },
    { nombre: 'Lobo', apellido: 'Lopez' },
    { nombre: 'Andrea', apellido: 'Bonilla' },
    { nombre: 'Manzana', apellido: 'Caliente' },
    { nombre: 'Cuy', apellido: 'Asado' },
    { nombre: 'Mal', apellido: 'DiOjo' }
]

console.log(arreglo)

//options Api
const app = Vue.createApp({

    data() {
        return {
            miarreglo: arreglo,
            nombre: 'Kevin'
        }
    },

    methods: {
        agregarEstudiante(event) {
            console.log('Vamos agregar')
            console.log(this.nombre)
            console.log(event)
            console.log(event.charCode)
 

            if (event.charCode == '13') {
                console.log('Presiono Enter')
                const nuevoEstudiante={
                    nombre: this.nombre,
                    apellido:'Nuevo Apellido'
                }

                this.miarreglo.unshift(nuevoEstudiante)

            } else {
                console.log('No es enter')
            }
        },


        agregarEstudiante2() {
            console.log('Vamos agregar')
            const nuevoEstudiante={
                nombre: this.nombre,
                //apellido:'Nuevo Apellido'
            }

            this.miarreglo.unshift(nuevoEstudiante)
        }


    }


})

//# -> identificador
app.mount('#myAplication2')
