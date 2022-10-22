<template>
  <div class="container">
    <div class="row">
    <div class="col-lg-3">
      <card-components :btns="btnArray" class="mt-2 mx-auto card-comp ">    
      </card-components>
    </div>
    <div class="col-lg-8">
      <CardComponents
        class="mt-2 mx-auto single-post"
        title="Rick"
        parrafo="imagen de prueba"
        picture="https://rickandmortyapi.com/api/character/avatar/361.jpeg"/>
    </div>
    </div>
  </div>
</template>

<script>
import CardComponents from "../components/CardComponents.vue";
export default {
  name: 'Profile',
  components: {
    CardComponents
  },
  data(){
    return{
      btnArray: [
        {
          txt: 'Completar Perfil',
          class: 'btn-dark',
        },
        {
          txt: 'Personajes Favoritos',
          class: 'btn-dark',
        },
        {
          txt: 'Todos los personajes',
          class: 'btn-dark',
        },
      ],
    }
  },
}
</script>

<style>

</style>