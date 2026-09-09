# 💼 Full-Stack Job Portal

A full-stack Job Portal application built using the **MERN stack** that connects job seekers with recruiters. Users can browse and apply for jobs, while companies can create job listings, manage applications, and update application statuses.

The application includes authentication, resume and image uploads, rich-text job descriptions, error monitoring, and cloud deployment.

---

## 🚀 Live Demo

🔗 **Live Application:** https://job-portal-client-self-chi.vercel.app

🔗 **GitHub Repository:** https://github.com/RoshanSharmaCode/Job-Portal.git

---

## 📌 Features

### 👨‍💼 Job Seeker

- User registration and authentication with Clerk
- Browse available job listings
- Search and explore jobs
- View detailed job information
- Apply for jobs
- Prevent duplicate job applications
- Upload and update resume
- View submitted applications
- Track application status
- Responsive user interface

### 🏢 Recruiter / Company

- Company registration and authentication
- Company profile management
- Upload company logo
- Create and publish job listings
- Rich-text job descriptions
- View jobs posted by the company
- View received job applications
- View applicant profiles and resumes
- Accept or reject applications
- Change job visibility
- Manage posted jobs

---

# 🛠️ Tech Stack

## Frontend

- **React.js** – UI development
- **Vite** – Frontend build tool
- **Tailwind CSS** – Responsive styling
- **React Router DOM** – Client-side routing
- **React Context API** – Global state management
- **Axios** – HTTP requests
- **React Toastify** – Toast notifications
- **Quill.js** – Rich-text editor for job descriptions

## Backend

- **Node.js** – JavaScript runtime
- **Express.js** – REST API framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM
- **JWT** – Recruiter/company authentication
- **Bcrypt** – Password hashing
- **Multer** – Multipart/form-data and file uploads
- **Dotenv** – Environment variable management

## Authentication

- **Clerk** – Job seeker authentication and user management
- **JWT** – Company/recruiter authentication

## Cloud & Monitoring

- **Cloudinary** – Company logo and resume storage
- **Sentry** – Error tracking and monitoring
- **Vercel** – Application deployment

---

# 🏗️ Project Architecture

The application follows a client-server architecture.

```text
                    ┌─────────────────────┐
                    │       Client        │
                    │  React + Vite       │
                    │  Tailwind CSS       │
                    └──────────┬──────────┘
                               │
                               │ Axios / REST API
                               ▼
                    ┌─────────────────────┐
                    │       Server        │
                    │  Node.js + Express  │
                    └──────────┬──────────┘
                               │
                 ┌─────────────┼─────────────┐
                 │             │             │
                 ▼             ▼             ▼
            ┌─────────┐   ┌──────────┐  ┌──────────┐
            │ MongoDB │   │Cloudinary│  │  Sentry  │
            │         │   │          │  │          │
            └─────────┘   └──────────┘  └──────────┘

```

# 📂 Project Structure

```text
Job-Portal/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   ├── instrument.js
│   │   └── multer.js
│   │
│   ├── controllers/
│   │   ├── companyController.js
│   │   ├── jobController.js
│   │   ├── userController.js
│   │   └── webhooks.js
│   │
│   ├── middlewares/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── Company.js
│   │   ├── Job.js
│   │   ├── JobApplication.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── companyRoutes.js
│   │   ├── jobRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── vercel.json
│
└── README.md
```

---

# 🔐 Authentication

The application uses two different authentication approaches.

### Job Seekers

**Clerk** is used for:

* User registration
* User login
* User authentication
* Profile management
* Secure user identity

The authenticated Clerk user ID is used as the user's identifier in MongoDB.

### Recruiters / Companies

Recruiters use:

* Bcrypt for password hashing
* JWT for authentication
* Middleware to protect company-specific routes

Protected recruiter requests include the company token in the request headers.

---

# 📡 REST API

The backend contains **14 main API routes** distributed across three route modules.

## 🏢 Company Routes – 8

| Method | Endpoint                        | Description                  | Protected |
| ------ | ------------------------------- | ---------------------------- | --------- |
| POST   | `/api/company/register`         | Register a new company       | ❌         |
| POST   | `/api/company/login`            | Company login                | ❌         |
| GET    | `/api/company/company`          | Get company data             | ✅         |
| POST   | `/api/company/post-job`         | Create a new job             | ✅         |
| GET    | `/api/company/applications`     | Get company job applications | ✅         |
| GET    | `/api/company/list-jobs`        | Get company's posted jobs    | ✅         |
| POST   | `/api/company/change-status`    | Accept/reject an application | ✅         |
| POST   | `/api/company/change-visiblity` | Change job visibility        | ✅         |

---

## 💼 Job Routes – 2

| Method | Endpoint        | Description              | Protected |
| ------ | --------------- | ------------------------ | --------- |
| GET    | `/api/jobs/`    | Get all available jobs   | ❌         |
| GET    | `/api/jobs/:id` | Get a specific job by ID | ❌         |

---

## 👤 User Routes – 4

| Method | Endpoint                   | Description                 | Protected |
| ------ | -------------------------- | --------------------------- | --------- |
| GET    | `/api/users/user`          | Get authenticated user data | ✅         |
| POST   | `/api/users/apply`         | Apply for a job             | ✅         |
| GET    | `/api/users/applications`  | Get user's applications     | ✅         |
| POST   | `/api/users/update-resume` | Upload/update resume        | ✅         |

### API Summary

```text
Company Routes  → 8
Job Routes      → 2
User Routes     → 4
--------------------
Total           → 14
```

> Note: The application also contains non-router endpoints such as the root API health endpoint, Clerk webhook endpoint, and Sentry test endpoint. The 14-route count above refers specifically to the three main API route modules.

---

# 🗄️ Database

The application uses **MongoDB** with **Mongoose** for database management.

The main data models include:

```text
User
Company
Job
JobApplication
```

### User

Stores:

* Clerk user ID
* Name
* Email
* Profile image
* Resume URL

### Company

Stores:

* Company name
* Company email
* Password
* Company logo
* Company information

### Job

Stores:

* Job title
* Description
* Location
* Salary
* Company
* Job visibility
* Job details

### Job Application

Stores relationships between:

```text
User ↔ Job ↔ Company
```

and tracks the application status:

```text
pending
accepted
rejected
```

---

# ☁️ File Uploads

**Multer** is used to process multipart form data on the backend.

Uploaded files are stored using **Cloudinary**.

### Company Logo

Recruiters can upload a company logo during company registration.

```text
Frontend
   ↓
FormData
   ↓
Multer
   ↓
Cloudinary
   ↓
Secure Cloudinary URL
   ↓
MongoDB
```

### Resume

Job seekers can upload their resumes.

The resume URL is stored in the user's MongoDB document and can be accessed by recruiters when reviewing applications.

---

# ✍️ Rich Text Job Descriptions

Recruiters can create formatted job descriptions using **Quill.js**.

This allows job descriptions to contain formatting such as:

* Headings
* Bold text
* Lists
* Structured content

This provides a better experience than storing plain-text job descriptions.

---

# 🔔 Notifications

**React Toastify** is used to provide feedback to users for actions such as:

* Successful login
* Successful company registration
* Job creation
* Job application
* Resume upload
* Duplicate applications
* Authentication errors
* API errors

Example:

```text
Application submitted successfully
```

or:

```text
You have already applied for this job
```

---

# 🛡️ Error Monitoring

**Sentry** is integrated into the application for error tracking and monitoring.

It helps identify:

* Runtime errors
* Server crashes
* API errors
* Application failures
* Performance issues

A Sentry test endpoint is also available during development to verify error reporting.

---

# 🚀 Deployment

The application is deployed using **Vercel**.

The frontend and backend are configured for deployment with environment variables for services such as:

```text
MongoDB
Clerk
Cloudinary
Sentry
JWT
```

Environment variables are kept outside the source code and should not be committed to GitHub.

---

# ⚙️ Environment Variables

Example environment configuration:

## Server

```env
MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

CLERK_SECRET_KEY=your_clerk_secret_key

CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

SENTRY_DSN=your_sentry_dsn
```

## Client

```env
VITE_BACKEND_URL=your_backend_url

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

> Never commit `.env` files or expose API keys, JWT secrets, Cloudinary secrets, or Clerk secret keys in a public repository.

---

# 🧠 Challenges & Problems Solved

During development, several real-world issues were encountered and resolved.

## 1. Clerk Authentication API Difference

Initially, the backend attempted to retrieve the Clerk user ID using:

```js
req.auth.userId
```

This resulted in:

```text
Clerk User ID: undefined
```

The installed version of `@clerk/express` required the authentication function to be called:

```js
const { userId } = req.auth();
```

This fixed authenticated user retrieval across the user controllers.

---

## 2. Axios Error Handling for HTTP 400/401

Axios rejects promises when the server responds with non-2xx status codes.

For example, a backend response such as:

```text
400 Bad Request
```

does not reach:

```js
if (data.success)
```

Instead, it goes directly to:

```js
catch (error)
```

The frontend was updated to display the backend error message:

```js
catch (error) {
  toast.error(
    error.response?.data?.message || "Something went wrong"
  );
}
```

This allowed meaningful messages such as:

```text
You have already applied for this job
```

instead of:

```text
Request failed with status code 400
```

---

## 3. Duplicate Job Applications

Users should not be able to apply to the same job multiple times.

Before creating an application, the backend checks whether an application already exists:

```js
const isAlreadyApplied = await JobApplication.find({
  userId,
  jobId
});
```

If an application already exists, the API returns:

```text
You have already applied for this job
```

---

## 4. Application Status Case Sensitivity

The application status was stored as:

```text
pending
```

while the frontend was checking:

```js
applicant.status === "Pending"
```

Because JavaScript string comparisons are case-sensitive:

```js
"pending" === "Pending"
// false
```

the application action dropdown was not displayed.

The frontend was updated to use the same status values as the backend:

```text
pending
accepted
rejected
```

---

## 5. Cloudinary Signed vs Unsigned Uploads

Cloudinary uploads initially resulted in authorization errors.

The issue was related to the difference between:

```js
cloudinary.uploader.upload()
```

and:

```js
cloudinary.uploader.unsigned_upload()
```

The application was configured to use an unsigned upload preset for the required uploads.

This resolved the Cloudinary upload issue for company images and resumes.

---

## 6. Resume Upload and File Extension

Resume files were uploaded as Cloudinary raw assets.

The generated URL initially did not contain a recognizable file extension, which caused browser behavior where the PDF could be downloaded without an expected `.pdf` filename.

The upload was updated to preserve the original filename and extension when creating the Cloudinary public ID.

---

## 7. React `.map()` Error

The applications/jobs state was initially initialized as:

```js
const [jobs, setJobs] = useState(false);
```

Calling:

```js
jobs.map(...)
```

then caused an error because `false` is not an array.

The state was changed to:

```js
const [jobs, setJobs] = useState([]);
```

This ensures `.map()` can safely be used before API data is loaded.

---

## 8. Array Mutation with `.reverse()`

The application list was initially reversed using:

```js
data.applications.reverse()
```

Since `.reverse()` mutates the original array, it was changed to:

```js
[...data.applications].reverse()
```

This creates a copy before reversing the array.

---

## 9. Vercel Linux Case-Sensitivity Issue

The backend worked locally on Windows but failed after deployment to Vercel.

The problem was a filename/import casing mismatch:

```text
authMIddleware.js
```

vs.

```text
authMiddleware.js
```

Windows is generally case-insensitive, while the Linux environment used by Vercel is case-sensitive.

The import and filename therefore needed to match exactly:

```js
import authMiddleware from "../middlewares/authMiddleware.js";
```

This was an important deployment-specific debugging issue.

---

# 🔄 Application Flow

### Job Seeker Flow

```text
Sign Up / Login
       ↓
Browse Jobs
       ↓
View Job Details
       ↓
Upload Resume
       ↓
Apply for Job
       ↓
Application Stored in MongoDB
       ↓
Recruiter Reviews Application
       ↓
Pending / Accepted / Rejected
```

### Recruiter Flow

```text
Company Registration
       ↓
Upload Company Logo
       ↓
Company Login
       ↓
Create Job
       ↓
Publish Job
       ↓
Receive Applications
       ↓
View Applicant Resume
       ↓
Accept / Reject Application
```

---

# 🔒 Security

The application implements several security practices:

* Password hashing using Bcrypt
* JWT-based recruiter authentication
* Clerk-based user authentication
* Protected API routes
* Environment variables for sensitive credentials
* Authentication middleware
* Server-side validation
* Duplicate application prevention
* Cloudinary-based file storage

---

# 📱 Responsive Design

The frontend is built using Tailwind CSS and supports responsive layouts for:

* Desktop
* Tablet
* Mobile

Responsive utilities are used throughout the application to adapt tables, navigation, job listings, forms, and dashboards to different screen sizes.

---

# 📚 What I Learned

Building this project provided practical experience with:

* Building a complete MERN application
* Designing REST APIs
* React component architecture
* React Context API
* MongoDB and Mongoose
* Authentication with Clerk
* JWT authentication
* Password hashing with Bcrypt
* File uploads with Multer
* Cloudinary integration
* Rich-text editors
* API error handling with Axios
* Protected routes
* Application state management
* Sentry error monitoring
* Environment variable management
* Git and GitHub workflows
* Vercel deployment
* Debugging production-specific issues
* Understanding Linux case-sensitive file systems

---

# 🧪 Local Development

## 1. Clone the repository

```bash
git clone https://github.com/RoshanSharmaCode/Job-Portal.git
```

## 2. Navigate to the project

```bash
cd Job-Portal
```

## 3. Install frontend dependencies

```bash
cd client
npm install
```

## 4. Install backend dependencies

```bash
cd ../server
npm install
```

## 5. Configure environment variables

Create `.env` files for both the frontend and backend and add the required credentials.

## 6. Start the backend

```bash
npm run server
```

## 7. Start the frontend

From the `client` directory:

```bash
npm run dev
```

---

# 👨‍💻 Author

**Roshan Sharma**

Full-Stack / MERN Stack Developer

* GitHub: [RoshanSharmaCode](https://github.com/RoshanSharmaCode)
* LinkedIn: [Roshan Sharma](https://www.linkedin.com/in/roshansharma9379/)

---

# ⭐ If you like this project
