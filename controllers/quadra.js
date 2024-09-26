
const Quadra = require('../models/quadra')

async function create_quadra(publicplace, zipcode, photos, type, name, state, city, neighborhood){
    
    const quadra = await Quadras.create({publicplace, zipcode, photos, type, name, state, city, neighborhood})

    return quadra

}

async function update_quadra(id, publicplace, zipcode, photos, type, name, state, city, neighborhood){
   const quadra = await Quadra.findByPk(id)

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

    return {status: 200, msg: quadra}
}


async function delete_quadra(id){
    const quadra = await Quadra.findByPk(id)

    if(!quadra){
        return false
    }

    await quadra.destroy()

    return true
}

async function read_quadra(){
    return await quadra.findAll
}



module.exports = {
    create_quadra,
    read_quadra,
    update_quadra,
    delete_quadra
}