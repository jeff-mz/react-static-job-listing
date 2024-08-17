import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import JobFilter from "./JobFilter";
import data from "../assets/data.json";

function JobList() {
  const [tags, setTags] = useState([]);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    if (tags.length) {
      setJobs([]);
      data.map((job) => {
        job.requirements.forEach((element) => {
          if (tags.includes(element)) {
            setJobs((prevState) => {
              return [...prevState, job];
            });
          }
        });
      });
    } else {
      setJobs(data);
    }
  }, [tags]);

  return (
    <div className="bg-light_gray_background py-12 relative">
      {tags.length > 0 && <JobFilter tags={tags} setTags={setTags} />}
      {!jobs.length ? (
        <p>Loading...</p>
      ) : (
        <div>
          {jobs.map((job) => {
            return (
              <JobCard job={job} key={job.id} setTags={setTags} tags={tags} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default JobList;
