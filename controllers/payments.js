const Payments = require('../models/payments')


var paymentss = [] 


 async function create_payments(method, total, date, iduser, idlocation){
  

    const payments = await Payments.create ({id, method, total, date, iduser, idlocation})
     
        

    paymentss.push(payments )
    return payments 
}


async function delete_payments(id){
    const payments = await Payments.findByPK(id)

    if(!payments){
        return false
    }
      
    await payments.destroy()

    return true

}


function read_payments(){
    return paymentss
}

module.exports = {

    create_payments,
    read_payments,
    delete_payments,
}






