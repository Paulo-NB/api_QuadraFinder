
const Quadras = require('../models/quadras')

var quadras = []

function create_quadra(publicplace, zipcode, photos, type, name, state, city, neighborhood){
    let id = 0
    if(quadras.length > 0) {
        id = quadras[quadras.length-1].id + 1
    }

    const quadra = new Quadras(id, publicplace, zipcode, photos, type, name, state, city, neighborhood)

    quadras.push(quadra)
    return quadra

}

function update_quadras(id, publicplace, zipcode, photos, type, name, state, city, neighborhood){
    let idx = quadras.findIndex(quadra => quadra.id === id)

    if(idx == -1){
        return {status: 404, msg: "Não encontrado"}
    }
    if(publicplace) quadras[idx].publicplace = publicplace
    if(zipcode) quadras[idx].zipcode = zipcode
    if(photos) quadras[idx].photos = photos
    if(type) quadras[idx].type = type
    if(name) quadras[idx].name = name
    if(state) quadras[idx].state = state
    if(city) quadras[idx].city = city
    if(neighborhood) quadras[idx].neighborhood = neighborhood
    return {status: 201, msg: quadras[idx]}
}


function delete_quadras(id){
    let idx = quadras.findIndex(quadra => quadra.id === id)
    if(idx == -1){
        return false
    }

    quadras.splice(idx, 1)
    return true
}

function read_quadra(){
    return quadras
}



module.exports = {
    create_quadra,
    read_quadra,
    update_quadras,
    delete_quadras
}