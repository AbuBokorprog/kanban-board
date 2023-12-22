import React from "react";
import { FaCircle, FaPlus } from "react-icons/fa6";
import { RxBorderDotted } from "react-icons/rx";
import { TbCircleDotted } from "react-icons/tb";

const Cancelled = (props) => {
  return (
    <div>
      <div className="flex items-center gap-20 justify-between">
        <div className="flex gap-2 items-center">
          <TbCircleDotted />
          Cancelled {props.cancelled.length}
        </div>
        <div className="flex gap-2 items-center">
          <FaPlus />
          <RxBorderDotted />
        </div>
      </div>
      {props.cancelled.map((b) => (
        <div key={b.id} className="card my-6 w-60 bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{b.id}</h2>
            <p>{b.title}</p>
            <div className="flex items-center gap-1">
              {b.priority == 1 ? (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon border w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 20h.01"></path>
                </svg>
              ) : b.priority == 2 ? (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon border w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 20h.01"></path>
                  <path d="M7 20v-4"></path>
                </svg>
              ) : b.priority == 3 ? (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon border w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 20h.01"></path>
                  <path d="M7 20v-4"></path>
                  <path d="M12 20v-8"></path>
                </svg>
              ) : b.priority == 4 ? (
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon border w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 20h.01"></path>
                  <path d="M7 20v-4"></path>
                  <path d="M12 20v-8"></path>
                  <path d="M17 20v-12"></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style="color: gray;"
                >
                  <path d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"></path>
                </svg>
              )}
              <div className="flex border justify-between items-center">
                <FaCircle className="w-3 h-3 text-gray-400" />
                {b.tag[0]}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cancelled;
