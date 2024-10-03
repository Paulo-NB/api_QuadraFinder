const Payment = require('../models/payment')





 async function create_payment(method, total, date, iduser, idlocation){
  

    const payment = await Payment.create ({method, total, date, iduser, idlocation})
     
        

    return payment 
}


async function delete_payment(id){
    const payment = await Payment.findByPK(id)

    if(!payment){
        return false
    }
      
    await Pyment.destroy()

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






