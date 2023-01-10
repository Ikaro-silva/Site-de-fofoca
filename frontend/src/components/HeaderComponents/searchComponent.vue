<template>
    <div id="container">
        <buttonRegisterVue v-if="butt==true"/>
        <div class="apresentacao" v-show="cont1">
            <p>Vejam todos as fofocas    <br/>...OPS!!! <br/> Noticías</p>
        </div>
        <msgSearchVue v-show="cont"/>
        
        <div id="containerImput">
            <form class="d-flex" @submit.prevent="cancelSubmit" >
                <input class="form-control "
                    type="search"
                    placeholder="Pesquise sobre o assunto"
                    aria-label="Search"
                    v-model="content"
                    >   
                <button class="btn btn-outline-success" @click="addLocal">Pesquisar</button>
            </form>
        </div>
        
    </div>
</template>
<script>
    import buttonRegisterVue from '../ButtonComponents/buttonRegister.vue';
    import msgSearchVue from '../MsgComponents/msgSearch.vue';
    export default{
        name:'search',
        components:{msgSearchVue,buttonRegisterVue},
        data(){
            return{
                content:null,
                cont:false,
                cont1:true,
                butt:null
                
            }
        },
        
        methods:{
            cancelSubmit(){},
            addLocal(){
                
                if(this.content===null){
                    
                    this.cont=true
                    this.cont1=false
                    
                    setTimeout(() => {
                        
                        this.cont=false
                        this.cont1=true
                    }, 3000)
                }
                else{
                    localStorage.setItem('content',this.content)
                    this.$router.push('/allSearch')
                }

            },
            showbutton(){
                //mudado
                if(localStorage.getItem('jwt') == null){
                    this.butt=false
                }
                else{
                    this.butt=true
                }
            }
        },
        mounted(){
            this.showbutton()
        }
    }

</script>
<style scoped>
    #container{
        display: flex;
        height:100px; 
        background-color: #f1f2f4;
    }
     .apresentacao{
        margin:auto;
        text-align: center;
        size: 1.1em;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px 0 0 5px;
        background-color:#f4f1f1 ;
        
        
    }
    #containerImput{
        margin-top:55px;
        margin-left:68%;
        position: absolute;
    }
    input{
        text-align: center;
       width: 300px;
        height:38px;
        margin-right: 3px;
        
    }

</style>