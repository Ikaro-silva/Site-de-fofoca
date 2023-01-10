<template>
    <div>
        <button type="button" class="btn btn-secondary btn-sm"
        @click="removeContent"
        >Todas notícias</button>
    </div>
</template>
<script>
    export default{
        name:'buttonComponent',
        methods:{
            removeContent(){
                this.$router.push('/homeAll')
            }
        }
    }

</script>
<style scoped>
     button{
        margin-top:10px;
        
        margin-left:89%;
    } 
</style>