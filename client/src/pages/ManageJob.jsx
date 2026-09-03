import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const ManageJob = () => {
  const navigate = useNavigate();

  const { backendUrl, companyToken } = useContext(AppContext);

  const [jobs, setJobs] = useState([]);

  // function to fetch company job applications data
  const fetchCompanyJobs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/list-jobs", {
        headers: { token: companyToken },
      });

      if (data.success) {
        setJobs(data.jobsData.reverse());
        console.log(data.jobsData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to change job visiblity
  const changeJobVisiblity = async (id) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/change-visiblity",
        { id },
        { headers: { token: companyToken } },
      );

      if (data.success) {
        toast.success(data.message);
        fetchCompanyJobs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobs();
    }
  }, [companyToken]);

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden max-sm:text-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-left max-sm:hidden">#</th>
              <th className="py-3 px-4 text-left">Job Title</th>
              <th className="py-3 px-4 text-left max-sm:hidden">Date</th>
              <th className="py-3 px-4 text-left max-sm:hidden">Location</th>
              <th className="py-3 px-4 text-center">Applicants</th>
              <th className="py-3 px-4 text-left">Visible</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job, index) => (
              <tr
                className="text-gray-700 border-b border-gray-200 last:border-b-0"
                key={index}
              >
                <td className="py-3 px-4 max-sm:hidden">{index + 1}</td>
                <td className="py-3 px-4">{job.title}</td>
                <td className="py-3 px-4 max-sm:hidden">
                  {moment(job.date).format("ll")}
                </td>
                <td className="py-3 px-4 max-sm:hidden">{job.location}</td>
                <td className="py-3 px-4 text-center">{job.applicants}</td>
                <td className="py-3 px-4">
                  <input
                    onChange={() => changeJobVisiblity(job._id)}
                    className="ml-4 w-4 h-4 accent-blue-500 cursor-pointer"
                    type="checkbox"
                    checked={job.visible}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigate("/dashboard/add-job")}
          className="bg-black text-white py-2 px-4 rounded cursor-pointer"
        >
          Add new job
        </button>
      </div>
    </div>
  );
};

export default ManageJob;
