<!-- no store here in this component -->
<template>
  <div class="container">
    <div class="row">
      <div v-for="p in cars" class="col-lg-4 col-md-6 col-sm-12 mycol">
        <p>
          <a :href="`${p.url}`">
            <img :src="`${p.imgUrl}`" :height=238 :width=357 />
          </a>
        </p>
        <p>
          <b>Title</b>: {{ p.title }}<br/>
          <b>Price</b>: {{ p.price }}<br/>
          <b>Seats</b>: {{ p.seats }}<br/>
          <b>Cat</b>: {{ p.category }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  // get 2 actions
  import { getAllCars } from '../vuex/car/actions'

  export default {
    vuex: {
      // getters
      getters: {
        // cars
        // cars.all....., because it is cars' state
        cars: ({ cars }) => cars.all
      },
      // actions.....????
      actions: {
        getAllCars
      }
    },
    created () {
      // this before mounted.
      // we get all products and dispatch.
      this.getAllCars()
    }
  }
</script>

<style>
.row {
  border: 1px solid;
}

.mycol {
  border: 1px solid;
}
</style>
