<template>
    <searchComponentVue/>
    <listCardComponentVue />
    
    
</template>
<script>
    
    
    import searchComponentVue from '../../components/HeaderComponents/searchComponent.vue';
    import listCardComponentVue from '../../components/ListComponents/listCardComponent.vue';
    
    export default{
        name:'homeAll',
        components:{
            listCardComponentVue,
            searchComponentVue,
            
        },
        data(){
            return{
                result1:null,
                result2:null,
                conts:null,
                conts1:false
                
            }
        },
      
      

    }
</script>