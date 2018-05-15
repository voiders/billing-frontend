<template>
    <div class="section">
        <div class="container">
            <div class="receipt-container">
                <hr>
                <h2 class="title">Recibo</h2>
                <div>
                    <label for="">Fecha</label>
                    <label for="" v-text="currentDate"></label>
                </div>
                <div>
                    <label for="lblSerie">Serie</label>
                    <label id="lblSerie" v-text="receiptSerie"></label>
                </div>
                <br>
                <div class="columns is-centered">
                    <div class="column is-narrow">
                        <table class="table">
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
          receiptSerie: 'A15'
      }
  }
}
</script>
