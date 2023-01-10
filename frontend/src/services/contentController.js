import Api from './connectApi'

export default{
  async createContent(content){
    // metodo responsavel por criar conteudo
    console.log('entrou')
    const response=await Api().post('/createCont',content)
    return response.data
  },

    // Metodo resposavel por listar todos os conteudos
   async listAllContent(){
        const response = await Api().get('/allCont')
        
        return response.data
   },

   // Metodo responsavel por listar pesquisa de conteudos
   async listSeachContent(tags){
     
     const response=await Api().post('/selectCout',tags)
     return response.data
   },

   // Metodo responsavel por listar conteudo restrito
   async listRestrContent(theme){
      
      const responde= await Api().post('/listUser',theme)
      return responde.data
   }
}