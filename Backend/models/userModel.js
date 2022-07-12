module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
   
    FirstName: {
      type: Sequelize.STRING,
    },
    LastName: {
      type: Sequelize.STRING,
    },
    Email: {
      type: Sequelize.STRING,
    },
    Phone: {
      type: Sequelize.STRING,
    }
  },
  {
      timestamps:false
  });

  return User;
};
