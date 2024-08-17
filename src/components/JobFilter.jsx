/* eslint-disable react/prop-types */
function JobFilter({ tags, setTags }) {
  return (
    <div
      className="bg-light_gray_filter_tablets mb-4 md:mb-0 mx-auto py-4 rounded-md flex flex-row justify-between items-center"
      style={{
        width: "85%",
        height: "auto",
        position: "absolute",
        top: "-28px",
        left: "1%",
        right: "1%",
      }}
    >
      {/* filtered items  */}
      <div className=" w-10/12 px-0 md:px-4 flex items-center flex-wrap">
        {tags.map((tag) => {
          return (
            <div key={tag} className=" inline-block mx-2 my-2">
              <span className="bg-teal-100 text-teal-700 rounded-md font-bold text-sm flex items-center justify-between">
                <span className="mx-2">{tag}</span>
                <svg
                  onClick={(event) => {
                    setTags(() => {
                      const newTags = tags.filter((el) => {
                        return el !== event.target.previousSibling.textContent;
                      });
                      return newTags;
                    });
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="bg-teal-600 rounded-md text-teal-100 hover:bg-teal-900 cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentcolor"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                  />
                </svg>
              </span>
            </div>
          );
        })}
      </div>
      {/* filtered items end  */}
      <p
        onClick={() => setTags([])}
        className="text-xl font-bold text-primary cursor-pointer px-0 md:px-4 w-2/12 text-center"
      >
        clear
      </p>
    </div>
  );
}

export default JobFilter;
