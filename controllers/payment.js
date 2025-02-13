
const Payment = require('../models/payment')
const {Op} = require('sequelize')




 async function create_payment(req, res){
    const {total, date, iduser, idlocation, cvv, numbercard, yearcard, monthcard} = req.body

    if(!total ){
        return res.status(400).json({ 
            message: 'Campo total do valor é obrigatorios'
        })
    }
    if(!date){
        return res.status(400).json({ 
            message: 'DATA É obrigatorios'
        })
    }
    if(!iduser){
        return res.status(400).json({ 
            message: 'Id USER É obrigatorios'
        })
    }
    if(!idlocation){
        return res.status(400).json({ 
            message: 'location é obrigatorios'
        })
    }
    if( !cvv){
        return res.status(400).json({ 
            message: 'cvv é obrigatorios'
        })
    }
    if(!numbercard ){
        return res.status(400).json({ 
            message: 'numbercard é obrigatorios'
        })
    }
    if(!yearcard ){
        return res.status(400).json({ 
            message: 'yearcard é obrigatorios'
        })
    }
    if(!monthcard){
        return res.status(400).json({ 
            message: 'monthcard é obrigatorios'
        })
    }
    try {
        // Criação do pagamento com manejo de erro
        const payment = await Payment.create({ total, date, iduser, idlocation, cvv, numbercard, yearcard, monthcard });
        
        return res.status(200).json({ message: "Sucesso!", db: payment });
    } catch (error) {
        console.error('Erro ao criar pagamento:', error);
        return res.status(500).json({
            message: 'Erro interno ao criar pagamento',
            error: error.message
        });
    }
}


async function delete_payment(req, res){
    const id = parseInt(req.params.id)
    const payment = await Payment.findByPk(id)

    if(!payment){
        return res.status(404).json("Não encontrado")
    }
    
    await payment.destroy()

    return res.status(201).json("Foi de base")
}


async function show_payment(req, res ) {
    const id = parseInt(req.params.id)
    const payment = await Payment.findByPk(id)

    if(!payment){
        return res.status(404).json({
            mensage: "Não encontrado"
        })
    }

    return res.status(202).json({
        mensage: "Encontrei",
        db: payment
    })
    
}

async function read_payment(req, res){
    const {method} = req.query

    const condition = {}

    if (method){
        condition.method = { [Op.like]: `%${method}%`}
    }


    return res.status(200).json({
        message: 'Sucesso', db: await Payment.findAll({
            where: Object.keys(condition).length > 0?
            condition: undefined
        })
     

    })
}

module.exports = {

    create_payment,
    read_payment,
    delete_payment,
    show_payment
}






