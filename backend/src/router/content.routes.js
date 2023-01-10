const express=require('express')
const router=express.Router()
const controller=require('../controller/content.controller')

//=> rota responsavel por registrar o conteudo (POST):localhost:3000/api/fof/createCont
router.post('/createCont',controller.createCont)

//=> rota responsavel por listar o conteudo(GET):localhost:3000/api/fof/listCont
router.get('/allCont',controller.allCont)

//=>rota respondavel por listar conteudo Usuarios não cadastrados (GET):localhost:3000/api/fof/listUser
router.post('/listUser',controller.userCont)

//=> rota responsavel por listar o conteudo selecionado pesquisa(POST):localhost:3000/api/fof/selectCout
router.post('/selectCout',controller.selectCont)


module.exports=router