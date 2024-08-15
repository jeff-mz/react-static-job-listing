import { useState } from "react";
import data from "../assets/data.json";
import { useEffect } from "react";

function JobCard() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(data);
  }, []);
  return (
    <div>
      {!cards.length ? (
        <p>loading...</p>
      ) : (
        <div>
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                className={`bg-light_gray_background p-6 my-12 rounded-lg shadow-md flex flex-col md:flex-row mx-auto ${
                  card.featured && card.new && "border-l-4 border-l-primary"
                } border-amber-200 border`}
                style={{
                  width: "85%",
                }}
              >
                <div className="relative md:static">
                  <img
                    src={card.logo}
                    alt="Company Logo"
                    className="h-16 w-16 mb-2 md:mb-0 rounded-full object-cover custom-logo"
                  />
                  {/* details start */}
                  <div className=" pb-4 border-b-2 border-b-dark_gray md:border-b-0 mt-4">
                    <div className="flex items-center justify-between my-2">
                      <h2 className="text-xl font-semibold text-primary">
                        {card.company}
                      </h2>
                      <div className="flex space-x-2">
                        <span
                          className={`bg-primary  text-light_gray_filter_tablets px-2 py-1 rounded-full text-sm font-medium ${
                            card.new ? "inline" : "hidden"
                          }`}
                        >
                          NEW!
                        </span>
                        <span
                          className={` bg-very_dark_gray text-light_gray_filter_tablets px-2 py-1 rounded-full text-sm font-medium ${
                            card.featured ? "inline" : "hidden"
                          }`}
                        >
                          FEATURED
                        </span>
                      </div>
                    </div>
                    <h3 className="text-very_dark_gray font-bold my-2 ">
                      {card.position}
                    </h3>
                    <div className="">
                      <span className=" text-dark_gray font-bold">
                        {card.postedAt} .
                      </span>
                      <span className=" text-dark_gray font-bold mx-2">
                        {card.contract} .
                      </span>
                      <span className=" text-dark_gray font-bold">
                        {card.location}
                      </span>
                    </div>
                  </div>
                  {/* details end */}
                </div>

                {/* requirements start */}
                <div className="flex flex-wrap mt-2" style={{ width: "250px" }}>
                  {card.requirements.map((requirement) => {
                    return (
                      <div key={card.id} className="my-4 me-4">
                        <span className="bg-teal-100 text-teal-700 px-2 py-2 rounded-md font-bold text-sm">
                          {requirement}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {/* requirements end */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default JobCard;
