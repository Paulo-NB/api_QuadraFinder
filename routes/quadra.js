const express = require('express')
const router = express.Router()
const cquadra = require('../controllers/quadra')





router.post("/create", cquadra.create_quadra)



router.get("/read", cquadra.read_quadra)
   

router.get("/show/:id", cquadra.show_quadra)


router.put("/update/:id",cquadra.update_quadra)
   


router.delete("/del/:id",cquadra.delete_quadra)


module.exports = router