import React from "react";
import JobCard from "./components/JobCard";
import jobs from "./data/jobs";

const App = () => {
  return (
    <div className="flex flex-wrap">
      {jobs.map((job) => (
        // <JobCard
        //   key={job.id}
        //   company={job.company}
        //   role={job.role}
        //   location={job.location}
        //   salary={job.salary}
        //   level={job.level}
        //   type={job.type}
        //   status={job.status}
        //   posted={job.posted}
        //   skills={job.skills}
        //   logo={job.logo}
        // />
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default App;
