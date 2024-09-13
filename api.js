const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

var vusers = []

function create_user(name, pass, cpf, email, phone, type){
    let id = 0
    if(vusers.length > 0) {
        id = vusers[vusers.length-1].id + 1
    }
    const user = {
        "id": id,
        "name": name,
        "pass": pass,
        "cpf": cpf,
        "email": email,
        "phone": phone,
        "type": type
    }
    vusers.push(user)
    return user
}

function update_user(id, name, pass, cpf, email, phone, type){
    let idx = vusers.findIndex(user => user.id === id)

    if(idx == -1){
        return {status: 404, msg: "Não encontrado"}
    }

    if(name) vusers[idx].name = name
    if(pass) vusers[idx].pass = pass
    if(cpf) vusers[idx].cpf = cpf
    if(email) vusers[idx].email = email
    if(phone) vusers[idx].phone = phone
    if(type) vusers[idx].type = type
    

    return {status: 200, msg: vusers[idx]}
}

function delete_user(id){
    let idx = vusers.findIndex(user => user.id === id)
    if(idx == -1){
        return false
    }

    vusers.splice(idx, 1)
    return true
}


app.post("/user", (req, res) => {
    const {name, pass, cpf, email, phone, type} = req.body

    if(!name || !pass || !cpf || !email || !phone || !type){
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatórios'
        })
    }

    const ouser = create_user(name, pass, cpf, email, phone, type)

    return res.status(200).json({ 
        message: 'Sucesso', user_created: ouser
    })
})


app.get("/user",(req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_users: vusers
    })
})

app.put("/user/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const {name, pass, cpf, email, phone, type} = req.body

    let retorno = update_user(id, name, pass, cpf, email, phone, type)
    return res.status(retorno.status).json(retorno.msg)
})

app.delete("/user/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    if(delete_user(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
})


app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})

















