console.log('Componente Vue')
console.log(Vue)

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
    data(){
        return{
            nombre: 'Kevin',
            apellido: 'Chiguano',
            mensaje: 'Hola mundo 2 desde Vue.JS'
        }
    },

    methods:{
        cambiarNombre(){
            console.log('Boton cambiar nombre')
            this.nombre = 'Paul'
        },

        cambiarApellido(){
            console.log('Boton cambiar apellido')
            this.apellido = 'Correa'
        }
    }
    

})

//# -> identificar un identificadr
app.mount('#myAplication')