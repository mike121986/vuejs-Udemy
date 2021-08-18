app.component('menu-header', {
    template: /*html*/`
                        <nav class="ml-5">
                            <ul>
                                <li v-for="(item, index) in links" :key="index"><a  v-bind:href="index">{{item}}</a></li>
                            </ul>
                        </nav>`,
    data() {
        return {
            links: {'index.html':'hola mundo', 'renderizar.html':'renderizar', 'v-bind.html':'atributo v-bind', 'ifelse.html':'v-if v-else', 'vfor.html':'v-fo', 'eventoClick.html':'Agregar con boton', 'clasdinamico.html':'Class Dinamico', 'componentes.html':'Componenetes'}
        }

    }
})