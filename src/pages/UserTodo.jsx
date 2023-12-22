import React from "react";
import { FaPlus } from "react-icons/fa6";
import { RxBorderDotted } from "react-icons/rx";

const UserTodo = ({ user, data }) => {
  //   console.log(data);
  return (
    <div className="flex items-start justify-between p-4">
      {user.map((u) => (
        <div key={u.id} className="flex items-center gap-20 justify-between">
          <div className="flex gap-2 items-center">
            <div></div>
            <div>{u.name}</div>
          </div>
          <div className="flex gap-2 items-center">
            <FaPlus />
            <RxBorderDotted />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTodo;
