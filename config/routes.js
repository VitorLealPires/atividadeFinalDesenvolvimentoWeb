const express = require('express')
const routes = express.Router()

let db = [
    { id: "1", "Nome": "Vitor", "Sobrenome": "Pires", "Usuario": "vl_pires", "Pais": "Brasil","Estado": "Piaui", "Cidade": "Teresina", "Cep": "12345678" },
    { id: "2", "Nome": "Fernanda", "Sobrenome": "Marques", "Usuario": "fe_marques", "Pais": "Brasil","Estado": "Piaui", "Cidade": "Floriano", "Cep": "23456789" },
    { id: "3", "Nome": "Diego", "Sobrenome": "Gomes", "Usuario": "diego_gomes", "Pais": "Brasil","Estado": "Piaui", "Cidade": "Uruçui", "Cep": "34567810" },
    { id: "4", "Nome": "Jessica", "Sobrenome": "Brenda", "Usuario": "jess_Brenda", "Pais": "Brasil","Estado": "Piaui", "Cidade": "Parnaiba", "Cep": "45678911" },

]

// Buscar Dados
routes.get('/', (req, res) => {
    
  
     res.status(200).json(db)   
  })



// Isserir Dados
routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)

})

// Apagar Dados
routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if (!item[id])
        return item
    })
    
    db = newDB


    return res.send(newDB)
    
})

    routes.put('/:id', (req, res) =>{
        let index = buscaDB (req.params.id)
        db[index].id = req.body.id
        db[index].Nome = req.body.Nome
        db[index].Sobrenome = req.body.Sobrenome
        db[index].Usuario = req.body.Usuario
        db[index].Pais = req.body.Pais
        db[index].Estado = req.body.Estado
        db[index].Cidade = req.body.Cidade
        db[index].Cep = req.body.Cep

        res.json(db) 

    })

    function buscaDB (id) {
        return db.findIndex ((db) => db.id == id)
    } 



    



module.exports = routes