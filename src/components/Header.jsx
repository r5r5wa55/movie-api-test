import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [showBar, setShowBar] = useState(true);


  return (
    <div className="bg-blue-500">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between sm:grid sm:grid-cols-3 p-6 sm:p-5 items-center gap-2 ">
          <div className="text-3xl font-extrabold text-white">Logo</div>
          <div className="flex bg-white items-center rounded-lg max-w-2xl">
            <input
              type="text"
              placeholder="Search..."
              className="pl-2 pr-1 py-1 outline-none rounded-lg sm:w-full  "
            />
            <FaSearch className="text-xl mr-1 text-blue-400" />
          </div>
          <div className="hidden gap-5 text-lg font-semibold text-white sm:flex items-end  justify-end">
            <Link to="/">
              <h1 className="">Home</h1>
            </Link>
            <Link to="/about">
              <h1 className="">About</h1>
            </Link>
            <Link to="/content">
              <h1 className="">Content</h1>
            </Link>
          </div>
          {showBar ? (
            <div className="">
              <FaBars
                className="cursor-pointer text-2xl text-white inline sm:hidden"
                onClick={() => setShowBar(!showBar)}
              />
            </div>
          ) : (
            <div className="">
              <FaTimes
                className="cursor-pointer text-2xl text-white  inline sm:hidden"
                onClick={() => setShowBar(!showBar)}
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={
          !showBar
            ? "fixed bg-blue-500 opacity-95 h-full w-[60%] top-0 sm:hidden ease-in-out duration-700 left-0"
            : "fixed bg-blue-500 opacity-95 h-full w-[60%] top-0 sm:hidden ease-in-out duration-700 left-[-100%]"
        } >
          <div className="m-5">
            <h1 className="text-3xl font-extrabold text-white">Logo</h1>
            <div className="mx-5 my-10 text-white">
            <Link to="/">
              <h1 className="my-3">Home</h1>
            </Link>
            <Link to="/about">
              <h1 className="my-3">About</h1>
            </Link>
            <Link to="/content">
              <h1 className="my-3">Content</h1>
            </Link>
            </div>
          </div>
        </div>
    </div>
  );
}
