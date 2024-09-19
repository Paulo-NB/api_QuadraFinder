const Location = require('../models/location')

var locations = []


function create_location(iduser,idcourt,idpayment,date){
    let id = 0
    if(locations.length > 0){
        id = locations [locations.length - 1].id + 1
    }

    const location = new Location(id, iduser, idcourt, idpayment, date)
        
    locations.push(location)
    return location
}

function read_location(){
    return locations
}

function update_location(id, iduser, idcourt, date){
    let idx = locations.findIndex(location => location.id === id)

    if(idx == -1){
        return {status: 404, msg: "Não encontrado"}
    }

    if(iduser) locations[idx].iduser = iduser
    if(idcourt) locations[idx].idcourt = idcourt
    if(date) locations[idx].date = date

    return {status: 200, msg: locations[idx]}
}

function delete_location(id){
    let idx = locations.findIndex(location => location.id === id)
    if(idx == -1){
        return false
    }

    locations.splice(idx, 1)
    return true
}

module.exports = {
    create_location,
    read_location,
    update_location,
    delete_location,
}