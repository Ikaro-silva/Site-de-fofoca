<template>
    <headerComponentVue/>
    <router-view/>
</template>

<script>
    import headerComponentVue from './components/HeaderComponents/headerComponent.vue';
    export default{
        name:'app',
        components:{headerComponentVue}
        
    }
</script>
<style scoped>
   
</style>


