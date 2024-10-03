
const Quadra = require('../models/quadra')

async function create_quadra(req, res){
    const { publicplace, zipcode, photos, type, name, state, city, neighborhood} = req.body

    if(!publicplace || !zipcode || !photos || !type || !name || !state || !city || ! neighborhood){
        return res.status(400).json({
            massege: 'Todos os campos são obrigatórios'
        })
    }
    
    const quadra = await Quadra.create({publicplace, zipcode, photos, type, name, state, city, neighborhood})

    return res.status(201).json({
        message:"criado",
        db: quadra
    })

}

async function update_quadra(req, res){
   
    const id = parseInt(req.params.id)

    const {publicplace, zipcode, photos, type, name, state, city, neighborhood} = req.body



    const quadra = await Quadra.findByPk(id)

    if(!quadra){
        return res.status(404).json("Não encontrado")
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

    return res.status(203).json({
        message:"atualizado",
        db: quadra
    })
}


async function delete_quadra(req, res){
    const id = parseInt(req.params.id)
    const quadra = await Quadra.findByPk(id)

    if(!quadra){
        return res.status(404).json("Não encontrado")
    }

    await quadra.destroy()

    return res.status(201).json("Foi de base")
}

async function read_quadra(req, res){
    return res.status(200).json({
        massege: 'Sucesso', list_quadra:await quadra.findAll()
    })
}



module.exports = {
    create_quadra,
    read_quadra,
    update_quadra,
    delete_quadra
}