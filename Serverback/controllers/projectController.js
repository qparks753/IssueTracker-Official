
const db = require("../models");


//create main Model

const Project = db.projects;

//Main

// 1.) create project

const addProject = async (req, res) => {
  let info = {
    Project: req.body.Project,
    Contributors: req.body.Contributors,
    Project_Description: req.body.Project_Description,
  };

  const project = await Project.create(info)
  res.status(200).send(project)
  console.log(project)
};

// 2.) Retrieve all Projects

const getAllProjects =  async (req,res) =>{

    let projects = await Project.findAll({})
    res.status(200).send(projects)
}

// 3.) Retrieve One Project

const getOneProject =  async (req,res) =>{
    let id = req.params.id

    let project = await Project.findOne({where:{id:id}})
    res.status(200).send(project)

}

//4.) Update Project

const updateProject =  async (req,res) =>{
    let id = req.params.id

    const project = await Project.update(req.body, {where:{id:id}})
    res.status(200).send(project)
}

// const updateProject =  async (req,res) =>{
//   let id = req.params.id

//   const project = await Project.update({where:{id:id}})
//   res.status(200).send(project)
// }

//Delete Projects

const deleteProject =  async (req,res) =>{
    let id = req.params.id

  await Project.destroy({where:{id:id}})
    res.status(200).send("Project is Deleted")

}

module.exports ={
    addProject,
    getAllProjects,
    getOneProject,
    updateProject,
    deleteProject

}