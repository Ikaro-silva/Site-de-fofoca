const createTags=require('../middlewares/createTags')
const mongoose = require('mongoose')


const contentSchema= new mongoose.Schema({
    title:{
        type:String,
        maxlength:50,
        require:true
    },
    theme:{
        type:String,
        maxlength:50,
        require:true
    },
    content:{
        type:String,
        maxlength:300,
        require:true
    },
    tags:[]
    
},{

    timestamps:true,
    
  }
)



contentSchema.methods.generateTags=async function(User){
    const user=this
    const tag= await createTags.generateTags(User)
    user.tags=user.tags.concat({tag})
    await user.save()
    
    

}



const Contents =mongoose.model('contents',contentSchema)

module.exports=Contents