import React from "react";
import currencyIcon from "../Images/currency-icon.png";
import busRoute from "../Images/bus-going-blue.png";

const BusDetails = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bus-list-container my-4">
      <div className="w-full md:w-9/12 p-2">
        <div className="flex">
          <div className="py-1 px-4 w-full md:w-4/12">
            <h2 className="text-sm font-medium">AC</h2>
          </div>
          <div className="py-1 px-4 w-full md:w-4/12 text-center">
            <h2 className="text-lg font-medium">Hanif Enterprize</h2>
            <p className="text-base uppercase">31-dhk-ctg(d)</p>
          </div>
          <div className="py-1 px-4 w-full md:w-4/12 flex space-x-2 justify-end">
            <img class="h-6 w-auto" src={currencyIcon} alt="User Menu" />
            <h2 className="text-sm font-medium mt-1">55</h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="py-1 px-4 w-full md:w-4/12 my-auto text-center md:text-left">
            <span className="text-xs text-gray-800">From</span>
            <h2 className="text-base  font-semibold ">
              Dhaka <span className="font-bold">11:30 PM</span>
            </h2>
            <p className="text-sm text-gray-800 font-medium ">
              Kolabagan Counter
            </p>
            <p className="text-xs text-gray-800 font-medium ">22 June 2021</p>
          </div>

          <div className="py-1 px-4 w-full md:w-4/12 text-center my-auto mt-4 md:mt-0">
            <img class="w-48 h-auto mx-auto" src={busRoute} alt="User Menu" />
            <span className="text-sm st-text-orange font-medium">
              16 Seats Available
            </span>
            <h2 className="text-xs font-semibold ">6h 00m</h2>
          </div>

          <div className="py-1 px-4 w-full md:w-4/12 my-auto text-center md:text-left mt-4 md:mt-0">
            <span className="text-xs text-gray-800">To</span>
            <h2 className="text-base  font-semibold ">
              CHOTTOGRAM <span className="font-bold">05:30 AM</span>
            </h2>
            <p className="text-sm text-gray-800 font-medium ">
              Dampara Counter
            </p>
            <p className="text-xs text-gray-800 font-medium ">23 June 2021</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/12 flex space-x-1 st-bg-blue-3 p-4">
        <div className="text-center md:text-right w-full p-2 my-auto">
          <span className="text-xs font-medium">Per Person</span>
          <h2 className="text-2xl text-blue-800 font-semibold ">BDT 750</h2>
          <p className="text-base text-blue-600 font-medium ">BDT 775</p>
          <button
            type="button"
            className="mt-3 st-primary-bg py-2 px-4 shadow-lg hover:opacity-80 rounded text-white uppercase text-sm font-medium"
          >
            View Seats
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
