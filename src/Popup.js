import React from "react";
import { motion } from "framer-motion";

const Popup = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: 200 }}
      animate={{ opacity: 1, x: 200, transition: { duration: 0.1 } }}
      className="popup-container"
      drag
    >
      <motion.div>
        <div className="btn-container">
          <div
            className="quit-btn"
            onClick={() => props.stateChanger(!props.state)}
          ></div>
          <div className="fullscreen-btn"></div>
        </div>
      </motion.div>
      {props.popup}
    </motion.div>
  );
};

export default Popup;
