import Company from "../models/Compnay.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utils/generateToken.js";

export const registerCompany = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.status(400).json({
      success: false,
      message: "Missing Details",
    });
  }

  try {
    const companyExists = await Company.findOne({ email });

    if (companyExists) {
      return res.status(400).json({
        success: false,
        message: "Company already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Upload image to Cloudinary
    const imageUpload = await cloudinary.uploader.unsigned_upload(
      imageFile.path,
      "job_portal_test",
    );

    // Create company
    const company = new Company({
      name,
      email,
      password: hashedPassword,
      image: imageUpload.secure_url,
    });

    await company.save();

    return res.status(201).json({
      success: true,
      company: {
        _id: company._id,
        name: company.name,
        email: company.email,
        image: company.image,
      },
      token: generateToken(company._id),
    });
  } catch (error) {
    console.error("REGISTER COMPANY ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Company login
export const loginCompany = async (req, res) => {};

// Get company data

export const getCompanyData = async (req, res) => {};

// Post a new job
export const postJob = async (req, res) => {};

// Get Company job applications
export const getCompanyJobApplications = async (req, res) => {};

// Get company Posted Jobs
export const getCompanyPostedJobs = async (req, res) => {};

// Change job application status
export const changeJobApplicationStatus = async (req, res) => {};

// Change job visibility
export const changeVisibility = async (req, res) => {};
