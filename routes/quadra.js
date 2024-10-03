const express = require('express')
const router = express.Router()
const cquadra = require('../controllers/quadra')
const cquadra = require('../controllers/quadra')




router.post("/create", cquadra.create_quadra)



router.get("/read", cquadra.read_quadra)
   



router.put("/update/:id",cquadra.update_quadra)
   



router.delete("/del/:id",cquadra.delete_quadra)


module.exports = router