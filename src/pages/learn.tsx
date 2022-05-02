import React, { useState } from "react";
import { UpArrow, RightArrow, DownArrow } from "../components/arrows";
import { motion } from "framer-motion";
import Survey from "../components/survey";

export default function Learn() {
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
        <h2 className="h2-body">Not So Secret Survey Page</h2>
        <p>
          Roughly 2 minutes to half an hour, depending on if you're the type to
          think for 5 minutes, write a response, doubt yourself, rewrite,
          rewrite, then rewrite before submitting.
        </p>
        <Survey />
      </motion.div>
      <div className="arrow-footer">
        <button
          className="arrow-btn"
          onClick={() => handleClick("down")}
          style={Disappear}
        >
          <DownArrow link="/a" />
        </button>
      </div>
    </>
  );
}
