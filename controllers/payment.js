
const Payment = require('../models/payment')
const {Op} = require('sequelize')




 async function create_payment(req, res){
    const {method, total, date, iduser, idlocation} = req.body

    if(!method ||  !total ||  !date || !iduser || !idlocation){
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatorios'
        })
    }
    const payment = await Payment.create ({method, total, date, iduser, idlocation})
    
    return res.status(200).json({mensage: "Sucesso!", payment: payment})
}


async function delete_payment(req, res){
    const id = parseInt(req.params.id)
    const payment = await Payment.findByPk(id)

    if(!payment){
        return res.status(404).json("Não encontrado")
    }
    
    await payment.destroy()

    return res.status(201).json("Foi de base")
}


async function show_payment(req, res ) {
    const id = parseInt(req.params.id)
    const payment = await Payment.findByPk(id)

    if(!payment){
        return res.status(404).json({
            mensage: "Não encontrado"
        })
    }

    return res.status(202).json({
        mensage: "Encontrei",
        db: payment
    })
    
}

async function read_payment(req, res){
    const {name} = req.query

    const condition = {}

    if (name){
        condition.name = { [Op.like]: `%${name}%`}
    }


    return res.status(200).json({
        message: 'Sucesso', list_payment: await Payment.findAll({
            where: Object.keys(condition).length > 0?
            condition: undefined
        })
     

    })
}

module.exports = {

    create_payment,
    read_payment,
    delete_payment,
    show_payment
}






