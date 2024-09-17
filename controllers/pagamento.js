

var pagamentos = [] 


function create_pagamento(method, total, date, iduser, idlocation){
    let id = 0
    if(pagamentos.length > 0) {
        id = pagamentos [pagamentos.length-1].id + 1
    }

    const pagamento  = {
        "id": id,
        "method": method,
        "total": total,
        "date": date,
        "iduser": iduser,
        "idlocation":idlocation
    }
    pagamentos.push(pagamento )
    return pagamento 
}


function delete_pagamento(id){
    let idx = pagamentos.findIndex(pagamento => pagamento.id === id)
    if(idx == -1){
        return false
    }

    pagamentos.splice(idx, 1)
    return true
}


function read_pagamento(){
    return pagamentos
}

module.exports = {

    create_pagamento,
    read_pagamento,
    delete_pagamento,
}






