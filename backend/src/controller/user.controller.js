const User =require('../model/user.model')


exports.registerUser=async(req,res)=>{
        console.log('entrou')
    try{
        const{name,email}=req.body

        // validação EMAIL
        const userEmail=await User.find({email})
        if(userEmail.length>=1){
                return res.status(401).send('Email ja cadastrado!')
        }

        // validação NAME
        const userName= await User.find({name})

        if(userName.length>=1){
                return res.status(401).send('Name ja Cadastrado')
        }

        //salvando documento no mongodb

        const NewUser=new User(req.body)
        const user=await NewUser.save()
        const token= await NewUser.generateAuthToken()
        res.status(201).json({message:'user create succefully',user,token})
   }
   catch(err){
        console.log('laele')
     res.status(400).json({err:err})
   }
}

exports.loginUser=async (req,res)=>{
        try{

             const{email,password}=req.body
             const user =await User.fidByCredentals(email,password)

             if(!user){
                return res.status(409).json({message:'login invalido!'})
             }
             res.status(201).json({message:'Usuario logado com sucesso ',user:user})

             return user.tokens
        }
        catch(err){
                res.status(400).json({errs:err})
        }
}