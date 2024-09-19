const Payments = require('../models/payments')


var paymentss = [] 


function create_payments(method, total, date, iduser, idlocation){
    let id = 0
    if(paymentss.length > 0) {
        id = paymentss [paymentss.length-1].id + 1
    }

    const payments = new Payments (id, method, total, date, iduser, idlocation)
     
        

    paymentss.push(payments )
    return payments 
}


function delete_payments(id){
    let idx = paymentss.findIndex(payments => payments.id === id)
    if(idx == -1){
        return false
    }

    paymentss.splice(idx, 1)
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






