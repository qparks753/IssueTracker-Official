const dbConfig = require("../config/dbConfig");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
     dbConfig.DB,
     dbConfig.USER, 
     dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    // operatorsAliases: false,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  sequelize.authenticate()
  .then(()=>{
    console.log("connected..")
  })
  .catch(err =>{
    console.log(`Error: ${err}`)
  })


  const db = {};


  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

 //original
  db.users = require("./userModel.js")(sequelize, Sequelize)
  db.tickets = require("./ticketModel.js")(sequelize, Sequelize)
  db.projects = require("./projectModel.js")(sequelize, Sequelize)

  // new 
  db.appuser = require("./appuserModel")(sequelize,Sequelize)
  db.role = require("./roleModel")(sequelize,Sequelize)

  db.role.belongsToMany(db.appuser,{
    through:"user_roles",
    foreignKey:"roleID",
    otherKey:"userId"
  });

  db.appuser.belongsToMany(db.role,{
    through:"user_roles",
    foreignKey:"userId",
    otherKey:"roleId"
  })

 db.Roles=["user", "admin", "moderator"];



  module.exports = db;