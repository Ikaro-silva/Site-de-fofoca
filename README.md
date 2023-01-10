# Site-de-fofoca

## APLICAÇÃO
  Esta aplicação tem como objetivo de aplicar conhecimentos desenvolvidos em estudos particulares,
  como base destes conhecimentos vamos usar o CRUD  com autenticação e autorização de conteúdos e rotas.
  
## Visão Geral

  Neste projeto, mostrarei como construir uma pilha MEVN (Vue.js + Node.js + Express + MongoDB) com um aplicativo de login. 
  O servidor back-end usa Node.js + Express para APIs REST, o front-end é um cliente Vue com Vue Router e axios.sobre a autenticação
  e autorização usaremos o token a forma mais segura é o JSON Web Token (JWT), ireamos armazenar no lado do cliente (localStorage).
  Todos os conteúdos são controlado por sua autenticação
  

## Tecnologia

  * Vue.js
  * Express
  * Node.js
  * MongoDB

## Serviços usados 

* Github

## Vue.js (FRONTEND)

  * Nprogress
  * Bootstrap
  * Axios
  * Sweetalert
  * Vee-validate
  * Vue-jwt-decode

## Node.js (BACKEND)

 * Bcryptj
 * Cors
 * Dotenv
 * Jsonwebtoken
 * Mongoose
 * Morgan
## Padrão de arquitetura de software
  Model View Controller (MVC)
  
  ### Porque usar a arquitetura MVC?
    O MVC é o padrão de aquitetura mais usado e é responsavel pela otimização da velocidade entre as requisições
    feitas pelo comando do usuario,entre outros benefícios como:
    -Segurança
    -Organização
    -Eficiência
    -Tempo
    -Transfomação
    
 ## Pilha MEVN web stack
  Visando o desempenho e a funcionalidade full-stack ou web é adotado um conjunto de tecnologias.
  Esta pilha são aplicativos web que consistem em um pacote de software e estruturas usadas para 
  construção web front-end e back-end.
  
  ### Pilha MEVN:
      Constituida por tais tecnologias:
        M- MongoDB
        E- Express
        V- Vue.js
        N- Node.js
        
  # Funcionalidades da aplicação
  
   ## Funções:
        - Todas as funções da aplicação vai ter nivéis de acesso:
        
          -- Quem TEM o cadastro no site :
            Registrar fofocas
            Acesso a todas os posts
            Pesquisar a todos os posts
            
         -- Quem NÃO TEM o cadastro no site:
             Não tem acesso ao registro de fofocas
             Restrição de conteúdos
   
             

##Telas:

  ## Usuários que  NÃO SÃO Cadastrados
    
   ### Registro- Onde o usuário é cadastrado.
   ![resgisterUser](https://user-images.githubusercontent.com/111320172/211595175-f6187960-16ac-4f0e-b4b8-b53afd8bb8d9.jpg)
 
   ### Login - Onde o usuário faz o login.
   ![loginUser](https://user-images.githubusercontent.com/111320172/211595536-72aa6b32-4a98-49c7-b039-e71a36d016ff.jpg)
   
   ### Home - Onde estão as fofocas com conteúdo restrito (somente temas pré determinado).
   ![homeNoUser](https://user-images.githubusercontent.com/111320172/211595683-10e7ff4e-3df4-432e-a214-bf8ffad8cfd4.jpg)
  
 ## Usuários que SÃO cadastrados
    
   ### Home -Onde Todas as fofocas estão(sem trestrição).
   ![homePerfil](https://user-images.githubusercontent.com/111320172/211595843-9ccc5d64-2501-47a7-baa4-89582faac77d.jpg)
   
   ### Consulta -Onde você pode fazer a consulta de todos os conteúdos.
   ![homePesq](https://user-images.githubusercontent.com/111320172/211596128-0c872902-808f-4608-9643-90b914648cc2.jpg)
   ![pesqHome](https://user-images.githubusercontent.com/111320172/211596263-8cf8a5dc-ae84-418d-9d1a-97c40f9417a4.jpg)

   ### Registro de Conteúdo- Onde pode ser registrado e postado uma nova fofoca.
   ![registerContent](https://user-images.githubusercontent.com/111320172/211596376-3a9cffe7-3da4-413e-a87c-1ca9ef614529.jpg)

        
        
        
        
  
        
        
        

