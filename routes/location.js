const express = require('express')
const router = express.Router()
const clocacao = require('../controllers/location')

router.post("/create", clocacao.create_location)

router.get("/read", clocacao.read_location)
    
router.put("/update/:id",clocacao.update_location)

router.get("/show/:id", clocacao.show_location)

router.delete("/del/:id", clocacao.delete_location)


    
module.exports = router