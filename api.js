const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const cuser = require('./controllers/user')
const cquadra = require('./controllers/quadras')
const cpagamento = require('./controllers/pagamento')
const clocacao = require('./controllers/locacao')


app.post("/user", (req, res) => {
    const {name, pass, cpf, email, phone, type} = req.body

    if(!name || !pass || !cpf || !email || !phone || !type){
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatórios'
        })
    }

    const ouser = cuser.create_user(name, pass, cpf, email, phone, type)

    return res.status(200).json({ 
        message: 'Sucesso', user_created: ouser
    })
})


app.get("/user",(req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_users: cuser.read_user()
    })
})

app.put("/user/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const {name, pass, cpf, email, phone, type} = req.body

    let retorno = cuser.update_user(id, name, pass, cpf, email, phone, type)
    return res.status(retorno.status).json(retorno.msg)
})

app.delete("/user/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    if(cuser.delete_user(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
})




app.post("/quadra", (req, res) => {
    const { publicplace, zipcode, photos, type, name, state, city, neighborhood} = req.body

    if(!publicplace || !zipcode || !photos || !type || !name || !state || !city || ! neighborhood){
        return res.status(400).json({
            massege: 'Todos os campos são obrigatórios'
        })
    }

    const quadra = cquadra.create_quadra( publicplace, zipcode, photos, type, name, state, city, neighborhood)
    return res.status(200).json({
        massege: 'Sucesso', quadra_created: quadra
    })

} )




app.get("/quadra", (req, res) =>{
    return res.status(200).json({
        massege: 'Sucesso', list_quadra: cquadra.read_quadra()
    })
})



app.put("/quadra/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const {publicplace, zipcode, photos, type, name, state, city, neighborhood} = req.body

    let retorno = cquadra.update_quadras(id, publicplace, zipcode, photos, type, name, state, city, neighborhood)
    return res.status(retorno.status).json(retorno.msg)

})



app.delete("/quadra/:id", (req, res) =>{
    const id = parseInt(req.params.id)
    if(cquadra.delete_quadras(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
} )


app.post("/pagamento", (req, res) => {
    const {method, total, date, iduser, idlocation} = req.body

    if(!method ||  !total ||  !date || !iduser || !idlocation){
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatorios'
        })
    }

    const pagamento = cpagamento.create_pagamento(method, total, date, iduser, idlocation)

    return res.status(200).json({ 
        message: 'Sucesso', pagamento_created: pagamento
    })
})

app.get("/pagamento",(req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_pagamento: cpagamento.read_pagamento()
    })
})


app.delete("/pagamento/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    if(cpagamento.delete_pagamento(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
})




app.post("/location", (req, res) => {

    const {iduser, idcourt, idpayment, date} = req.body
    

    if(!iduser || !idcourt || !idpayment || !date){

        return res.status(400).json({message: 'ERRO ERRO ERRO'})

    }
    const locations = clocacao.create_location(iduser, idcourt, idpayment, date)

    return res.status(200).json({message:'sucesso', location: locations})


} )


app.get("/location", (req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_users: clocacao.read_location()
    }
    )
})


app.put("/location/:id", (req, res) => {

    const id = parseInt(req.params.id)

    const {iduser, idcourt, date} = req.body
    
    let retorno = clocacao.update_location(id, iduser, idcourt, date)
    return res.status(retorno.status).json(retorno.msg)
})


app.delete("/location/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    
    if(clocacao.delete_location(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
})


app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})