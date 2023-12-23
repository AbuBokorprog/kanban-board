import React from "react";
import { FaCircle, FaPlus } from "react-icons/fa6";
import { RxBorderDotted } from "react-icons/rx";

const Medium = ({ data, user }) => {
  return (
    <div>
      <div className="flex items-center gap-20 justify-between">
        <div className="flex gap-2 items-center">
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
          Medium
        </div>
        <div className="flex gap-2 items-center">
          <FaPlus />
          <RxBorderDotted />
        </div>
      </div>
      {data.map((b) => (
        <div key={b.id} className="card my-6 w-60 bg-white shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="card-title">{b.id}</h2>
              </div>
              <div>
                {b.userId == user[0]?.id ? (
                  <div className="relative">
                    <p className="bg-red-500 text-[10px] text-center rounded-full p-1 w-6 h-6">
                      AS
                    </p>
                    {user[0]?.available == "true" ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full absolute left-[18px] bottom-0"></div>
                    ) : (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-[18px] bottom-0"></div>
                    )}
                  </div>
                ) : b.userId == user[1]?.id ? (
                  <div className="relative">
                    <p className="bg-red-500 text-[10px] text-center rounded-full p-1 w-6 h-6">
                      Y
                    </p>
                    {user[1]?.available == "true" ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full absolute left-[18px] bottom-0"></div>
                    ) : (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-[18px] bottom-0"></div>
                    )}
                  </div>
                ) : b.userId == user[2]?.id ? (
                  <div className="relative">
                    <p className="bg-blue-500 text-[10px] text-center rounded-full p-1 w-6 h-6">
                      SK
                    </p>
                    {user[2]?.available == true ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full absolute left-[18px] bottom-0"></div>
                    ) : (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-[18px] bottom-0"></div>
                    )}
                  </div>
                ) : b?.userId == user[3]?.id ? (
                  <div className="relative">
                    <p className="bg-green-500 text-[12px] rounded-full text-center px-1 w-6 h-6">
                      R
                    </p>
                    {user[3]?.available == true ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full absolute left-[18px] bottom-0"></div>
                    ) : (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-[18px] bottom-0"></div>
                    )}
                  </div>
                ) : b?.userId == user[4]?.id ? (
                  <div className="relative">
                    <div className="bg-yellow-500 text-[10px] rounded-full text-center px-1 w-6 h-6">
                      S
                    </div>
                    {user[4]?.available == true ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full absolute left-[18px] bottom-0"></div>
                    ) : (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-[18px] bottom-0"></div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <p>{b.title}</p>
            <div className="flex items-center gap-1">
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

export default Medium;
