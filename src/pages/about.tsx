import React, { useState } from "react";
import { UpArrow, RightArrow, DownArrow } from "../components/arrows";
import { motion } from "framer-motion";

export default function About() {
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
  // function to send external links to new tab
  function externalLinks() {
    var anchors = document.querySelectorAll("a");
    for (var i = 0; i < anchors.length; i++) {
      if (anchors[i].hostname !== window.location.hostname) {
        anchors[i].setAttribute("target", "_blank");
      }
    }
  }
  externalLinks();
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
          className="arrow-btn"
          onClick={() => handleClick("up")}
          style={Disappear}
        >
          <UpArrow link="/l" />
        </button>
        <button
          className="arrow-btn"
          onClick={() => handleClick("right")}
          style={Disappear}
        >
          <RightArrow link="/p" />
        </button>
        <div className="content-space">
          <h1 className="h1-space">About</h1>
          <p className="sub-text">
            A short exploration of the question of questions.
          </p>
          <h2 className="h2-body">Navigation</h2>
          <p>Treat this site like an internet essay. </p>
          <p>
            There is a few amount of text, a couple illustrations and other
            media, but for the most part, the main dishes of this course are the
            navigational features and the organisation of this 'essay-like' text
            in a spatial form.
          </p>
          <p>You'll probably not like this initially, </p>
          <p>
            Essentially, this is an experimental website using basic pages and
            text, but organised in a spatial manner. Navigation is currently
            mainly provided by arrows displayed on the sides of pages. Othewise,
            this site reads like a normal essay, but information and various
            other forms of content have been organised in a spatial manner.
          </p>

          <h2 className="h2-body">Who Made This?</h2>
          <p>
            Someone who wishes to remain relatively anonymous for now. But, I've
            worked on this project for a year now.
          </p>

          <p style={{ paddingBottom: 0, marginBottom: 0 }}>
            I hope you enjoy the site.
          </p>
        </div>
      </motion.div>
      <button
        className="arrow-btn"
        onClick={() => handleClick("down")}
        style={Disappear}
      >
        {" "}
        <DownArrow link="/" />
      </button>
    </>
  );
}
