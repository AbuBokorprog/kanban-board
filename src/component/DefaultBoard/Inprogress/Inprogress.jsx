import React from "react";
import { FaCircle, FaPlus } from "react-icons/fa6";
import { RxBorderDotted } from "react-icons/rx";
import { TbCircleDotted } from "react-icons/tb";

const Inprogress = ({ inProgress, user }) => {
  return (
    <div>
      <div className="flex items-center gap-20 justify-between">
        <div className="flex gap-2 items-center">
          <TbCircleDotted />
          In Progress {inProgress.length}
        </div>
        <div className="flex gap-2 items-center">
          <FaPlus />
          <RxBorderDotted />
        </div>
      </div>
      {inProgress.map((b) => (
        <div key={b.id} className="card my-6 w-60 bg-white shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="card-title">{b.id}</h2>
              </div>
              <div>
                {b.userId == user[0]?.id ? (
                  <div className="relative">
                    <p className="bg-red-500 text-center rounded-full p-1 text-[10px] w-6 h-6">
                      <small>AS</small>
                    </p>
                    {user[0]?.available == true ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full absolute left-[18px] bottom-0"></div>
                    ) : (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-[18px] bottom-0"></div>
                    )}
                  </div>
                ) : b.userId == user[1]?.id ? (
                  <div className="relative">
                    <p className="bg-red-500 rounded-full text-center p-1 text-[10px] w-6 h-6">
                      <small>Y</small>
                    </p>
                    {user[1]?.available == true ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full absolute left-[18px] bottom-0"></div>
                    ) : (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-[18px] bottom-0"></div>
                    )}
                  </div>
                ) : b.userId == user[2]?.id ? (
                  <div className="relative">
                    <p className="bg-red-500 text-center rounded-full p-1 text-[10px] w-6 h-6">
                      <small>SK</small>
                    </p>
                    {user[2]?.available == true ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full absolute left-[18px] bottom-0"></div>
                    ) : (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-[18px] bottom-0"></div>
                    )}
                  </div>
                ) : b?.userId == user[3]?.id ? (
                  <div className="relative">
                    <p className="bg-red-500 rounded-full text-center px-1 text-[10px] w-6 h-6">
                      <small>R</small>
                    </p>
                    {user[3]?.available == true ? (
                      <div className="w-2 h-2 bg-green-500 rounded-full absolute left-[18px] bottom-0"></div>
                    ) : (
                      <div className="w-2 h-2 bg-yellow-500 rounded-full absolute left-[18px] bottom-0"></div>
                    )}
                  </div>
                ) : b?.userId == user[4]?.id ? (
                  <div className="relative">
                    <div className="bg-red-500 rounded-full text-center px-1 text-[10px] w-6 h-6">
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
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="icon border w-6 h-6 text-orange-500"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="icon border w-6 h-6"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
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

export default Inprogress;
