
const Quadras = require('../models/quadras')

var quadras = []

async function create_quadra(publicplace, zipcode, photos, type, name, state, city, neighborhood){
    
    const quadra = await Quadras.create({id, publicplace, zipcode, photos, type, name, state, city, neighborhood})

    quadras.push(quadra)
    return quadra

}

async function update_quadras(id, publicplace, zipcode, photos, type, name, state, city, neighborhood){
   const quadra = await Quadras.findByPk(id)

    if(!quadra){
        return {status: 404, msg: "Não encontrado"}
    }
    if(publicplace) quadra.publicplace = publicplace
    if(zipcode) quadra.zipcode = zipcode
    if(photos) quadra.photos = photos
    if(type) quadra.type = type
    if(name) quadra.name = name
    if(state) quadra.state = state
    if(city) quadra.city = city
    if(neighborhood) quadra.neighborhood = neighborhood

    await quadra.save()

    return {status: 201, msg: quadra}
}


async function delete_quadras(id){
    const quadra = await Quadras.findByPk(id)

    if(!quadra){
        return false
    }

    await quadra.destroy()

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