import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJob = () => {
  const navigate = useNavigate();

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
            {manageJobsData.map((job, index) => (
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
                    className="ml-4 w-4 h-4 accent-blue-500 cursor-pointer"
                    type="checkbox"
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
