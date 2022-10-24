<template >
    <form  v-if="btns.formu == login" 
            ref="usuario"
            :rules="rules"
            @submit.prevent="enviar()">
        <div class="mb-3 mt-3">
            <label for="exampleInputEmail1" class="form-label">Correo Electronico:</label>
            <input v-model="usuario.email" type="email" class="form-control" aria-describedby="emailHelp">
        </div>
        <div class="mb-3 mt-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input v-model="usuario.password" type="password" class="form-control">
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
export default {    
    name: 'FormComponents',
    props: ['btns'],
    data () {
        return{
            user:[],
            valicion:{
                valido: false,
            },
            usuario:{
                email: '',
                password: '',
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
                }]
            }
        }
    },
    methods:{
        validacionFormulario(){
            this.ref['usuario'].validate((valid)=>{
                if (valid) {
                    return this.validacion.valido=true;
                }else{
                    return this.validacion.valido=false;
                }
            })
        },
        enviar(){
            let datas = {
                email: this.usuario.email,
                password: this.usuario.password
            };
            this.user.push(datas);
            console.log(datas);
            this.email = '';
            this.password = '';
            
            this.$refs.usuario.validacionFormulario();
            //let user=Object.assign({}, this.$refs.usuarios.formularioEstudio);
            const obtenerUsuario = async() => {
            try{
            const respuesta = await this.$axios.post('http://localhost:8000/api/login',{
                data:user,
            }) 
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            //this.tipoEstudioDB = respuesta.data;
            }
            catch(error){
                console.log(error);
            }};

            obtenerUsuario();
        }
    }
    
}
</script>

<style>

</style>