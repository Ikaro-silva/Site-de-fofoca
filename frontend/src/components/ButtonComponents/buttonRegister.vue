<template>
    <div>
        <button type="button" class="btn btn-outline-dark btn-sm"
        @click="removeContent"
        >Fofoque Aqui !</button>
    </div>
</template>
<script>
    export default{
        name:'buttonComponent',
        methods:{
            removeContent(){
                this.$router.push('/registerCont')
            }
        }
    }

</script>


<style scoped>
     button{
       
       padding: 2px;
       margin-top:65px;
       margin-left:75px;
       width:100px;
       position: absolute;
       
    } 
</style>