const User = require('../models/user')



async function create_user(name, pass, cpf, email, phone, type){
    const user = await User.create({name, pass, cpf, email, phone, type})

    return user
}

async function update_user(id, name, pass, cpf, email, phone, type){
    const user = await User.findByPk(id)

    if(!user){
        return {status: 404, msg: "Não encontrado"}
    }

    if(name) user.name = name
    if(pass) user.pass = pass
    if(cpf) user.cpf = cpf
    if(email) user.email = email
    if(phone) user.phone = phone
    if(type) user.type = type
    
    await user.save()


    return {status: 200, msg: user}
}

async function delete_user(id){
    const user = await User.findByPk(id)

    if(!user){
        return false
    }

    await user.destroy()

    return true
}
async function read_user(){
    return await User.findAll

}
module.exports = {
    create_user,
    read_user,
    update_user,
    delete_user
}