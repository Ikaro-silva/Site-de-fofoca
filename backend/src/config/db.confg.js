const dotenv = require('dotenv')
dotenv.config()

module.exports={
    database:{
        DB_URL:process.env.DB_URI,
        SECRET:process.env.SECRET
    }
}