const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

var quadras = []

function create_quadra(publicplace, zipcode, photos, type, name, state, city, neighborhood){
    let id = 0
    if(quadras.length > 0) {
        id = quadras[quadras.length-1].id + 1
    }

    const quadra = {
        "id": id,
        "publicplace": publicplace,
        "zipcode": zipcode,
        "photos": photos,
        "type": type,
        "name": name,
        "state": state,
        "city": city,
        "neighborhood": neighborhood
    }
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

app.post("/quadra", (req, res) => {
    const { publicplace, zipcode, photos, type, name, state, city, neighborhood} = req.body

    if(!publicplace || !zipcode || !photos || !type || !name || !state || !city || ! neighborhood){
        return res.status(400).json({
            massege: 'Todos os campos são obrigatórios'
        })
    }

    const quadra = create_quadra( publicplace, zipcode, photos, type, name, state, city, neighborhood)
    return res.status(200).json({
        massege: 'Sucesso', quadra_created: quadra
    })

} )




app.get("/quadra", (req, res) =>{
    return res.status(200).json({
        massege: 'Sucesso', list_quadra: quadras
    })
})



app.put("/quadra/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const {publicplace, zipcode, photos, type, name, state, city, neighborhood} = req.body

    let retorno = update_quadras(id, publicplace, zipcode, photos, type, name, state, city, neighborhood)
    return res.status(retorno.status).json(retorno.msg)

})



app.delete("/quadra/:id", (req, res) =>{
    const id = parseInt(req.params.id)
    if(delete_quadras(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
} )




app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})
