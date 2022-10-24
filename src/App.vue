<template>
  <NavComponents/>
</template>

<script>
import NavComponents from './components/NavComponents.vue'
import { inject } from 'vue'

export default {
    name: "App",
    components: {
      NavComponents  
    }
}
</script>

<style>

#app {
  color: #A5ECC9;
}
</style>
