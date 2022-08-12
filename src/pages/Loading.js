import React from "react";
import ReactLoading from "react-loading";

function Loading() {
  return (
    <div className="min-h-screen flex bg-slate-100 justify-center items-center w-full">
      <ReactLoading type={"cubes"} color={"#ffffff"} height={667} width={375} />
    </div>
  );
}

export default Loading;
