<template>
    <div class="alert alert-dark" role="alert" id="alert">
        <p>Nenhum conteùdo</p>
      
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
        width: 60%;
        height:90px;
    }
</style>