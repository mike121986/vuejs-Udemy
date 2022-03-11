app.component('footer-banco',{
    props:['cntidad','fecha',"valor"],
    template: /*html*/` <div class="bg-dark py-3 mt-2 text-white">
                    <h3>{{texto}} -$ {{cntidad}}</h3>
                    <p>{{fecha}}</p>
                    <h4>{{valor}} este es el valor de cantidad que viene de main.js</h4>
                </div>`,/* esta comillas invertidas se sacas con ALT+96 */
    data(){
        return {
            texto:'footer de mi sitio Web ddesde mi data',
           
        }
    }      
})