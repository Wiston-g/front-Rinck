<template >
    <h2>Completar perfil</h2>
    <form   
            ref="usuario"
            :rules="rules"
            @submit.prevent="saveForm()">

    <alerts-components v-for="ass in alertArray" :key="ass.txt" :alertas="alertArray"></alerts-components>

        <div class="mb-3 mt-3">
            <label for="exampleInputPassword1" class="form-label">Nombre</label>
            <input v-model="user.name" type="text" class="form-control">
        </div>
        <div class="mb-3 mt-3">
            <label for="exampleInputEmail1" class="form-label">Correo Electronico:</label>
            <input v-model="user.email" type="email" class="form-control" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 mt-3">
            <label for="exampleInputPassword1" class="form-label">Direccion</label>
            <input v-model="user.address" type="text" class="form-control">
        </div>
        <div class="mb-3 mt-3">
            <label for="exampleInputPassword1" class="form-label">Fecha nacimiento</label>
            <input v-model="user.birthdate" type="date" class="form-control">
        </div>
        <div class="mb-3 mt-3">
            <label for="exampleInputPassword1" class="form-label">Ciudad</label>
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
           <button         
                v-for="btn in btns" 
                :key="btn.txt" 
                type="submit" 
                class="btn mt-2" 
                :class="btn.class">
                    {{ btn.txt }}
            </button>
        </div>
    </form>
</template>


<script>
import AlertsComponents from "../components/AlertsComponents.vue";

export default {    
    name: 'FormPerComponents',
    props: ['btns'],
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
                password: '',
                password_confirmation: ''
            },
            rules:{
                email:[{
                    required: true,
                    message: 'Campo required',
                }],
                password:[{
                    required: true,
                    message: 'Campo required',
                },
                {
                    min: 8,
                    message: 'limite de caracteres min 8',
                }],
                password_confirmation:[{
                    required: true,
                    message: 'Campo required',
                },
                {
                    min: 8,
                    message: 'limite de caracteres min 8',
                }],
            }
        }
    },
    methods:{
        validacionFormulario(datas){
            this.$ref['user'].validate((valid)=>{
                if (valid) {
                    return this.validacion.valido=true;
                }else{
                    return this.validacion.valido=false;
                }
            })
        },
        saveForm(){
           
            const myHeaders =  {
                "Content-Type": "application/json",
                "Accept" : "application/json",
                'Authorization': `Bearer ${token}`, 
            };

            let formdata = {
                'email': this.user.email,
                'password' : this.user.password,
            };

            this.users.push(formdata);
           
            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(formdata),
                redirect: 'follow'
            };
            console.log(formdata);
            fetch('http://localhost:8000/api/login', requestOptions)
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
                    setTimeout(this.$router.push('/profile'), 5000);
                };
            })
            .catch(error => console.log(error));

        },
    },
}
</script>

<style>

</style>