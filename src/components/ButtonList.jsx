import React from "react";
import Button from "./Button";
import "../css/btnlist.css";

const ButtonList = () => {
  const btn = ["All", "Comedy", "Drama", "Sports", "Cricket", "FootBall"];
  return (
    <div className=" px-10 md:px-3 flex md:justify-center justify-evenly w-[80%] mx-auto md:w-full overflow-x-auto no-scrollbar">
      {btn.map((b, ind) => {
        return <Button key={ind} name={b} />;
      })}
    </div>
  );
};

export default ButtonList;
