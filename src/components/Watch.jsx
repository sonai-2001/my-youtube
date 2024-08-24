import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { comment_api, videoUrl } from "../utils/constants";
import Comment from "./Comment";

const Watch = () => {
  const demo = useSearchParams();
  console.log(demo[0].get("v"));
  const videoId = demo[0].get("v");
  const [collapse, setCollapse] = useState(true);

  const [comments, setComments] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const raw = await fetch(comment_api + videoId);
      const data = await raw.json();

      setComments(data.items);
    };
    getData();
  }, []);
  return (
    <div className="w-[100vw] md:w-[94vw] h-[90vh]  md:h-[90vh]  overflow-y-auto p-6 pl-8 ">
      <div className="flex-col">
        <iframe
          className=" w-[100%] md:w-[50vw] h-[40vh] md:h-[60vh] rounded-md"
          src={videoUrl + videoId + "?autoplay=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;fullscreen"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div
          onClick={() => setCollapse(false)}
          className={`w-full rounded-full block ${collapse?"":"hidden"} md:hidden bg-sky-200 shadow-md text-center mt-4 hover:bg-sky-400`}
        >
          See Comments..
        </div>

        {/* comment section */}
        <div
          className={`w-[100%] md:w-[50vw] ${
            collapse ? "hidden" : ""
          } md:block  md:static  p-3 overflow-hidden   rounded-md mt-4 relative`}
        >
          <span
          onClick={()=>setCollapse(true)}
          className="absolute top-2 right-0 md:hidden mr-2">
          <i className="ri-close-large-line text-lg"></i>
          </span>
          <h1 className="text-xl font-semibold">
            {comments && comments.length} Comments:
          </h1>
          {comments ? (
            comments.map((c, index) => {
              return <Comment details={c} key={c.id} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watch;
