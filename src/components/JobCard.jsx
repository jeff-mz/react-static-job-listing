/* eslint-disable react/prop-types */
function JobCard({ job, setTags, tags }) {
  const clickHandler = (event) => {
    !tags.includes(event) &&
      setTags((prevState) => {
        return [...prevState, event];
      });
  };

  return (
    <div
      // key={job.id}
      className={`bg-light_gray_background p-6 my-12 rounded-lg shadow-md flex flex-col lg:flex-row lg:items-center lg:justify-between mx-auto ${
        job.featured && job.new && "border-l-4 border-l-primary"
      }`}
      style={{
        width: "85%",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <div className="relative lg:static flex flex-col items-start lg:flex-row lg:justify-center lg:items-center">
        <img
          src={job.logo}
          alt="Company Logo"
          className="h-16 w-16 mb-2 lg:mb-0 rounded-full object-cover lg:me-4 custom-logo"
        />
        {/* details start */}
        <div className=" pb-4 border-b-2 border-b-gray-300 lg:border-b-0 mt-4">
          <div className="flex items-center justify-between my-2">
            <h2 className="text-xl font-semibold text-primary me-2">
              {job.company}
            </h2>
            <div className="flex space-x-2">
              <span
                className={`bg-primary  text-light_gray_filter_tablets px-2 py-1 rounded-full text-sm font-medium ${
                  job.new ? "inline" : "hidden"
                }`}
              >
                NEW!
              </span>
              <span
                className={` bg-very_dark_gray text-light_gray_filter_tablets px-2 py-1 rounded-full text-sm font-medium ${
                  job.featured ? "inline" : "hidden"
                }`}
              >
                FEATURED
              </span>
            </div>
          </div>
          <h3 className="text-very_dark_gray hover:text-primary cursor-pointer font-bold my-2 lg:my-0">
            {job.position}
          </h3>
          <div className="">
            <span className=" text-dark_gray font-bold">{job.postedAt} .</span>
            <span className=" text-dark_gray font-bold mx-2">
              {job.contract} .
            </span>
            <span className=" text-dark_gray font-bold">{job.location}</span>
          </div>
        </div>
        {/* details end */}
      </div>

      {/* requirements start */}
      <div className="flex flex-wrap mt-2" style={{ maxWidth: "450px" }}>
        {job.requirements.map((requirement) => {
          return (
            <div key={Math.random()} className="my-4 lg:my-0 me-4">
              <span
                onClick={() => clickHandler(requirement)}
                className="bg-teal-100 text-teal-700 px-2 py-2 rounded-md font-bold text-sm cursor-pointer hover:bg-teal-700 hover:text-teal-100"
              >
                {requirement}
              </span>
            </div>
          );
        })}
      </div>
      {/* requirements end */}
    </div>
  );
}

export default JobCard;
