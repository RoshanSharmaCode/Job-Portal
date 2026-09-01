import express from "express";
import upload from "../config/multer.js";
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
router.get("/Company", getCompanyData);

// Post a new job
router.post("/post-jobs", postJob);

// Get company's job applications
router.get("/applications", getCompanyJobApplications);

// Get company's posted jobs
router.get("/list-jobs", getCompanyPostedJobs);

// Change job application status
router.post("/change-status", changeJobApplicationStatus);

// Change job visibility
router.post("/change-visibility", changeVisibility);

export default router;
