<template>
    <div>
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" to="/">Notícias</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" to="/register">Registro</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" to="Login">Entrar</router-link>
                            </li>
                            
                        </ul>
                        
                        <div 
                            class="navbar-brand  order-md-last  " 
                            v-if="cond==true"
                            >
                            FOFOQUE ! FAZ BEM PARA SAÚDE
                        </div>
                        
                    </div>
                    <div v-if="butt1==true">
                        <button type="button" class="btn btn-secondary btn-sm"
                            @click="showbutton">
                                Perfil
                            </button>
                    </div>
                    <div id="cadUser" v-if="butt==true">
                        <userComponentVue />
                        <div>
                            <button type="button" class="btn btn-secondary btn-sm"
                            @click="removeContent">
                                Sair
                            </button>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </div>
        
    </div>
 
</template>

<script>
    import userComponentVue from './userComponent.vue';
    export default{
        name:'header',
        components:{
            userComponentVue,
        },
        data(){
            return{
                butt:null,
                butt1:true,
                cond:null
            }
        },
        methods:{
        
            showbutton(){
            //mudado
                if(localStorage.getItem('jwt') == null){
                    this.butt=false
                    this.$router.push('/login')
                }
                else{
                    this.butt=true
                    this.butt1=false
                }
        
            },
            removeContent(){
               
                this.butt=false
                this.cond=true
                this.butt1=true
            
                localStorage.removeItem('jwt')
                this.$router.push('/')
            }
            
        },
             
    }
</script>
<style scoped>
    li{
        font-size:1.1em;
    }
    button{
        margin-top:10px;
        margin-left: 5px;
    }
    #cadUser{
        display: flex;
    }
</style>