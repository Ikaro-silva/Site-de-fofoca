<template>
    <div>
        <div class="apresentacao">
            <p>
                Faça logo o login criatura !! <br/> Aproveite todas as novidades! 
            </p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                    <Form class=" border border-primary p-5"
                    style="margin-top: 70px;height: auto;padding-top: 100px;inportant;"
                    @submit.prevent="submtUser(e)">
                    <!-- INICIO DO BLOCL EMAIL -->
                    <div>
                        <label for="">Email</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            class="form-control mb-2"
                            placeholder="digite seu email"
                            :rules="validateEmail"
                            v-model="email"
                        />
                        <ErrorMessage name="email" 
                        class="form-control is-invalid text-danger"/>
                    </div>
                    <!-- INICIO DO BLOCO PASSWORD -->
                    <div>
                        <label for="">Password</label>
                        <Field
                        type="password"
                        id="password"
                        name="password"
                        class="form-control mb-2"
                        placeholder="Digite sua senha"
                        :rules="validate"
                        v-model="password"
                        />
                        <ErrorMessage name="password"
                        class="form-control is-invalid text-danger"
                        />
                    </div>
                    <!-- BLOCO BUTTON -->
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button @click="loinUser"
                        class="btn btn-primary my-2 ">
                        ENTRAR
                        </button>
                    </div>

                    <p class="text-center my-2"> 
                        <router-link
                            to="/register"
                            style="color:black;">
                            Cadastre-se
                        </router-link>
                    </p>

                    </Form>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import serviceController from '../../services/serviceController';
    import{Form,Field,ErrorMessage, validate} from 'vee-validate'
    import swal from 'sweetalert';


    export default{
        name:'loginUser',
        components:{Form,Field,ErrorMessage},
        data(){
            return{
                email:null,
                password:null
            }
        },
        methods: {
            submtUser(e){
                e.preventDefault();
                
            },
            async loinUser(){
                

                const data={
                    email:this.email,
                    password:this.password
                }

                try{
                    const token =await serviceController.login(data)
                    const tokenUser=token.user.tokens[0].token
                    
                    localStorage.setItem('jwt',tokenUser)
                    swal({
                        title: 'Sucesso!',
                        text: 'Usuário(a) logado com sucesso!',
                        icon: 'success',
                    }).then(()=>{
                        this.$router.push('/homeAll')
                    })
                }
                catch(err){
                    swal({
                        title: 'Oops!',
                        text: 'Senha ou Email incorretos',
                        icon: 'error',
                    })
                }
                
            },
            validateEmail(value) {
      
                if (!value) {
                    return 'Campo obrigatorio';
                }
                
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if (!regex.test(value)) {
                    return 'Este tipo de Email é invalido!';
                }
                
                return true;
            },
            validate(value){
                
                
                if(!value ){
                    return 'campo obrigatorio'
                }
                if(value.includes(' ')){
                    return "Senha não pode obter espaços"
                }
                
                if(value.length>=6 && value.length<=8){
                    return true 
                }
                return 'A senha deve obter entre 6 e 8 caracters!'
            }
        },
    }
</script>
<style scoped>
    .apresentacao{
        text-align: center;
        size: 1.1em;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px 5px;
        background-color:#F8F9FA ;
    }
</style>