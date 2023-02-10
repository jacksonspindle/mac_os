import React from "react";
import trap from "./images/trap.png";

const News = () => {
  return (
    <div>
      <div>News</div>
      <img
        width={"100%"}
        style={{ borderRadius: "1rem", overflowY: "scroll" }}
        src={trap}
      ></img>
    </div>
  );
};

export default News;
