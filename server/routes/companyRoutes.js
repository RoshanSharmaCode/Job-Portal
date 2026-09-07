import express from "express";
import upload from "../config/multer.js";
import { protectCompnay } from "../middlewares/authMiddleware.js";

import {
  registerCompany,
  loginCompany,
  getCompanyData,
  postJob,
  getCompanyJobApplications,
  getCompanyPostedJobs,
  changeJobApplicationStatus,
  changeVisibility,
} from "../controllers/companyController.js";

const router = express.Router();

// Register a new company
router.post("/register", upload.single("image"), registerCompany);

// Company login
router.post("/login", loginCompany);

// Get company data
router.get("/company", protectCompnay, getCompanyData);

// Post a new job
router.post("/post-job", protectCompnay, postJob);

// Get company's job applications
router.get("/applications", protectCompnay, getCompanyJobApplications);

// Get company's posted jobs
router.get("/list-jobs", protectCompnay, getCompanyPostedJobs);

// Change job application status
router.post("/change-status", protectCompnay, changeJobApplicationStatus);

// Change job visibility
router.post("/change-visiblity", protectCompnay, changeVisibility);

export default router;
