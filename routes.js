const express = require("express");
const controller = require("./controllers.js");

const router = express.Router();

// --------------- API REST CRUD

router.get("/doctores", controller.readDoctores);            // Read All
router.get("/doctores/:id", controller.readDoctor);         // Read
router.delete("/doctores/:id", controller.deleteDoctor);    // Delete
router.put("/doctores/:id", controller.updateDoctor);       // Update
router.post("/doctores", controller.createDoctor);          // Create

router.get("/pacientes", controller.readPacientes);          // Read All
router.get("/pacientes/:id", controller.readPaciente);       // Read
router.delete("/pacientes/:id", controller.deletePaciente);  // Delete
router.put("/pacientes/:id", controller.updatePaciente);     // Update
router.post("/pacientes", controller.createPaciente);        // Create


module.exports = router;
