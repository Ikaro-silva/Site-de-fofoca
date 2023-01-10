<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                    <Form class=" border border-primary p-5"
                    style="margin-top: 70px;height: auto;padding-top: 100px;inportant;"
                    @submit.prevt="submitRegister">
                        <!-- INICIO BLOCO TITULO -->
                        <div>
                            <label for="">Titulo</label>
                            <Field
                                type="text"
                                id="title"
                                name="title"
                                class="form-control mb-2"
                                placeholder="Tititulo da fofoca!"
                                :rules="validate"
                                v-model="formContent.title"    
                            />
                            <ErrorMessage name="title"
                            class="form-control is-invalid text-danger"
                            />
                        </div>
                        <div>
                            <label for="">Tema</label>
                            <Field 
                                name="tema" 
                                as="select"
                                class="form-select"
                                :rules="validate"
                                v-model="formContent.theme"
                            >
                                <option selected>Escolha o tema</option>
                                <option value="sexo">Sexo</option>
                                <option value="famosos">Famosos</option>
                                <option value="traição">Traição</option>
                                <option value="vizinhos">Vizinhos</option>
                                <option value="morte">Morte</option>
                           </Field>
                           <ErrorMessage name="tema" 
                            style="margin-top:6px"
                            class="form-control is-invalid text-danger"
                            />
                        </div>

                        <div class="form-floating" style="margin-top:20px;">
                            <Field as="textarea" 
                                name="texto" 
                                class="form-control"
                                :rules="validateTextArea"
                                v-model="formContent.content"
                                />
                            <label for="floatingTextarea">Fale logo raps!</label>
                            <ErrorMessage name="texto"
                            style="margin-top:6px"
                            class="form-control is-invalid text-danger"
                            />
                        </div>

                        <div class="d-grid gap-2 col-6 mx-auto"
                        style="margin-top: 20px;">
                            <button @click="registerContent"
                            class="btn btn-primary ">
                            ISSO AI !!!
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    import { Field, Form,validate,ErrorMessage } from 'vee-validate';
    import contentController from '../../services/contentController';
    import swal from 'sweetalert';

    export default{
        name: "registeContent",
        components: { Field,Form,validate,ErrorMessage },
        data(){
            return{
                formContent:{
                    title:null,
                    theme:null,
                    content:null
                }
            }
        },
        methods:{
            submitRegister(){},
            async registerContent(){
                try{
                    await contentController.createContent(this.formContent)
                    swal({
                        title: 'Excelente!',
                        text: 'Fofoca criada com sucesso!',
                        icon: 'success',
                    }).then(()=>{
                        this.$router.push('/');
                    })
                }catch(error){
                        swal({
                        title: 'Erro!',
                        text: 'Confira os campos!!',
                        icon: 'error',
                    });
                }
            },
            validateTextArea(value){
                if(!value){
                    return 'Campo obrigatorio!'
                }
                
                if(value.length<=250 && value.length>=50){
                    return true
                }
                return 'O texto deve obter entre 50 e 200 caracteres!'
                
            },
            validate(value){
                if (value && value.trim()) {
                    return true;
                }
                return 'Campo obrigatorio !';
            }

        }


    }
</script>