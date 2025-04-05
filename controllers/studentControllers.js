const db = require("../Config/db");

// GET ALL STUDENTS LIST
const getStudents = async (req, res) => {
  try {
    const [records] = await db.query("SELECT * FROM student");
    if (!records) {
      return res.status(404).send({
        success: false,
        message: "No Records Found",
      });
    }
    res.status(200).send({
      success: true,
      message: "All Student Records",
      totalStudents: records.length,
      records
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  Get All Student Api",
      error,
    });
  }
};

// GET STUDENT BY ID

const getStudentByid = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: true,
        message: "Invalid or Provide student id",
      });
    }
    //  const data = await db.query(`SELECT FROM Student WHERE id =`,+ studentId
    const data = await db.query(`SELECT * FROM student WHERE id = ?`, [
      studentId,
    ]);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Records not found",
      });
    }
    res.status(200).send({
      success: true,
      studentDeatils: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  Get All Student by id Api ",
      error,
    });
  }
};

// Create Student
const createStudent = async (req, res) => {
  try {
    const { name, roll_no, standerd, fees, medum } = req.body;
    if (!name || !roll_no || !standerd || !fees || !medum) {
      return res.status(500).send({
        success: false,
        message: "Please provide all Fealds",
      });
    }
    const data = await db.query(
      `INSERT INTO student (name,roll_no,standerd,fees,medum) VALUES (?, ?, ?, ?, ?)`,
      [name, roll_no, standerd, fees, medum]
    );
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "Error in INSERT QUERY",
      });
    }
    res.status(201).send({
      success: true,
      message: "New Student Record Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create student API",
      error,
    });
  }
};

// Update Student

const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    if (!studentId) {
      return res.status(404).send({
        success: false,
        message: "Invalid id or Provide id",
      });
    }

    const { name, roll_no, standerd, fees, medum } = req.body;

    const data = await db.query(
      `UPDATE student SET name = ?, roll_no = ?, standerd = ?, fees = ?, medum = ? WHERE id = ?`,
      [name, roll_no, standerd, fees, medum, studentId]
    );

    if (!data) {
      return res.status(500).send({
        success: false,
        message: "Error in Update Data",
      });
    }

    res.status(200).send({
      success: true,
      message: "Student details Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update Student API",
      error,
    });
  }
};

// DELETE student

const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id
    if(!studentId){
      return res.status(404).send({
        success: false,
        message: 'Please provide Student id or Valid Student id'
      })
    }
    await db.query(`DELETE FROM student WHERE id = ?`, [studentId])
    res.status(200).send({
      success: true,
      message: 'Student Deleted Successfully',
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Delete Student API",
      error,
    });
  }
};

module.exports = {
  getStudents,
  getStudentByid,
  createStudent,
  updateStudent,
  deleteStudent,
};
