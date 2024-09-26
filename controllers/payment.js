const payment = require('../models/payment')





 async function create_payment(method, total, date, iduser, idlocation){
  

    const payment = await payment.create ({id, method, total, date, iduser, idlocation})
     
        

    payment.push(payment )
    return payment 
}


async function delete_payment(id){
    const payment = await payment.findByPK(id)

    if(!payment){
        return false
    }
      
    await payment.destroy()

    return true

}


async function read_payment(){
    return await Payment.findAll
}

module.exports = {

    create_payment,
    read_payment,
    delete_payment
}






