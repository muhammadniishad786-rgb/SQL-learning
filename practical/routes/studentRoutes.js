import express from "express"
import { createStudent, deleteStudentById, getStudentById, getStudents } from "../controllers/studentContoller.js"

const router = express.Router()

router.post("/student", createStudent)
router.get("/student", getStudents)
router.get("/student/:id", getStudentById)
router.delete("/student/:id", deleteStudentById)

export default router