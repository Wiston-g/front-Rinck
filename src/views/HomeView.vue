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
        <card-components :btns="btnArray" class="mx-auto card-comp ">
          <form>
            <div class="mb-3 mt-3">
              <label for="exampleInputEmail1" class="form-label">Correo Electronico:</label>
              <input type="email" class="form-control" aria-describedby="emailHelp">
            </div>
            <div class="mb-3 mt-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input type="password" class="form-control">
            </div>
          </form>
        </card-components>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponents from "../components/CardComponents.vue";
export default {
  name: 'Home',
  components: {
    CardComponents
  },

  data(){
    return{
      btnArray: [
        {
          txt: 'Iniciar Sesión',
          class: 'btn-primary',
        },
        {
          txt: 'Registraste',
          class: 'btn-info',
        },
      ],
    }
  },
}
</script>

<style scoped>
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