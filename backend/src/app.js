const express=require('express')
const cors =require('cors')
const morgan=require('morgan')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.json({type:'application/vnd.api+json'}))
app.use(morgan('dev'))
app.use(cors())

//=>[ROUTER]
const index =require('./router/index')
const routerUser= require('./router/user.routes')
const routerCont=require('./router/content.routes')


app.use(index)
app.use('/api/fof',routerUser)
app.use('/api/fof',routerCont)

//=>[DATABASES]

const connectDb=require('./config/connecDB')
app.set('conect',connectDb)
module.exports=app

