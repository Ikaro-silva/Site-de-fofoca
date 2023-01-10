<template>
    <div class="alert alert-dark" role="alert" id="alert">
        <p>Nenhum conteùdo</p>
        <p>
            Para mais fofocas 
            <router-link to="/register" class="links">
                        Registre-se
            </router-link>
        </p>
        
            
        
    </div>
</template>
<script>
export default{
    name:'Msg'
}
</script>
<style scoped>
    .links{
        font-weight: bold;
        color: black;
        text-decoration: none;
    }
    .links:hover{
        text-decoration:underline;
    }
    #alert{
        
        text-align: center;
        
        height:90px;
    }
</style>