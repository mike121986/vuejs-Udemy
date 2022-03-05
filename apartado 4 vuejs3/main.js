/* hacemos una constante 
instanciamos a vue (este viene de nuestri cdn)
 obtenemos la DATA que este retorma un opbjeto que en este caso este retona un titulo
 */

const app = Vue.createApp({
    data(){
        return {
            titulo:"Mi banco con Vuejs",
            cantidad: 1000,
            enlace:'http://ticdwem.com/',
            estado:true,
            servicios:['transferencias','pagos','giros','cheques','edni','mike'],
            desacticar: false
        }
    },
    /* pára los eventos en este caso un CLIK debemos usar un objeto de tipo METHOD */
    methods: {
        agregarSaldo(){
            if(this.cantidad>0){
                this.desacticar = false
                this.estado = true
            }
            this.cantidad = this.cantidad + 100
        },
        dismnuirSaldo(valor){
            if(this.cantidad ===0 || this.cantidad < 0){
                this.desacticar = true
                this.estado  =false
                alert('saldo en cero')
                this.cantidad = 0
                return
            }
            this.cantidad = this.cantidad - valor
        }
    },
})