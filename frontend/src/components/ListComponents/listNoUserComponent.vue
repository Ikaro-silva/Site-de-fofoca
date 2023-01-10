<template>  
    <div>
        <div class="apresentacao">
            <p>
                Para ter acesso a todos os nossos conteúdos 
                se registre em nosso site e faça o 
        
                    <router-link to="/login" class="links">
                        Login
                    </router-link>
            
            </p>
        </div>
        <msgNullComponentVue v-show="cont"/>
        <div id="container" class="row row-cols-1 row-cols-md-5 g-4" >
            <div class="card text-bg-light mb-3"  id="card"
            v-for="content in Contents" :key="content._id">
                <div class="card-header">{{content.theme}}</div>
                <div class="card-body">
                    <h5 class="card-title">Titulo: {{content.title}}</h5>
                    <p class="card-text">Fofoca: {{content.content}}</p>
                    
                    
                </div>
            </div>
        </div>
    </div>   
            
</template>
<script>
import msgNullComponentVue from '../MsgComponents/msgNullComponent.vue';
import contentController from '../../services/contentController';
    export default{
        name:'listCardComponent',
        components:{msgNullComponentVue},
        
        data(){
            return{
                Contents:{
                
                },
                cont:null
                
            }
        },
        methods:{
            async allList(){
                const theme={
                    theme:['famosos','vizinhos']
                }
                const conten= await contentController.listRestrContent(theme)
                this.Contents=conten

                if(this.Contents.length==0){
                    this.cont=true
                }
                 
            },
            
        },
        mounted() {
            this.allList()
            
        },
    }
</script>
<style scoped>
    #container{
        margin-top: 50px;
        text-align: center;
        justify-content: center;
        margin-right:5px;
    }
    #card{
        
        display:inline-block;
        max-width:30rem; 
        min-width:18rem;
        min-height:15rem ; 
        padding: 10px;
        margin: 50px 10px;
    }
    .apresentacao{
        text-align: center;
        size: 1.1em;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px 5px;
        background-color:#F8F9FA ;
    }
    .links{
        font-weight: bold;
        color:black;
        text-decoration: none;

    }
    .links:hover{
        text-decoration:underline;
    }
   
</style>
