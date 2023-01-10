import Api from "./connectApi"


export default{

    async register(user){
        
        const response=await Api().post('/register',user)
        
        const{token}=response.data
    },

    async login(user){
        const response =await Api().post('/login',user)
        return  response.data
    }

    
}



