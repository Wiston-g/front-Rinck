<template v-if="btns.formu == register" >
    
    <form   
            ref="usuario"
            :rules="rules"
            @submit.prevent="saveForm()">

          
        
        <alerts-components v-for="ass in alertArray" :key="ass.txt" :alertas="alertArray"></alerts-components>
        
        <div class="mb-3 mt-3">
            <label for="name" class="form-label">Nombre:</label>
            <input v-model="usuario.name" type="text" class="form-control" aria-describedby="emailHelp">
        </div>    
        <div class="mb-3 mt-3">
            <label for="email1" class="form-label">Correo Electronico:</label>
            <input v-model="usuario.email" type="email" class="form-control" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 mt-3">
            <label for="Password1" class="form-label">Contraseña</label>
            <input v-model="usuario.password" type="password" class="form-control" autocomplete="off" >
        </div>
        <div class="mb-3 mt-3 " >
            <label for="Password2" class="form-label">Confirmar Contraseña</label>
            <input v-model="usuario.password_confirmation" type="password" class="form-control" autocomplete="off" >
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
    name: 'FormRegComponents',
    props: ['btns'],
    components: {
        AlertsComponents,
    },
    data () {
        return{
            alertArray:[],
            user:[],
            valicion:{
                valido: false,
            },
            usuario:{
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
            this.$ref['usuario'].validate((valid)=>{
                if (valid) {
                    return this.validacion.valido=true;
                }else{
                    return this.validacion.valido=false;
                }
            })
        },
        saveForm(){
            let formData = new FormData(); 
            formData.append("name", this.usuario.name);
            formData.append("email", this.usuario.email);
            formData.append("password", this.usuario.password);
            formData.append("password_confirmation", this.usuario.password_confirmation);

            console.log(typeof(this.usuario.name));

            this.user.push(formData);

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "application/json");

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formData,
                redirect: 'follow'
            };

            /*
            this.usuario.name = '';
            this.usuario.email = '';
            this.usuario.password = '';
            this.usuario.password_confirmation ='',*/

            //this.usuario.validacionFormulario();   
            fetch('http://localhost:8000/api/register', requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.errors) {
                    let msg = result.errors;
                    const alerta = {
                        class: 'alert-danger text-danger',
                        txt: msg,
                    }
                    this.alertArray.push(alerta);
                    setTimeout( () =>{ this.alertArray.length=0 },  2000);
                    //this.$router.push('/login');
                }
            })
            .catch(error => console.log(error));
        },
    },
}
</script>

<style>

</style>