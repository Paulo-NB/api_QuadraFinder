const { console } = require('inspector')
const Location = require('../models/location')
const User = require('../models/user')
const Quadra = require('../models/quadra')
const Payment = require('../models/payment')


async function create_location(iduser, idcourt, idpayment, date, res){
    
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

   

async function read_location(){
    return await Location.findAll()
}

async function update_location(id, iduser, idcourt, date){
    const location = await Location.findByPk(id)

    if(!location){
        return {status: 404, msg: "Não encontrado"}
    }

    if(iduser) location.iduser = iduser
    if(idcourt) location.idcourt = idcourt
    if(date) location.date = date

    await location.save()

    return {status: 200, msg: location}
}

async function delete_location(id){
    const location = await Location.findByPk(id)

    if(!location){
        return {status: 404, msg: "Não encontrado"}
    }

    await location.destroy()

    return false
}

module.exports = {
    create_location,
    read_location,
    update_location,
    delete_location,
}