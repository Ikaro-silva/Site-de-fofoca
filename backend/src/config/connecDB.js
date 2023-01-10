const mongoose=require('mongoose')
const DB= require('./db.confg')

mongoose.set('strictQuery', true)
mongoose.Promise=global.Promise;

mongoose.connect(DB.database.DB_URL,)
.then(()=>{
    console.log('Banco de dados conctado!')
})
.catch((err)=>{
    console.log('DB Falha na conecção',err)
    
})
