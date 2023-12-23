import { RxMixerHorizontal } from "react-icons/rx";
import { IoMoon } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ onSorting, onGrouping }) => {
  const [isDropdown, setIsDropdown] = useState(false);
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

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const dropdownHandler = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <div className={` w-full h-full border-b-2 px-4`}>
      <div className="flex justify-between items-center">
        <div>
          <details className="dropdown  shadow-lg" onClick={dropdownHandler}>
            <summary className="m-1 btn ">
              <RxMixerHorizontal />
              Display {isDropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}
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
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate w-12 h-12">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />
              <MdSunny className="w-8 h-8 swap-on" />
              <IoMoon className="w-8 h-8 swap-off" />
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
