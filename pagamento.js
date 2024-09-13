const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

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

app.get("/pagamento",(req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_users: pagamentos
    })
})


function delete_pagamento(id){
    let idx = pagamentos.findIndex(pagamento => pagamento.id === id)
    if(idx == -1){
        return false
    }

    pagamentos.splice(idx, 1)
    return true
}



app.post("/pagamento", (req, res) => {
    const {method, total, date, iduser, idlocation} = req.body

    if(!method ||  !total ||  !date || !iduser || !idlocation){
        return res.status(400).json({ 
            message: 'Todos os campos são obrigatorios'
        })
    }

    const pagamento = create_pagamento(method, total, date, iduser, idlocation)

    return res.status(200).json({ 
        message: 'Sucesso', pagamento_created: pagamento
    })
})

app.get("/pagamento",(req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_pagamento: pagamentos
    })
})

app.delete("/pagamento/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    if(delete_pagamento(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
})

app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})








