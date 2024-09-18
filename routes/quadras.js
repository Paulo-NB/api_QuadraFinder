const express = require('express')
const router = express.Router()
const cquadra = require('./controllers/quadras')




router.post("/create", (req, res) => {
    const { publicplace, zipcode, photos, type, name, state, city, neighborhood} = req.body

    if(!publicplace || !zipcode || !photos || !type || !name || !state || !city || ! neighborhood){
        return res.status(400).json({
            massege: 'Todos os campos são obrigatórios'
        })
    }

    const quadra = cquadra.create_quadra( publicplace, zipcode, photos, type, name, state, city, neighborhood)
    return res.status(200).json({
        massege: 'Sucesso', quadra_created: quadra
    })

} )




router.get("/read", (req, res) =>{
    return res.status(200).json({
        massege: 'Sucesso', list_quadra: cquadra.read_quadra()
    })
})



router.put("/update/:id", (req, res) => {
    const id = parseInt(req.params.id)

    const {publicplace, zipcode, photos, type, name, state, city, neighborhood} = req.body

    let retorno = cquadra.update_quadras(id, publicplace, zipcode, photos, type, name, state, city, neighborhood)
    return res.status(retorno.status).json(retorno.msg)

})



router.delete("/del/:id", (req, res) =>{
    const id = parseInt(req.params.id)
    if(cquadra.delete_quadras(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
} )


module.exports = router