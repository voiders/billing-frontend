<template>
    <div class="section is-medium">
        <div class="container">
            <div class="receipt-container">
                <div class="columns is-centered is-multiline">
                    <div class="column is-narrow">
                        <div >
                            <h2 class="title">Orden </h2>
                            <div class="field is-horizontal is-marginless">
                                <div class="field-body">
                                    <div class="field">
                                        <label class="label" >Fecha: </label>
                                    </div>
                                </div>
                                <div class="field-body">
                                    <div class="field has-text-right">
                                        <label v-text="currentDate"></label>
                                    </div>
                                </div>
                            </div>
                            <div class="field is-horizontal is-marginless">
                                <div class="field-body">
                                    <div class="field">
                                        <label class="label" >Número: </label>
                                    </div>
                                </div>
                                <div class="field-body">
                                    <div class="field has-text-right">
                                        <label v-text="receiptNumber"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table class="table is-striped">
                            <thead>
                                <th title="Cantidad">Cantidad</th>
                                <th title="Descripcion">Descripcion</th>
                                <th title="Precio">Precio</th>
                                <th title="Subtotal">Subtotal</th>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Total</th>
                                    <th><span>Q</span><label v-text="total"></label></th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr v-for="detail in receiptDetails" :key="detail.qty">
                                    <td>{{ detail.qty }}</td>
                                    <td>{{ detail.description }}</td>
                                    <td>{{ detail.price}}</td>
                                    <td>{{ detail.qty * detail.price }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <br>
                            <div class="field is-horizontal is-marginless">
                                <div class="field-body">
                                    <div class="field  has-text-right">
                                        <label class="label" >Recibido (f): </label>
                                    </div>
                                </div>
                                <div class="field-body">
                                    <div class="field">
                                        <label class="label"> __________________________</label>
                                    </div>
                                </div>
                            </div>
                        </br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .receipt-container {
        border-style: solid 1px;
    }

    table.table {
        text-align: center;
    }
</style>
<script>
export default {
  name: "Receipt",
  data () {
      return {
          receipt: {

          },
          currentDate: new Date().toLocaleString(),
          receiptDetails: [
              {
                  qty: 4,
                  description: 'asdf',
                  price: 3.25
              },
               {
                  qty: 2,
                  description: 'asdf',
                  price: 15
              }
              , {
                  qty: 1,
                  description: 'asdf',
                  price: 20
              }
          ],
          total: 41,
          receiptNumber: '00000046'
      }
  }
}
</script>
