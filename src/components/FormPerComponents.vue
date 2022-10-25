<template >
    <h2>Completar perfil</h2>
    <form   ref="user"
            v-for="user in infoUser"
            :key="user.name"
            @submit.prevent="saveForms()">

    <alerts-components v-for="ass in alertArray" :key="ass.txt" :alertas="alertArray"></alerts-components>

        <div class="mb-3 mt-3">
            <label for="name" class="form-label">Nombre</label>
            <input  v-model="user.name" type="text" class="form-control">
        </div>
        <div class="mb-3 mt-3">
            <label for="exampleInputEmail1" class="form-label">Correo Electronico:</label>
            <input v-model="user.email" type="email" class="form-control" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 mt-3">
            <label for="address" class="form-label">Direccion</label>
            <input v-model="user.address" type="text" class="form-control">
        </div>
        <div class="mb-3 mt-3">
            <label for="birthdate" class="form-label">Fecha nacimiento</label>
            <input v-model="user.birthdate" type="date" class="form-control">
        </div>
        <div class="mb-3 mt-3">
            <label for="city" class="form-label">Ciudad</label>
            <input v-model="user.city" type="text" class="form-control">
        </div>
        <div class="mb-3 mt-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input v-model="user.password" type="password" class="form-control">
        </div>
        <div class="mb-3 mt-3 " >
            <label for="Password2" class="form-label">Confirmar Contraseña</label>
            <input v-model="user.password_confirmation" type="password" class="form-control" autocomplete="off" >
        </div>
        
        <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary mt-2">Completar perfil</button>          
        </div>
    </form>
</template>


<script>
import AlertsComponents from "../components/AlertsComponents.vue";

export default {    
    name: 'FormPerComponents',
    props: ['infoUser'],
    components: {
        AlertsComponents,
    },
    data () {
        return{
            alertArray:[],
            valicion:{
                valido: false,
            },
            users:[],
            user:{
                name: '',
                email: '',
                address: '',
                birthdate: '',
                city: '',
                password: '',
                password_confirmation: ''
            },
        }
    },
    methods:{
        saveForms(){
            const myHeaders =  {
                "Content-Type": "application/json",
                "Accept" : "application/json",
                'Authorization': 'Bearer ' +  "6|UFoWxz4C6zIZzxEB7PdiFKBjROFKxON7ae8P02bN", 
            };

                console.log('ff ' + this.user.name);
            let formdata = {
                'name': this.user.name,
                'email': this.user.email,
                'address': this.user.address,
                'birthdate': this.user.birthdate,
                'city': this.user.city,
                'password' : this.user.password,
                'password_confirmation' : this.user.password_confirmation,
                
            };

            this.users.push(formdata);
          
            let requestOptions = {
                method: 'PUT',
                headers: myHeaders,
                body: JSON.stringify(formdata),
            };
            console.log(formdata);
            fetch('http://localhost:8000/api/update', requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.status == 0) {
                    let msg = result.msg;
                    let alerta = {
                        class: 'alert-danger text-danger',
                        txt: msg,
                    }
                    this.alertArray.push(alerta);
                    setTimeout( () =>{ this.alertArray.length=0 },  2000);
                    this.user.password = '';
                    this.user.password_confirmation ='';
                }
                
                if (result.status == 1) {
                    let msg = result.msg;
                    let alerta = {
                        class: 'alert-success text-success',
                        txt: msg,
                    }
                    this.alertArray.push(alerta);
                    setTimeout( () =>{ this.alertArray.length = 0 },  2000);
                };
            })
            .catch(error => console.log(error));

        },
    },
}
</script>

<style>

</style>