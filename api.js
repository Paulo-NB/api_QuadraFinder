const express = require('express')
const app = express()
const port = 3000
app.use(express.json())


const rlocacao = require('./routes/location')
app.use('/location', rlocacao)

const cuser = require('./controllers/user')

const rpayments = require('./routes/payments')
app.use('/payments', rpayments)
const rquadra = require('./routes/quadras')
app.use('/quadras', rquadra)


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

const cpagamento = require('./controllers/pagamento')

app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})