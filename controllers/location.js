const Location = require('../models/location')


async function create_location(iduser,idcourt,idpayment,date){
    console.log({iduser, idcourt, idpayment, date})
    const location = await Location.create({iduser, idcourt, idpayment, date})
    console.log(location)
    return location
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