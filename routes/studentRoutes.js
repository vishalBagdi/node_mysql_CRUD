const express = require("express");
const {
  getStudents,
  getStudentByid,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentControllers");

// router object

const router = express.Router();

// GET All STUDENTS LIST || GET

router.get("/getall", getStudents);

// GET STUDENT BY ID
router.get("/get/:id", getStudentByid);

// Create Student || POST
router.post("/create", createStudent);

// Update Student || PUT
router.put("/update/:id",updateStudent)

// Delete
router.delete("/delete/:id",deleteStudent)

module.exports = router;
