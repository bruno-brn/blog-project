const express = require("express")
const connection = require('./database/database')
const categoriesController = require("./categories/categoriesController")
const articlesController = require("./articles/ArticlesController")
const Article = require('./articles/article')
const Category = require("./categories/category")

const app = express();

app.set('view engine','ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended: false}));app.use(express.json());

connection
    .authenticate()
    .then(() => {
        console.log('Conexão efetuada com sucesso')
    }).catch((error) => {
        console.log(error)
    })

app.use('/', categoriesController)
app.use('/', articlesController)


app.get("/", (req, res) =>{
    res.render("index")
})

app.listen(8000, () => {
    console.log("Servidor ativo!!")
})