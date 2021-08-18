/* creamos una constante para entrar a vue
el nombre app puede ser cualquier nombre */
const app = Vue.createApp({
    /* la data es donde nosotros vamos a ver reflejados los datos en la vista */
    data() {
        return {
            titulo:'este es un hola mundo con vue js',
            cantidad: 1000,
            enlace: 'http://ticdwem.com',
            estado:true,
            servicios:['tranferencias','pagos','cheques'],
            desactivar:false /* creasmos esta propiedad para decir que cuando esta en false quite el disbled del html */
        }
    },
    methods: {
        agergarSaldo(){            
            this.cantidad = this.cantidad + 100
            this.desactivar = false
            this.estado=true
        },
        disminuirSaldo(){
            if(this.cantidad === 0){
                this.desactivar = true
                this.estado = false
                alert ("ya no tienes saldo")
                return
            }
                this.cantidad = this.cantidad - 100

           
        }
    },
    computed:{
        /* LAS CLASES COMPUTADAS SIEMPRE DEBEN REORNAR ALGO */
        colorCantidad(){
            return this.cantidad > 600 ? 'text-success' : 'text-danger'
        }
    }
})