const express = require("express")
const router = express.Router();

router.get('/categories', (req, res) => {
    res.send("rota categorias")
})

router.post('/admin/categories/new', (req, res) => {
    res.send("rota criar categorias")
})


module.exports =  router