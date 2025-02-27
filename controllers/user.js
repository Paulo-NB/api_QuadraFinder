const User = require('../models/user')
const {Op, where} = require('sequelize')



async function create_user(req, res){

    const {name, pass, cpf, email, phone} = req.body

    if(!name || !pass || !cpf || !email || !phone){
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatórios'
        })
    }
    const user = await User.create({name, pass, cpf, email, phone})

    return res.status(201).json({
        message:"criado",
        db: user
    })
}



async function show_user(req, res){
    const id = parseInt(req.params.id)
    const user = await User.findByPk(id)

    if(!user){
        return res.status(404).json({
            message: "Não encontrado"
        })
    }
    
    return res.status(202).json({
        message: "Encontrei",
        db: user
    })
}




async function update_user(req, res){
    const id = parseInt(req.params.id)

    const {name, pass, cpf, email, phone} = req.body
    const user = await User.findByPk(id)

    if(!user){
        return res.status(404).json({
            message: "Não encontrado",
            db: null
        })
    }

    if(name) user.name = name
    if(pass) user.pass = pass
    if(cpf) user.cpf = cpf
    if(email) user.email = email
    if(phone) user.phone = phone
    
    await user.save()
    return res.status(203).json({
        message: "Atualizado",
        db: user
    })
}

async function delete_user(req, res){
    const id = parseInt(req.params.id)
    const user = await User.findByPk(id)

    if(!user){
         return res.status(404).json("Não encontrado")
    }

    await user.destroy()

    return res.status(201).json("Foi de base")
}
async function read_user(req, res){

    const {name} = req.query

    const condition = {}

    if(name){
        condition.name = { [Op.like]: `%${name}%` }

    }

    return res.status(200).json({
        message: 'Sucesso', list_users: await User.findAll({
            where: Object.keys(condition).length > 0?
            condition: undefined
        })
    })
}
module.exports = {
    create_user,
    show_user,
    read_user,
    update_user,
    delete_user
}