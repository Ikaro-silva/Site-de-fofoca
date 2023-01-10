const Content=require('../model/content.model')
const middleware=require('../middlewares/createTags')



//=> responsavel por criar um nova'posts'
exports.createCont=async (req,res)=>{
    console.log(req.body)
    const fof=new Content(req.body)
    
    try{
        const cont =await fof.save()
        await fof.generateTags(cont)
        
        res.status(201).json({message:"Conteudo criado com sucesso!!",cont:cont})
    }
    catch(err){
        res.status(400).json({err:err})
    }
}

//=> responsavel por listar todos as 'posts'
exports.allCont=async (req,res)=>{

    const cont=await Content.find({})
    try{
        res.send(cont)
    }catch(err){
        res.status(400).send(err)
    }

}

exports.selectCont=async(req,res)=>{
    
    try{
        const isConsult= req.body.tags
        
        
        const query=await middleware.simplify(isConsult)
       
        const querys= await Content.find({'tags.0.tag':{$all:query}})

        res.send(querys)
    }
    catch(err){
        res.status(400).json({falha:"falha na cosulta",Erro:err})
    }
}

exports.userCont=async(req,res)=>{
    try{
        const isConsult=req.body.theme
        
        const querys=await Content.find({theme:{$in:isConsult}})
        res.send(querys)

    }
    catch(err){
        res.status(400).json({falha:"falha na cosulta",Erro:err})
    }
}