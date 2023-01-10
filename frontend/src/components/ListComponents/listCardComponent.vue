<template>  
    <div>
        <msgNullLoginVue v-show="cont"/>
        <div id="container" class="row row-cols-1 row-cols-md-5 " >
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
    import msgNullLoginVue from '../MsgComponents/msgNullLogin.vue';
    import contentController from '../../services/contentController';
    export default{
        name:'listCardComponent',
        components:{msgNullLoginVue},
        data(){
            return{
                Contents:{
                    
                },
                cont:null

            }
        },
        methods:{
            async allList(){
                const conten= await contentController.listAllContent()
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
        margin-right:5px;
        text-align: center;
        justify-content: center;
    }
    #card{
        
        display:inline-block;
        max-width:30rem; 
        min-width:18rem;
        min-height:15rem ; 
        padding: 10px;
        margin: 50px 10px;
    }
   
</style>