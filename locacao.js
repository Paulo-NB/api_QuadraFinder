const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());

var locations = []


function create_location(iduser,idcourt,idpayment, date){
    let id = 0
    if(locations.length > 0){
        id = locations [locations.length - 1].id + 1
    }

    const location = {
        "id": id,
        "iduser": iduser,
        "idcourt": idcourt,
        "idpayment": idpayment,
        "date": date
    }
    locations.push(location)
    return location

}

function update_location(id, iduser, idcourt, date){
    let idx = locations.findIndex(location => location.id === id)

    if(idx == -1){
        return {status: 404, msg: "Não encontrado"}
    }

    if(iduser) locations[idx].iduser = iduser
    if(idcourt) locations[idx].idcourt = idcourt
    if(date) locations[idx].date = date

    return {status: 200, msg: locations[idx]}
}

function delete_location(id){
    let idx = locations.findIndex(location => location.id === id)
    if(idx == -1){
        return false
    }

    locations.splice(idx, 1)
    return true
}


app.post("/location", (req, res) => {

    const {iduser, idcourt, idpayment, date} = req.body
    

    if(!iduser || !idcourt || !idpayment || !date){

        return res.status(400).json({message: 'ERRO ERRO ERRO'})

    }
    const locations = create_location(iduser, idcourt, idpayment, date)

    return res.status(200).json({message:'sucesso', location: locations})


} )


app.get("/location", (req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_users: locations
    }
    )
})


app.put("/location/:id", (req, res) => {

    const id = parseInt(req.params.id)

    const {iduser, idcourt, date} = req.body
    
    let retorno = update_location(id, iduser, idcourt, date)
    return res.status(retorno.status).json(retorno.msg)
})


app.delete("/location/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    
    if(delete_location(id)){
        return res.status(201).json("Foi de base")
    }else{
        return res.status(404).json("Não encontrado")
    }
})

app.listen(port, () => {

    console.log (`Run: http://localhost:${port}`);

})
