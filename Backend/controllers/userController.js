const db = require("../models");

const User = db.users;


//Main

// 1.) create User

const addUser = async (req, res) => {
    
    let info = {
      //ID
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      Email:req.body.Email,
      Phone:req.body.Phone
     
    };
  
    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)
};

  // 2.) Retrieve all Users

  const getAllUsers =  async (req,res) =>{

    let users = await User.findAll({})
    res.status(200).send(users)
}

// 3.) Retrieve One User
const getOneUser =  async (req,res) =>{
    let id = req.params.id

    let user = await User.findOne({where:{id:id}})
    res.status(200).send(user)

}

//4.) Update User

const updateUser =  async (req,res) =>{
    let id = req.params.id

    const user = await User.update(req.body, {where:{id:id}})
    res.status(200).send(user)
}

// delete User
const deleteUser =  async (req,res) =>{
    let id = req.params.id

  await User.destroy({where:{id:id}})
    res.status(200).send("Project is Deleted")

}

module.exports ={
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser

}