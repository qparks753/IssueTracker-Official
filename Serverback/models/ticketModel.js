module.exports = (sequelize, Sequelize) => {
  const Ticket = sequelize.define("ticket", {

    Ticket_Title: {
      type: Sequelize.STRING,
    },
    Author: {
      type: Sequelize.STRING,
    },
    Description: {
      type: Sequelize.STRING,
    },
    Ticket_status: {
      type: Sequelize.STRING,
    },
    Ticket_type: {
      type: Sequelize.STRING,
    },
    Priority: {
      type: Sequelize.STRING,
    }
     }
  ,{
    timestamps:false
  }
  );

  return Ticket;
};
