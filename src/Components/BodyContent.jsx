import React, { useRef } from "react";
import BusCategories from "./BusCategories";
import BusDetails from "./BusDetails";
import BusList from "./BusList";

const BodyContent = () => {
  return (
    <div className="body-content h-min max-w-7xl mx-auto flex flex-wrap justify-center mt-4 px-2">
      <div className="w-full hidden md:block md:w-3/12">
        <div className="bg-gray-200 h-screen rounded-md"></div>
      </div>
      <div className="w-full md:w-9/12 p-0 md:pl-4">
        <h2 className="font-medium">48 Available Buses</h2>

        <BusList />
        <BusCategories />
        <BusDetails />
      </div>
    </div>
  );
};

export default BodyContent;
