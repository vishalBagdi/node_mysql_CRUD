const express = require("express");
const {
  getStudents,
  getStudentByid,
  createStudent,
} = require("../controllers/studentControllers");

// router object

const router = express.Router();

// GET All STUDENTS LIST || GET

router.get("/getall", getStudents);

// GET STUDENT BY ID
router.get("/get/:id", getStudentByid);

// Create Student || POST
router.post("/create", createStudent);

module.exports = router;
