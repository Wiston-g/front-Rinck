<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3">
        <card-components  class="mt-2 mx-auto card-comp "> 
          <div class="d-grid gap-2">
            <button class="btn btn-dark" @click="showPerFavorite()">Personajes Favoritos</button>   
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-dark" @click="showPerAll()">Todos los personajes</button>   
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-dark" @click="showForm()">Completar Perfil</button>   
          </div>
        </card-components>
      </div>
      
      
      <div class="col-lg-9" v-if="showForms.estado == true">
        <card-components  class="mt-2 mx-auto card-comp ">    
          <FormPerComponents :infoUser="user"/>   
        </card-components>
      </div>

      <div class="col-lg-9 bg-secundary mt-2 pb-2" v-if="showForms.personajesF == true">
        <div class="mt-2 mb-4">
          <h2>Personajes Favoritos</h2>
        </div>
        <CardComponents   
          v-for="favorite in favorites" 
          :key="favorite.name"
          class="mt-2 mx-auto single-post"
          :title="favorite.name"
          :parrafo="favorite.gender"
          :picture="favorite.image"/>
        
      </div>

      <div class="col-lg-9 bg-secundary mt-2 pb-2" v-if="showForms.allPer == true">
        <div class="mt-2 mb-4">
          <h2>Todos los personajes</h2>
        </div>
        <card-components   
          v-for="personaje in allpersonajes" 
          :key="personaje.name"
          class="mt-2 mx-auto single-post"
          :title="personaje.name"
          :parrafo="personaje.id"
          :picture="personaje.image"
          >
            <button class="btn btn-primary mt-2" @click="perso = personaje.id, savePerso()"> Agregar a favoritos</button>
        </card-components>
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
      perso: null,
      btnArray: [
        {
          txt: 'Agregar favorito ',
          class: 'btn-primary',
          formu: 'login',
        },
      ],
      user:[],
      favorites:[],
      allpersonajes:[],
      showForms: {
        estado: false,
        personajesF : true,
        allPer: false,
      },
    }
  },
  created(){
     (()=>{
       const myHeaders =  {
         "Content-Type": "application/json",
        "Accept" : "application/json",
        'Authorization': 'Bearer ' +  localStorage.getItem('token'), 
      };

      console.log(localStorage.getItem('Token'));

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };
  
      fetch('http://localhost:8000/api/store', requestOptions)
        .then(response => response.json())
        .then(result =>{
          
          result.characters.forEach(element => {
            let favorit = {
              name: element.name,
              gender: element.gender,
              image: element.image,
            }
            this.favorites.push(favorit);
          });
        })
        .catch(error => console.log(error));     
    })();
    (()=>{
      const myHeaders =  {
        "Content-Type": "application/json",
        "Accept" : "application/json",
        'Authorization': 'Bearer ' +  localStorage.getItem('Token'), 
      };

      let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify({'page' : '1'}),
      };
  
      fetch('http://localhost:8000/api/index', requestOptions)
        .then(response => response.json())
        .then(result =>{
          result.characters.forEach(element => {
            let personaje = {
              name: element.name,
              image: element.image,
              id: element.id,
            }
            this.allpersonajes.push(personaje);
          });
        })
        .catch(error => console.log(error));  
    })();
  },
  methods:{
    showForm(){
      if (this.showForms.estado == false){
        this.getUsert();
        this.showForms.estado = true;
        this.showForms.personajesF = false;
        this.showForms.allPer = false;
      }
    },
    showPerFavorite(){
      if (this.showForms.personajesF == false){
        this.getfavorite();
        this.showForms.estado = false;
        this.showForms.allPer = false;
        this.showForms.personajesF = true;
      } 
    },
    showPerAll(){
      if (this.showForms.allPer == false){
        this.showForms.estado = false;
        this.showForms.allPer = true;
        this.showForms.personajesF = false;
      } 
    },
    getUsert(){
      const myHeaders =  {
        "Content-Type": "application/json",
        "Accept" : "application/json",
        'Authorization': 'Bearer ' +  localStorage.getItem('Token'), 
      };

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };
  
      fetch('http://localhost:8000/api/user-profile', requestOptions)
        .then(response => response.json())
        .then(result =>{
          let usuario = {
            'name': result.user.name,
            'email': result.user.email,
            'address': result.user.address,
            'birthdate': result.user.birthdate,
            'city': result.user.city,
            'password' : result.user.password,
            'password_confirmation' : result.user.password_confirmation,
          }
          this.user.length=0; 
          this.user.push(usuario);
        })
        .catch(error => console.log(error));     
    },
    savePerso(){
       const myHeaders =  {
        "Content-Type": "application/json",
        "Accept" : "application/json",
        'Authorization': 'Bearer ' +  localStorage.getItem('Token'), 
      };

      let nstring =String(this.perso);

      let formdata ={id : nstring};
      console.log(formdata);      
      
      let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(formdata),
      };
     
      fetch('http://localhost:8000/api/create', requestOptions)
      .then(response => response.json())
      .then(result)
      .catch(error => console.log(error));

      
    },
    getfavorite(){
      console.log(localStorage.getItem('Token'));
      this.favorites.length = 0;
      const myHeaders =  {
        "Content-Type": "application/json",
        "Accept" : "application/json",
        'Authorization': 'Bearer ' +  localStorage.getItem('Token'), 
      };

      let requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };
  
      fetch('http://localhost:8000/api/store', requestOptions)
        .then(response => response.json())
        .then(result =>{
          
          result.characters.forEach(element => {
            let favorit = {
              name: element.name,
              gender: element.gender,
              image: element.image,
            }
            
            this.favorites.push(favorit);
          });
        })
        .catch(error => console.log(error));    
    }
  },
}
</script>

<style>

</style>