const express = require('express')
const router = express.Router()
const cuser = require('../controllers/user')



router.post("/create", (req, res) => {
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


router.get("/read",(req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_users: cuser.read_user()
    })
})

router.put("/update/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const {name, pass, cpf, email, phone, type} = req.body

    let retorno = cuser.update_user(id, name, pass, cpf, email, phone, type)
    return res.status(retorno.status).json(retorno.msg)
})

router.delete("/del/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    if(cuser.delete_user(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
})


module.exports = router