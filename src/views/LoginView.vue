<template>
    <div class="home">
    <div class="row">
      <div class="col-lg-6">
        <div class="img-cont">
          <img alt="Vue logo" src="../assets/img/Rick-and-Morty.png" class="img-logo">
          <h2 class="text-center text-lg-end">Podras tener toda la informacion de tus personajes favoritos</h2>
        </div>
      </div>
      <div class="col-lg-6">
        <card-components   class="mx-auto card-comp ">
          <FormComponents :btns="btnArray"/>
        </card-components>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponents from "../components/CardComponents.vue";
import FormComponents from "../components/FormComponents.vue";
export default {
    name: 'Login',
    components: {
        CardComponents,
        FormComponents,
  },
  data(){
    return{
      btnArray: [
        {
          txt: 'Iniciar sesión',
          class: 'btn-primary',
          formu: 'login',
        },
      ],
    }
  },
}

</script>

<style>
    .img-logo{
  width:100%; 
  height: 95%;
}

.card-comp{
  max-width: 400px;
  margin-top: 8rem;
}

@media (min-width: 992px) {
  .home{
    margin: 4em auto;;
  }
  img{
    margin: 0;
  }
}
</style>