import * as React from "react";
import { useState } from "react";
// import Contents from "../components/contents";
import Browser from "../components/browser";
// import Randompage from "../components/randompage";
// import ButtonChange from "../components/buttonchange";
import { motion } from "framer-motion";
import {
  RightArrow,
  LeftArrow,
  DownArrow,
  UpArrow
} from "../components/arrows";

//glitch intro for home https://codepen.io/team/nclud/pen/MwaGGE
//can be refactored top-level for <motion><content></motion

export default function Home() {
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
          className="arrow-btn up"
          onClick={() => handleClick("up")}
          style={Disappear}
        >
          <UpArrow link="/a" />
        </button>
        <button
          className="arrow-btn"
          onClick={() => handleClick("right")}
          style={Disappear}
        >
          <RightArrow link="/m" />
        </button>
        <button
          className="arrow-btn"
          onClick={() => handleClick("left")}
          style={Disappear}
        >
          <LeftArrow link="/w" />
        </button>

        <Browser />

        <h1 className="home-title"> &lt;MetaSite/&gt;</h1>
        <p className="sub-text">This is a demo.</p>

        <p style={{ textAlign: "center", marginTop: -15 }}>
          More information upwards ^
        </p>

        <p style={{ textAlign: "center", marginBottom: 0 }}>
          <em>Navigate by clicking the arrows situated on the sides.</em>
        </p>

        {/* <Randompage /> */}

        {/* <ButtonChange /> */}

        {/* <Contents /> */}
      </motion.div>

      <div className="arrow-footer">
        <button
          className="arrow-btn"
          onClick={() => handleClick("down")}
          style={Disappear}
        >
          <DownArrow link="/c" />
        </button>
      </div>
    </>
  );
}
