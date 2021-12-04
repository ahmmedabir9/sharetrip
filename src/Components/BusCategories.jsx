import React from "react";
import dimond from "../Images/dimond-icon.png";
import coin from "../Images/coin-icon.png";
import thunder from "../Images/thunder-icon.png";

const BusCategories = () => {
  return (
    <div className="w-full flex justify-between bus-list-container mt-2">
      <div className="py-1 px-4 lg:w-3/12 flex flex-col md:flex-row justify-center md:justify-start space-x-1 ">
        <div className="my-auto mx-auto md:mx-0">
          <img class="block w-8 h-auto" src={dimond} alt="Workflow" />
        </div>
        <div className="text-center md:text-left my-auto">
          <p className="text-xs md:text-sm font-medium">Earliest Buses</p>
        </div>
      </div>
      <div className="py-1 st-bg-blue-2 px-4 lg:w-3/12 flex flex-col md:flex-row justify-center md:justify-start space-x-1 ">
        <div className="my-auto mx-auto md:mx-0">
          <img class="block w-8 h-auto" src={coin} alt="Workflow" />
        </div>
        <div className="text-center md:text-left text-white my-auto">
          <p className="text-xs md:text-sm font-medium">Cheapest Buses</p>
        </div>
      </div>
      <div className="py-1 px-4 lg:w-3/12 flex flex-col md:flex-row justify-center md:justify-start space-x-1 ">
        <div className="my-auto mx-auto md:mx-0">
          <img class="block w-8 h-auto" src={thunder} alt="Workflow" />
        </div>
        <div className="text-center md:text-left my-auto">
          <p className="text-xs md:text-sm font-medium">Available Seats</p>
        </div>
      </div>
      <div className="py-1 px-4 lg:w-3/12 flex flex-col md:flex-row justify-center md:justify-start space-x-1 ">
        <div className="my-auto mx-auto md:mx-0">
          <img class="block w-8 h-auto" src={thunder} alt="Workflow" />
        </div>
        <div className="text-center md:text-left my-auto">
          <p className="text-xs md:text-sm font-medium">Fastest Trip</p>
        </div>
      </div>
    </div>
  );
};

export default BusCategories;
