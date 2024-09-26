const express = require ('express')
const router = express.Router()
const cpayment = require('../controllers/payment')





router.post("/create", (req, res) => {
    const {method, total, date, iduser, idlocation} = req.body

    if(!method ||  !total ||  !date || !iduser || !idlocation){
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatorios'
        })
    }

    const payment = cpayment.create_payment(method, total, date, iduser, idlocation)

    return res.status(200).json({ 
        message: 'Sucesso', payment_created: payment
    })
})

router.get("/read",(req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_payment: cpayment.read_payment()
    })
})


router.delete("/del/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    if(cpayment.delete_payment(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
})

module.exports = router 