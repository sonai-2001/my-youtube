import React from "react";
import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const menuOpen = useSelector((store) => store.toggle.isMenuOpen);
  console.log(menuOpen);
  return (
    <div
      className={`  ${menuOpen ? "w-[100vw]" : "w-[92vw]"} md:${
        menuOpen ? "w-[85vw]" : "w-[94vw] "
      } h-[90vh]`}
    >
      <ButtonList/>
      <VideoContainer/>
    </div>
  );
};

export default MainContainer;
