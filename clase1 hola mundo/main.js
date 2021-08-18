/* creamos una constante para entrar a vue
el nombre app puede ser cualquier nombre */
const app = Vue.createApp({
    /* la data es donde nosotros vamos a ver reflejados los datos en la vista */
    data() {
        return {
            titulo:'este es un hola mundo con vue js',
            cantidad: 1000,
            enlace: 'http://ticdwem.com',
            estado:false,
            servicios:['tranferencias','pagos','cheques']
        }
    },
})