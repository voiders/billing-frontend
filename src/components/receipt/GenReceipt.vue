<template>
    <div class="column is-9">
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Moneda</label>
            </div>
            <div class="field-body">
                <div class="field is-narrow">
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select>
                        <option>Q</option>
                        <option>$</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Producto</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input is-danger" type="text" placeholder="Codigo producto">
                    </div>
                    <p class="help is-danger">
                        This field is required
                    </p>
                </div>
            </div>
        </div>
        <div class="field is-horizontal">
              <div class="field-label">
                <!-- Left empty for spacing -->
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <button class="button is-primary">
                      Generar
                    </button>
                  </div>
                </div>
              </div>
        </div>

        <div>
            
        </div>

    </div>
</template>
<script>
export default {
  name: 'GenReceipt',
  data () {
      return {
        receiptDate: new Date(),
        codProducto: ''
      }
  },
  methods: {

  }
}
</script>
<style scoped>
    .receipt-container {
        text-align: center;
        max-width: 50%;
    }
</style>
