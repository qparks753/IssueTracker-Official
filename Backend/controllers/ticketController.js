const db = require("../models");

const Ticket = db.tickets;

//Main

// 1.) create ticket

const addTicket = async (req, res) => {
    
    let info = {
      //ID
      userid: req.body.userid,
      Ticket_Title: req.body.Ticket_Title,
      Author: req.body.Author,
      Description: req.body.Description,
      Ticket_status:req.body.Ticket_status,
      Ticket_type: req.body.Ticket_type,
      Priority:req.body.Priority
    };
  
    const ticket = await Ticket.create(info)
    res.status(200).send(ticket)
    console.log(ticket)
};

  // 2.) Retrieve all Tickets

const getAllTickets =  async (req,res) =>{

    let tickets = await Ticket.findAll({})
    res.status(200).send(tickets)
}

// 3.) Retrieve One Ticket

const getOneTicket =  async (req,res) =>{
    let id = req.params.id

    let ticket = await Ticket.findOne({where:{id:id}})
    res.status(200).send(ticket)

}

//4.) Update Ticket

const updateTicket =  async (req,res) =>{
    let id = req.params.id

    const ticket = await Ticket.update(req.body, {where:{id:id}})
    res.status(200).send(ticket)
}

// delete Ticket
const deleteTicket =  async (req,res) =>{
    let id = req.params.id

  await Ticket.destroy({where:{id:id}})
    res.status(200).send("Project is Deleted")

}

module.exports ={
    addTicket,
    getAllTickets,
    getOneTicket,
    updateTicket,
    deleteTicket

}