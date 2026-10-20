import pool from "../config/dbConnection.js"


export const createStudent = async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const result = await pool.query(
      `INSERT INTO student (name, age, email)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, age, email]
    );

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      student: result.rows[0],
    });
  } catch (error) {
    console.error("Error creating student:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create student",
    });
  }
};

export const getStudents = async (req, res) => {
    try{
        const result = await pool.query("SELECT * FROM student");

        res.status(200).json({
            success: true,
            students: result.rows
        })
    }catch(error){
        console.log("error fetching students:", error.message);

        res.status(500).json({
            success: false,
            message: "falied to fetch students"
        })
    }
}

export const getStudentById = async (req, res) => {
    try{
        const {id} = req.params

        const result = await pool.query("SELECT * FROM student WHERE id = $1" , [id])

        if (result.rows.length === 0) {
          return res.status(404).json({
          success: false,
          message: "Student not found",
          });
        }

        res.status(200).json({
            success: true,
            students: result.rows[0]
        })
       
    }catch(error){
        console.log("failed to fetch student", error.message)

        res.status(500).json({
            success: false,
            message: "falied to fetch students"
        })
    }
}

export const deleteStudentById = async (req, res) => {
    try{
        const {id} = req.params;

        const result = await pool.query("DELETE FROM student WHERE id = $1 RETURNING *", [id]);

        if (result.rows.length === 0) {
          return res.status(404).json({
          success: false,
          message: "Student not found",
          });
        }

        res.status(200).json({
            success: true,
            message: "student deleted successfully"
        })
    }catch(error){
        console.log("failed to delete student", error.message)

        res.status(500).json({
            success: false,
            message: "failed to delete student"
        })
    }
}