const express = require('express')
const router = express.Router()
const clocacao = require('../controllers/location')

router.post("/create", (req, res) => {

    const {iduser, idcourt, idpayment, date} = req.body
    

    if(!iduser || !idcourt || !idpayment || !date){

        return res.status(400).json({message: 'ERRO ERRO ERRO'})

    }
    const locations = clocacao.create_location(iduser, idcourt, idpayment, date)

    return res.status(200).json({message:'sucesso', location: locations})


} )

router.get("/read", (req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_users: clocacao.read_location()
    }
    )
})


router.put("/update/:id", (req, res) => {

    const id = parseInt(req.params.id)

    const {iduser, idcourt, date} = req.body
    
    let retorno = clocacao.update_location(id, iduser, idcourt, date)
    return res.status(retorno.status).json(retorno.msg)
})


router.delete("/del/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    
    if(clocacao.delete_location(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
})


module.exports = router