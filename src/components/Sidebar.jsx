import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toggle.isMenuOpen);
  const demo = useLocation();
  console.log(demo.pathname.includes("watch"));
  console.log(isMenuOpen);
  if (!isMenuOpen) {
    return (
      <div
        className={`w-[8vw] md:w-[6vw] h-[90vh] bg-white shadow-xl px-5  ${
          demo.pathname.includes("watch") ? "hidden" : ""
        } md:block`}
      >
        <Link to="/">
          <div className="flex flex-col items-center mb-3 md:mt-8">
            <i className="ri-home-4-fill text-xl"></i>
            <h4 className=" text-[7px] md:text-[10px]">Home</h4>
          </div>
        </Link>
        <div className="flex flex-col items-center mb-3 ">
          <i className="ri-file-video-line text-xl"></i>
          <h4 className=" text-[7px] md:text-[10px]">Shorts</h4>
        </div>
        <div className="flex flex-col items-center mb-3 ">
          <i className="ri-sticky-note-add-line text-xl"></i>
          <h4 className="text-[6px] md:text-[10px]">Subscriptions</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="md:w-[15vw] absolute sm:static h-[90vh] shadow-2xl bg-white">
      <Link to="/">
        <div className="px-5 py-3 flex gap-4 items-center  bg-zinc-100 hover:bg-zinc-200 ">
          <i className="ri-home-4-fill text-xl"></i>
          <h2>Home</h2>
        </div>
      </Link>

      <div className="px-5 py-3 flex gap-4 items-center my-4 bg-zinc-100 hover:bg-zinc-200 ">
        <i className="ri-file-video-line text-xl"></i>
        <h2>Shorts</h2>
      </div>

      <div className="px-5 py-3 flex gap-4 items-center my-4 bg-zinc-100 hover:bg-zinc-200 ">
        <i className="ri-sticky-note-add-line text-xl"></i>
        <h2>Subscriptions</h2>
      </div>
    </div>
  );
};

export default Sidebar;
