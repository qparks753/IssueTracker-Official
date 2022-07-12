const ticketController = require("../controllers/ticketController.js")

const router = require("express").Router()

router.post("/addTickets", ticketController.addTicket)

router.get("/allTickets", ticketController.getAllTickets)

router.get("/:id", ticketController.getOneTicket)

router.put("/:id", ticketController.updateTicket)

router.delete("/:id", ticketController.deleteTicket)

module.exports = router 
