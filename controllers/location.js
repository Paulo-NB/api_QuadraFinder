const { console } = require('inspector')
const Location = require('../models/location')
const User = require('../models/user')
const Quadra = require('../models/quadra')
const Payment = require('../models/payment')

async function create_location(req, res){
    const {iduser, idcourt, idpayment, date} = req.body
    
    if(iduser <0 || idcourt <0  || idpayment <0  || !date){

        return res.status(400).json({
            message: 'Os Campos iduser, idcourt, idpayment e Date são obrigatórios'
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

    const payment = await Payment.findByPk(idpayment)
    if(!idpayment){

        return res.status(301).json({
            message:'O campo Pagamento e obrigatório'
        })
    }

    let  hoje = new Date()
    let  data = new Date(date)

    if (data < hoje){

        return res.status(301).json({
            message:'essa data já passou'
        })
        
    }

    const location = await Location.create({iduser, idcourt, idpayment, date})
    
    return res.status(200).json({
        message:'sucesso', location_created: location
    })

}

async function show_location(req,res) {
    const id = parenInt(req.params.id)

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
    return res.status(200).json({
        message: 'Sucesso', list_users: await Location.findAll()
    }
    )
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