
var vusers = []



function create_user(name, pass, cpf, email, phone, type){
    let id = 0
    if(vusers.length > 0) {
        id = vusers[vusers.length-1].id + 1
    }
    const user = {
        "id": id,
        "name": name,
        "pass": pass,
        "cpf": cpf,
        "email": email,
        "phone": phone,
        "type": type
    }
    vusers.push(user)
    return user
}

function update_user(id, name, pass, cpf, email, phone, type){
    let idx = vusers.findIndex(user => user.id === id)

    if(idx == -1){
        return {status: 404, msg: "Não encontrado"}
    }

    if(name) vusers[idx].name = name
    if(pass) vusers[idx].pass = pass
    if(cpf) vusers[idx].cpf = cpf
    if(email) vusers[idx].email = email
    if(phone) vusers[idx].phone = phone
    if(type) vusers[idx].type = type
    

    return {status: 200, msg: vusers[idx]}
}

function delete_user(id){
    let idx = vusers.findIndex(user => user.id === id)
    if(idx == -1){
        return false
    }

    vusers.splice(idx, 1)
    return true
}
function read_user(){
    return vusers
}


module.exports = {
    create_user,
    read_user,
    update_user,
    delete_user
}