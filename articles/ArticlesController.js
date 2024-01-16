const express = require("express")
const router = express.Router();

router.get('/articles', (req, res) => {
    res.send("rota artigos")
})

router.post('/admin/article/new', (req, res) => {
    res.send("rota criar artigos")
})

module.exports =  router