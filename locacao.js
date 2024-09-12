//var locations = []

//function create_location(nome,email,senha){


    //const  locations = {

    //"nome": nome,
    //"email": email,
    //"senha": senha

  //  }

//locations.push
//}


const express = require('express')
const app = express()
const port = 3000;
app.use(express.json());

var locations = []





function create_location(iduser,idcourt,idpayment, date, idlocation){

    const location = {
        "idlocation": idlocation,
        "iduser": iduser,
        "idcourt": idcourt,
        "idpayment": idpayment,
        "date": date
    }
    locations.push(location)
    return location

}

app.post("/location", (req, res) => {

    const {idlocation, iduser, idcourt,idpayment, date} = req.body
    

    if(!idlocation || !iduser || !idcourt || !idpayment || !date){

        return res.status(400).json({message: 'ERRO ERRO ERRO'})

    }
    const locations = create_location(idlocation, iduser, idcourt,idpayment, date)

    return res.status(200).json({message:'sucesso', location: locations})


} )

app.listen(port, () => {

    console.log (`Run: http://localhost:${port}`);

})

app.get("/location", (req, res) =>{
    return res.status(200).json({
        message: 'Sucesso', list_users: locations
    }
    )
})