import React, { useRef } from "react";
import backward from "../Images/backward.png";
import forward from "../Images/forward.png";

const List = [
  {
    name: "Hanif Enterprize",
    busses: 40,
  },
  {
    name: "Shohag Paribahan",
    busses: 40,
  },
  {
    name: "Ena Transport (Pvt) Ltd.",
    busses: 40,
  },
  {
    name: "Saintmartin Travels",
    busses: 40,
  },
  {
    name: "Soudia Coach Service",
    busses: 40,
  },
  {
    name: "Saintmartin Hyundai",
    busses: 40,
  },
  {
    name: "Hanif Enterprize",
    busses: 40,
  },
  {
    name: "Shohag Paribahan",
    busses: 40,
  },
  {
    name: "Ena Transport (Pvt) Ltd.",
    busses: 40,
  },
  {
    name: "Saintmartin Travels",
    busses: 40,
  },
  {
    name: "Soudia Coach Service",
    busses: 40,
  },
  {
    name: "Saintmartin Hyundai",
    busses: 40,
  },
];

const BusList = () => {
  const busesRef = useRef(null);

  const scroll = (scrollOffset) => {
    busesRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="w-full flex justify-between bus-list-container mt-4">
      <div className="flex w-11 justify-center border-r border-gray-200">
        <button onClick={() => scroll(-300)}>
          <img class="block w-4 h-auto my-auto" src={backward} alt="Workflow" />
        </button>
      </div>
      <div
        className="flex-grow bus-list overflow-x-auto flex justify-between"
        ref={busesRef}
      >
        {List.map((item, index) => (
          <div className="py-1 px-2 bus-item h-full border-r border-gray-200">
            <h2 className="text-sm font-medium">{item.name}</h2>
            <p className="text-xs">{item.busses} Buses</p>
          </div>
        ))}
      </div>
      <div className="flex w-11 justify-center">
        <button onClick={() => scroll(300)}>
          <img class="block w-4 h-auto my-auto" src={forward} alt="Workflow" />
        </button>
      </div>
    </div>
  );
};

export default BusList;
