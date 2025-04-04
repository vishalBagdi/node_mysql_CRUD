const express = require('express');
const { getStudents, getStudentByid } = require('../controllers/studentControllers');

// router object

const router = express.Router()

// GET All STUDENTS LIST || GET

router.get('/getall',getStudents)

// GET STUDENT BY ID
router.get('/get/:id', getStudentByid)


module.exports = router