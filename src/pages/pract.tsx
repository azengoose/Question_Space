import React, { useState } from "react";
import { DownArrow, LeftArrow } from "../components/arrows";
import { motion } from "framer-motion";

export default function Practical() {
  const [initial] = useState({ opacity: 0, x: 0 });
  var animate = { opacity: 1 };
  const [exit, setExit] = useState({ opacity: 0, x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  function handleClick(direction) {
    if (direction === "right") {
      setExit({ opacity: 0, x: -1000, y: 0 });
    }
    if (direction === "left") {
      setExit({ opacity: 0, x: 1000, y: 0 });
    }
    if (direction === "up") {
      setExit({ opacity: 0, x: 0, y: 500 });
    }
    if (direction === "down") {
      setExit({ opacity: 0, x: 0, y: -500 });
    }
    setClicked(true);
  }
  const Disappear = {
    opacity: clicked ? "0" : "1"
  };
  var variants = {
    initial: initial,
    animate: animate,
    exit: exit
  };
  return (
    <>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        <button
          className="arrow-btn left"
          onClick={() => handleClick("left")}
          style={Disappear}
        >
          <LeftArrow link="/a" />
        </button>
        <div className="content-space">
          <h1 className="h1-space">Practicality</h1>
          <p className="sub-text">
            The essence of productivity must be defined.
          </p>
          <h2 className="h2-body"> Introduction</h2>
          <p>
            It is certain that we must do that which is practical. As a matter
            of practicality, the passage of life compels us so. What is more
            contentious, are the levels of practicality and factors that we may
            consider as we navigate the decisions to be made in relation to
            their practicalities.
          </p>
          <p>
            How one conceives of, and makes peace with matters of practicality
            is in large part determined by their circumstances. Practicality,
            perhaps epitomised in some respect by the late Benjamin Franklin in
            his little adventures founding the United States...
          </p>
          <br></br>
          <p className="sub-text">Look, a placeholder.</p>
          <p>
            A reminder that this is a demo. Other pages that may be branched off
            from this page:
          </p>
          <li>Levels of Practicality</li>
          <li>Discomfort and Failure</li>
          <li>Limits of Writing</li>
        </div>
      </motion.div>

      {/* <div className="arrow-footer"> */}
      <button
        className="arrow-btn down"
        onClick={() => handleClick("down")}
        style={Disappear}
      >
        <DownArrow link="/m" />
      </button>
      {/* </div> */}
    </>
  );
}
