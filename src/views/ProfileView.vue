<template>
  <div class="container">
    <div class="row">
    <div class="col-lg-3">
      <card-components  class="mt-2 mx-auto card-comp "> 
        <div class="d-grid gap-2">
          <button class="btn btn-dark" @click="showForm()">Completar Perfil</button>   
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-dark">Personajes Favoritos</button>   
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-dark">Todos los personajes</button>   
        </div>
      </card-components>
    </div>
    
    
    <div class="col-lg-8" v-if="showForms.estado == true">
      <card-components :btns="btnArray" class="mt-2 mx-auto card-comp ">    
        <FormPerComponents/>   
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
import FormPerComponents from "../components/FormPerComponents.vue";
export default {
  name: 'Profile',
  components: {
    CardComponents,
    FormPerComponents
  },
  data(){
    return{
      btnArray: [
        {
          txt: 'completar perfil',
          class: 'btn-primary',
          formu: 'completar perfil',
        },
      ],
      showForms: {
        estado: false,
      },
    }
  },
  methods:{
    showForm(){
      if (this.showForms.estado == false){
        this.showForms.estado = true;
      } else {
        this.showForms.estado = false;
      }
    },
  },
}
</script>

<style>

</style>