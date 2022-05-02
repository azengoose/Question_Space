import React, { useState } from "react";
import { UpArrow } from "../components/arrows";
import { motion } from "framer-motion";

export default function Critical() {
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
        <div className="content-space">
          <h1 className="h1-space">Criticality</h1>
          <p className="sub-text">There is no answer without question.</p>
          <h2 className="h2-body">Introduction</h2>
          <p>
            A common grievance of many in the distrust of education is the lack
            of learning so-called 'critical thinking'. A critical thinker is
            likely to be critical of others, perhaps so much so that their
            criticality has been undermined by the...
          </p>
          <br></br>
          <p className="sub-text">Yeah, a placeholder...</p>
          <p>
            A reminder that this is a demo. Other pages that may be branched off
            from this page:
          </p>
          <li>Bugs and Features</li>
          <li>Institute of Internet</li>
          <li>Tech Design and Decision</li>
          <button
            className="arrow-btn up"
            onClick={() => handleClick("up")}
            style={Disappear}
          >
            <UpArrow link="/" />
          </button>
        </div>
      </motion.div>
    </>
  );
}
