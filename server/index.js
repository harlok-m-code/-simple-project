require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const models = require('./model')
const router = require('./routes/index')
const fileUpload = require('express-fileupload')
const path = require('path')
const pool = require('./pool')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api',router)


const start = async () => {
    try {
        await sequelize.authenticate()  
        await sequelize.sync()
        app.listen(PORT, () => {
            console.log(`Server started ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

app.get("/todos",async (req,res)=> {
    try {
        
        const allTodos = await pool.query("SELECT * FROM images");
        res.json(allTodos.rows);
    } catch (error) {
        console.log(error.message);
    }
});


start()