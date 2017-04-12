<!-- no store here in this component -->
<template>
  <el-row>
    <el-col v-for="p in cars" :span="6">
      <p><img :src="`${p.imgUrl}`" /></p>
      <p>{{ p.title }} {{ p.price }}</a></p>
    </el-col>
  </el-row>
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

</style>
