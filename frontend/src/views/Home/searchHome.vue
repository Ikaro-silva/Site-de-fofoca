<template>
    <buttonComponentVue/>
    <listSeachComponentVue/>
    
</template>
<script>
    import buttonComponentVue from '../../components/ButtonComponents/buttonComponent.vue';
    import listSeachComponentVue from '../../components/ListComponents/listSeachComponent.vue';
    export default{
        name:"search",
        components:{listSeachComponentVue,buttonComponentVue},
        data(){},
        methods:{

        }
    }
</script>