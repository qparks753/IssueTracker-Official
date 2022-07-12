


module.exports = (sequelize, Sequelize) => {
    const Appuser = sequelize.define("appusers", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
    return Appuser;
  };