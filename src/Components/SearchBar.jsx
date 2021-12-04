import React from "react";
import busGoing from "../Images/bus-going.png";
import busReturn from "../Images/bus-return.png";
import directon from "../Images/directon.png";

const SearchBar = () => {
  return (
    <div className="lg:fixed w-screen py-2 px-0 md:px-2 st-blue-bg search-bar">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-center lg:text-left justify-between">
        <div className="st-light-blue-bg-1 rounded-md py-3 px-5 flex space-x-4 h-28">
          <div className="my-auto">
            <img class="block w-12 h-auto" src={busGoing} alt="Workflow" />
          </div>
          <div className="text-left text-white my-auto">
            <p className="text-sm text-gray-300">Onward Journey</p>
            <h3 className="text-xl font-semibold">Dhaka - Chottogram</h3>
            <p className="text-xs font-medium text-gray-200">
              22 June, 2021 (Tuesday)
            </p>
          </div>
        </div>

        <div className="my-auto hidden md:block mx-2">
          <img class="block w-12 h-auto" src={directon} alt="Workflow" />
        </div>

        <div className="rounded-md py-3 px-5 flex space-x-4 h-28 opacity-70">
          <div className="my-auto">
            <img class="block w-12 h-auto" src={busReturn} alt="Workflow" />
          </div>
          <div className="text-left text-white my-auto">
            <p className="text-sm">Return Journey</p>
            <h3 className="text-xl font-semibold">Chottogram - Dhaka</h3>
            <p className="text-xs font-medium">24 June, 2021 (Thursday)</p>
          </div>
        </div>

        <div className="my-auto">
          <button
            type="button"
            className="st-primary-bg py-2 px-4 md:py-3 md:px-5 shadow-lg hover:opacity-80 rounded text-white uppercase text-xs md:text-sm md:font-medium"
          >
            Modify Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
