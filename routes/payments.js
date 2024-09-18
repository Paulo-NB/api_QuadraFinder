const express = require ('express')
const router = express.Router()
const cpayments = require('../controllers/payments')





router.post("/create", (req, res) => {
    const {method, total, date, iduser, idlocation} = req.body

    if(!method ||  !total ||  !date || !iduser || !idlocation){
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatorios'
        })
    }

    const payments = cpayments.create_payments(method, total, date, iduser, idlocation)

    return res.status(200).json({ 
        message: 'Sucesso', payments_created: payments
    })
})

router.get("/read",(req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_payments: cpayments.read_payments()
    })
})


router.delete("/del/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    if(cpayments.delete_payments(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
})

module.exports = router 