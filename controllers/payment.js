const Payment = require('../models/payment')





 async function create_payment(req, res){
    const {method, total, date, iduser, idlocation} = req.body

    if(!method ||  !total ||  !date || !iduser || !idlocation){
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatorios'
        })
    }


    const payment = await Payment.create ({method, total, date, iduser, idlocation})
     
<<<<<<< HEAD
        

    return payment 
=======
    return res.status(200).json({
        message:"sucesso",
        db: payment
    }) 
>>>>>>> afc3a7a (subi payment)
}


async function delete_payment(req, res){
    const id = parseInt(req.params.id)
    const payment = await Payment.findByPK(id)

    if(!payment){
        return res.status(404).json("Não encontrado")
    }
    
    await Payment.destroy()

    return res.status(201).json("Foi de baserado")
}


async function read_payment(req, res){
    return res.status(200).json({
        message: 'Sucesso', list_payment: await Payment.findAll()
     

    })
}

module.exports = {

    create_payment,
    read_payment,
    delete_payment
}






