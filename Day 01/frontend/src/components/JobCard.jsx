import React from "react";
import { Bookmark } from "lucide-react";

const JobCard = ({
  company,
  role,
  location,
  skills,
  salary,
  level,
  type,
  status,
  posted,
  logo,
}) => {
  return (
    <div className="flex text-black h-full p-4 bg-gray-100">
      <div className=" w-96 h-96 bg-white shadow-2xl p-4 rounded-2xl">
        {/* top */}
        <div className="flex justify-between items-center">
          <img
            src={logo}
            alt="logo"
            className="rounded-full w-12 h-12 border border-gray-700 p-1"
          />
          <span className="flex px-2 py-1 text-gray-500 border border-gray-700 h-8 rounded-xl cursor-pointer">
            Save <Bookmark className="w-5 h-5" />
          </span>
        </div>
        {/* center */}
        <div className="pt-6">
          <h2 className="font-semibold text-xl">
            {company} <span className="text-xs text-gray-600">{posted}</span>
          </h2>
          <h1 className="pt-2 text-2xl font-bold">{role}</h1>
          <div className="flex pt-2 items-center gap-1">
            <span className="bg-gray-300 px-2 py-1 rounded-xl text-sm ">
              {type}
            </span>
            <span className="bg-gray-300 px-2 py-1 rounded-xl text-sm ">
              {level}
            </span>
          </div>
        </div>
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs bg-gray-100 rounded-lg">
              {skill}
            </span>
          ))}
        </div>

        {/* footer */}
        <div className="mt-16">
          <hr className="my-6 border-gray-300" />
          <div className="flex justify-between">
            <div>
              <p className="text-xl">{salary}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-500">{location}</span>

                <span
                  className={`px-2 py-1 text-xs rounded-full ${status === "Hiring" ? "bg-green-100 text-green-700" : status === "Closed" ? "bg-red-100 text-red-700" : status === "Open" ? "bg-blue-200 text-blue-700" : "bg-yellow-100 text-yellow-700"} `}>
                  {status}
                </span>
              </div>
            </div>
            <button className="h-11 px-4 bg-black text-white rounded-xl">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
