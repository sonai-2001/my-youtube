import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/sideToggleSlice";
import { search_api } from "../utils/constants";
const Header = () => {
  // this for input value store
  const [search, setSearch] = useState("");
  const[listEnable,setListEnable]=useState(false)

  const [searchItems, setSearchItems] = useState(null);
  useEffect(() => {
    // this getItem will bring the data
    const timer = setTimeout(() => {
      getItem();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);
  const dispatch = useDispatch();
  const handleHambergerMenu = () => {
    dispatch(toggleSideBar());
  };
  // it is the function that call inside useEffect..
  const getItem = async () => {
    const raw = await fetch(search_api + search);
    const data = await raw.json();
    console.log(data.items);
    setSearchItems(data.items);
  };
  return (
    <div className="h-[10vh] px-2  py-1 flex items-center justify-between">
      {/* logo and hamberger menu */}
      <div className="flex items-center">
        <img
          onClick={handleHambergerMenu}
          className="h-4 cursor-pointer md:h-8"
          src="ham.png"
          alt=""
        />
        <a href="/">
          {" "}
          <img
            className="h-10 md:h-14 object-cover"
            src="youtube-logo.png"
            alt="youtube"
          />
        </a>
      </div>
      {/* search bar */}
      <div className="relative">
        <input
          placeholder="search here"
          className=" outline-none border-[1px] border-r-none border-black text-center w-[30vw] rounded-l-full"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onBlur={()=>setListEnable(false)}
          onFocus={()=>{setListEnable(true)}}
        />
        <button className="border-[1px] border-l-0  border-black rounded-r-full px-[5px]  md:px-1">
          search
        </button>
        {/* search result div */}
        <div className="absolute overflow-y-auto bottom-100px w-full bg-white max-h-[20vh] md:max-h-[40vh] z-30 border border-zinc-400 rounded-md">
          {listEnable && searchItems &&
            searchItems.map((items, index) => {
              return (
                <div className="my-2 px-2 py-1 bg-zinc-100 hover:bg-zinc-200 flex items-center justify-between">
                  <h3 className="text-xs md:text-sm w-[75%]">title</h3>
                  <img
                    className="w-[50px] h-[50px] rounded-md object-cover"
                    src="https://i.ytimg.com/vi/LWlP4MeoXFs/default.jpg"
                    alt="img"
                  />
                </div>
              );
            })}
        </div>
      </div>
      {/* user */}
      <div>
        <img className="h-8" src="user.png" alt="user" />
      </div>
    </div>
  );
};

export default Header;
