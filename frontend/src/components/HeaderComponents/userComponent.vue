<template>
   
    <div id="containerUser">
        <div class="card text-bg-light "  id="cardUser">
        
            <div class="card-header" id="headerCardUser">Nome: {{user.name}}</div>
            
            <p class="card-title" id="tituluCardUser">Email: {{user.email}}</p>
                  
        </div>
        
    </div>
      
</template>
<script>
    import VueJwtDecode from 'vue-jwt-decode'
    export default{
        name:'useComponent',
        data(){
            return{
                user:{}
            }
        },
        methods:{
            getUser(){
                
                const token = localStorage.getItem('jwt');
                const tokenDecoded = VueJwtDecode.decode(token);
                
                this.user = tokenDecoded;
            },
           
        },
        mounted(){
            this.getUser()
        }
    }
</script>
<style scoped>
    #containerUser{
        font-size:0.8em;
        
        display: flex;
        
    }
    #cardUser{
        width: 200px;
        height:50px;
        
    }
    #headerCardUser{
        height:30px;
    
    }
    p{
        padding-left:17px;
    }
   
</style>