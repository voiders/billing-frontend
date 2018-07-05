<template>
    <div class="container">
        <h2 class="title is-2">Agregar producto</h2>
        <div>
            <div class="field">
                <label for="" class="label">Codigo</label>
                <div class="control">
                    <input class="input" type="text" v-model="product.code">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">Costo</label>
                <div class="control">
                    <input type="number" class="input" v-model="product.costOfGood">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">Precio venta</label>
                <div class="control">
                    <input type="number" class="input" v-model="product.price">
                </div>
            </div>
            <div class="field">
                <label for="" class="label">Descripcion</label>
                <div class="control">
                    <textarea name="" id="" cols="30" rows="10" class="textarea" v-model="product.description"></textarea>
                </div>
            </div>
            <div class="field is-grouped">
                <p class="control">
                    <button class="button" @click="save">Guardar</button>
                </p>
                <p class="control">
                    <button class="button" @click="clear">Cancelar</button>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'AddProduct',
    firebase: {
        //items: db.ref('products')
    },
    data() {
        return {
            product: {
                code: '',
                costOfGood: 0,
                price: 0,
                description: ''
            }
        }
    },
    methods: {
        save() {
            let app = this;
            let productCollection = this.$firebase.database().ref('products')
            
            productCollection.push(app.product).then( function(data) {
                console.log(data)
            }).catch( function(err) {
                console.error(err)
            })
            
            app.clear()
        },
        clear() {
            let app = this;
            app.product = {
                code: '',
                costOfGood: 0,
                price: 0,
                description: ''
            }
        }
    }
}
</script>
<style scoped>
    div.container {
        padding: 25px;
    }
</style>