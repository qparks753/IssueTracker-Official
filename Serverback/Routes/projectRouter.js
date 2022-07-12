
const projectController = require("../controllers/projectController.js")

const router = require("express").Router()

router.post("/addProjects", projectController.addProject)

router.get("/allProjects", projectController.getAllProjects)

router.get("/:id", projectController.getOneProject)

router.put("/:id", projectController.updateProject)

router.delete("/:id", projectController.deleteProject)

module.exports = router 

