    
    const express = require('express')
    const cors = require('cors');
    const app = express()
    const port = 3001
    app.use(express.json())
    
    app.use(cors());

    const sequelize = require('./config/database')

    sequelize.authenticate().then(
        ()=>console.log("Banco conectado")
    ).catch(
        err => console.error("Erro bd:", err)
    )

    const rlocacao = require('./routes/location')
    app.use('/location', rlocacao)
    const rpayment = require('./routes/payment')
    app.use('/payment', rpayment)
    const rquadra = require('./routes/quadra')
    app.use('/quadra', rquadra)
    const ruser = require('./routes/user')
    app.use('/user', ruser)



if (require.main === module) {
    app.listen(port, () => {
        console.log(`Run: http://10.60.46.36:${port}`);
    })
}

module.exports = app;