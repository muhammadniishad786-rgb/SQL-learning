import express from "express"
import { createStudent, deleteStudentById, getStudentById, getStudents, updateStudentById } from "../controllers/studentContoller.js"

const router = express.Router()

router.post("/student", createStudent)
router.get("/student", getStudents)
router.get("/student/:id", getStudentById)
router.put("/student", updateStudentById)
router.delete("/student/:id", deleteStudentById)

export default router