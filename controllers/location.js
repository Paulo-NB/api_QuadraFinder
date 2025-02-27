const { console } = require('inspector')
const Location = require('../models/location')
const {Op,where} = require('sequelize')
const User = require('../models/user')
const Quadra = require('../models/quadra')
const Payment = require('../models/payment')

async function create_location(req, res){
    const {iduser, idcourt, date} = req.body
    
    if(iduser <0 || idcourt <0 || !date){

        return res.status(400).json({
            message: 'Os Campos iduser, idcourt, e Date são obrigatórios'
        })

    }
    
    const user = await User.findByPk(iduser)
    if(!user){
        return res.status(301).json({
            message:'O campo Usuario e obrigatório'
        })
    }
    
    const quadra = await Quadra.findByPk(idcourt)

    if(!idcourt){
        return res.status(301).json({
            message:'O campo Quadra e obrigatório'
        })
    }

    let  hoje = new Date()
    let  data = new Date(date)

    if (data < hoje){

        return res.status(301).json({
            message:'essa data já passou'
        })
        
    }

    const location = await Location.create({iduser, idcourt, date})
    
    return res.status(200).json({
        message:'sucesso', db: location
    })

}

async function show_location(req,res) {
    const id = parseInt(req.params.id)

    const location = await Location.findByPk(id)
    
    if(!location){
        return res.status(404).json({
            message: "Não encotrado"
        })
    }

    return res.status(202).json({
        message: "Encotrei",
        db: location
    })
    
}


async function read_location(req, res){
    const {iduser} = req.query

    const condition = {}

    if (iduser) {
        condition.iduser = iduser; // Comparação direta
    }






    return res.status(200).json({
        message: 'Sucesso', db: await Location.findAll({
            where: Object.keys(condition).length > 0?
            condition : undefined
        })

    })

}

async function update_location(req, res){
    const id = parseInt(req.params.id)
    
    const {iduser, idcourt, date} = req.body
    const location = await Location.findByPk(id)

    if(!location){
        return res.status(404).json({
            message: "Não encontrado",
            db: null
        })
    }

    if(iduser) location.iduser = iduser
    if(idcourt) location.idcourt = idcourt
    if(date) location.date = date

    await location.save()

    return res.status(203).json({
        message: "Atualizado",
        db: location
    })
}

async function delete_location(req, res){
    const id = parseInt(req.params.id)
    const location = await Location.findByPk(id)

    if(!location){
        return res.status(404).json ("Não encontrado")
    }

    await location.destroy()

    return res.status(201).json("Foi de base")
}

module.exports = {
    create_location,
    read_location,
    update_location,
    delete_location,
    show_location,
}