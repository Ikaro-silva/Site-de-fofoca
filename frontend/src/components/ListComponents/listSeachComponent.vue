<template>
     <div>
        <msgNullLogin v-show="cont"/>
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
    import msgNullLogin from '../MsgComponents/msgNullLogin.vue';
    import contentController from '../../services/contentController'
    export default{
        name:'listSeach',
        components:{msgNullLogin},
        data(){
            return{
                Contents:{},
                cont:null
                
            }
        },
       
        methods:{
            async allListContent(){
                
                console.log('repitiu')
                const tag= localStorage.getItem('content')
                
                const obj={tags:tag}
                const response=await contentController.listSeachContent(obj)
                this.Contents = response
                
                if(this.Contents.length==0){
                    this.cont=true
                }
            }    
        },
        mounted() {
            this.allListContent()
        },
    }
</script>
<style>
        #container{
        margin-top: 50px;
        text-align: center;
        justify-content: center;
        margin-right:5px;
    }
    #card{
        
        display:inline-block;
        max-width: 18rem;
        min-width:18rem;
        min-height:15rem ; 
        padding: 10px;
        margin: 50px 10px;
    }
</style>