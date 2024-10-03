const express = require ('express')
const router = express.Router()
const cpayment = require ('../controllers/payment')

router.post("/create", cpayment.create_payment)

router.get("/read",cpayment.read_payment)

router.get("/show/:id", cpayment.show_payment)

router.delete("/del/:id", cpayment.delete_payment)

module.exports = router 