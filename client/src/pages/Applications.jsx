import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
                  Select Resume
                </p>
                <input
                  id="resumeUpload"
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="application/pdf"
                  type="file"
                />
                <img src={assets.profile_upload_icon} alt="" />
              </label>
              <button
                onClick={(e) => setIsEdit(false)}
                className="bg-green-100 border border-green-400 rounded-lg px-4 py-2 cursor-pointer"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
                href=""
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-500 border border-gray-300 rounded-lg px-4 py-2 cursor-pointer"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 border-gray-300">
                Company
              </th>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 border-gray-300">
                Job Title
              </th>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 border-gray-300 max-sm:hidden">
                Location
              </th>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 border-gray-300 max-sm:hidden">
                Date
              </th>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-gray-700 border-gray-300">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 flex items-center gap-2 border-b border-gray-300 text-sm font-medium text-gray-900">
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src={job.logo}
                    alt={`${job.company} logo`}
                  />
                  {job.company}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-600">
                  {job.title}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-600 max-sm:hidden">
                  {job.location}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-600 max-sm:hidden">
                  {moment(job.date).format("ll")}
                </td>
                <td className="py-3 px-4 border-b border-gray-300 text-sm">
                  <span
                    className={`px-2.5 py-1 rounded text-xs font-medium ${
                      job.status === "Accepted"
                        ? "bg-green-100 text-green-800"
                        : job.status === "Rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Applications;
