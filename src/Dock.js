import React, { useState } from "react";
import finderIcon from "./images/finderIcon.png";
import newsIcon from "./images/notesIcon.png";
import photosIcon from "./images/photosIcon.png";
import closetIcon from "./images/closetIcon.png";
import { motion } from "framer-motion";

const Dock = ({ stateChanger, ...popup }) => {
  console.log(popup.state);
  return (
    <div className="dock-container">
      <div className="dock">
        <motion.img
          initial={{ y: 0 }}
          //   animate={{ y: -50 }}
          whileHover={{ y: -30 }}
          src={finderIcon}
        ></motion.img>
        <motion.img
          whileHover={{ y: -30 }}
          src={newsIcon}
          onClick={() => {
            stateChanger((prevState) => {
              console.log(popup.state.news);
              return { ...prevState, news: !popup.state.news };
            });
          }}
        ></motion.img>
        <motion.img
          whileHover={{ y: -30 }}
          src={photosIcon}
          onClick={() => console.log(popup)}
        ></motion.img>
        <motion.img
          whileHover={{ y: -30 }}
          style={{ width: "66px" }}
          src={closetIcon}
          onClick={() => {
            stateChanger((prevState) => {
              console.log(popup.state.finder);
              return { ...prevState, finder: !popup.state.finder };
            });
            console.log(popup);
          }}
        ></motion.img>
      </div>
    </div>
  );
};

export default Dock;
