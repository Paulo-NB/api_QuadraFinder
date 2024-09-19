const express = require('express')
const app = express()
const port = 3000
app.use(express.json())


const rlocacao = require('./routes/location')
app.use('/location', rlocacao)
const rpayments = require('./routes/payments')
app.use('/payments', rpayments)
const rquadra = require('./routes/quadras')
app.use('/quadras', rquadra)
const ruser = require('./routes/user')
app.use('/user', ruser)



app.listen(port, () => {
    console.log(`Run: http://localhost:${port}`);
})