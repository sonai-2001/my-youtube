import React from "react";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  //   use watch search param for find the search param value

  const searchparam = useSearchParams();
  console.log(searchparam);
  const [urlSearchParam] = searchparam;
  console.log(urlSearchParam.get("v"));
  const watchId = urlSearchParam.get("v");
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+watchId}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
