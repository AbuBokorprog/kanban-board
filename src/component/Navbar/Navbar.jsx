import { RxMixerHorizontal } from "react-icons/rx";
import { IoMoon } from "react-icons/io5";

import { IoIosArrowUp } from "react-icons/io";
import { useRef } from "react";

const Navbar = ({ onSorting, onGrouping }) => {
  let icon = useRef();

  const handleGrouping = (value) => {
    if (onGrouping) {
      onGrouping(value);
    }
  };

  const handleSortingChange = (order) => {
    if (onSorting) {
      onSorting(order);
    }
  };

  return (
    <div className="bg-white w-full h-full border-b-2 px-4">
      <div className="flex justify-between items-center">
        <div>
          <details className="dropdown bg-white shadow-lg">
            <summary className="m-1 btn">
              <RxMixerHorizontal />
              Display <IoIosArrowUp />
            </summary>
            <div className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64">
              <div className="flex gap-20 justify-between items-center">
                <p className="text-gray-400">Grouping</p>
                <select
                  name="grouping"
                  className="select select-bordered h-4 w-full"
                  id=""
                  onChange={(e) => handleGrouping(e.target.value)}
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="flex my-2 gap-20 items-center">
                <p className="text-gray-400">Ordering</p>
                <select
                  name="grouping"
                  className="select select-bordered h-4 w-full"
                  id=""
                  onChange={(e) => handleSortingChange(e.target.value)}
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </details>
        </div>
        <div>
          <IoMoon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
