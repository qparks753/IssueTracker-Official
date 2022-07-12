module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define(
    "project",
    {
      Project: {
        type: Sequelize.STRING,
        //    allowNull:false
      },
      Contributors: {
        type: Sequelize.STRING,
      },
      Project_Description: {
        type: Sequelize.TEXT, //Text
      }
    }
    ,{
      timestamps: false,
    }
  );

  return Project;
};
