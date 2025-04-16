import express from "express";
import {
  addFaculty,
  editFaculty,
  loginFaculty,
  logoutFaculty,
  getFacultyProfile,
  meFaculty,
  getAllFacultyByCollege,
  deleteFaculty
} from "../controllers/facultyController.js";

import {
  addFacultyValidation,
  editFacultyValidation,
} from "../middlewares/facultyValidations.js";

import handleValidationErrors from "../middlewares/handleValidationErrors.js";
import upload from "../middlewares/upload.js";
import { authentiFaculty } from "../middlewares/auth.js";

const router = express.Router();




router.post("/register", addFaculty);


router.post("/login", loginFaculty);


router.post("/logout", logoutFaculty);


router.get("/me", authentiFaculty, meFaculty);





router.get("/faculty-profile", authentiFaculty, getFacultyProfile);


router.put("/", upload.single("image"), authentiFaculty, editFaculty);




router.get("/:collegeId", getAllFacultyByCollege);


router.delete("/delete/:id", deleteFaculty);


export default router;
