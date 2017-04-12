<!-- this is the main app, we have store here -->
<template>
<div class="app">
  <!-- header component -->
  <div class="header">
    <header-bar></header-bar>
  </div>
  <!-- ok we have router-view for page -->
  <div class="page">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
  // root store
  import store from '../vuex/store'
  // header
  import HeaderBar from '../components/HeaderBar'
  // export root store and components
  // why store and compoents together
  export default {
    store,
    components: {HeaderBar}
  }
</script>

<style>

</style>
