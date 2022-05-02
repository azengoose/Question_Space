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
          <p className="sub-text">Be mindful of bugs.</p>
          <h2 className="h2-body">Introduction</h2>
          <p>Hello and warmest welcome to this cosy nook of the internet. </p>
          <p>
            Essentially, this is an experimental website using basic pages and
            text, but organised in a spatial manner, as if regressing somewhat
            to a physical organisation of pieces of paper. Navigation is
            currently mainly provided by arrows displayed on the sides of pages.
          </p>
          <p>
            This version is a demo and it is unlikely that this project will
            later be called 'MetaSite', for the practical purpose of avoiding
            any positive or less flattering associations formed from the
            developments from a certain similar-sounding large entity, of which
            I personally am unsure exists right now?
          </p>
          <p>
            Anyway, if you're interested, take a peek at my internals by{" "}
            <a href="https://www.thoughtco.com/get-inspect-element-tool-for-browser-756549">
              inspecting element
            </a>
            , or go ahead and give yourself the liberty of blithely copy-pasting
            the code from this project's source files on{" "}
            <a href="https://github.com/azengoose/MetaSite_V2">GitHub</a>{" "}
            (software people: apologies in advance for the spaghetti).
          </p>
          <h2 className="h2-body"> Aims</h2>
          <p>
            It is believed that this experimental way of formatting ideas, for
            example, traditional essays, can develop to be a readily easy way to
            do a traditional medium differently. I pause to suggest any degree
            of 'betterness', but I am interested in difference.
          </p>
          <p>
            Hence, it is pertinent to advance the idea of any such a medium in
            any way that is conducive to its wider discovery and adoption. I
            personally refuse anyway, to be confined so far, in the landscape of
            concept elaboration via boringly linear-scrolling blog posts,
            cobbled together with other mixed media forms with little rhyme or
            craft, or to be led to the difficulties of larger video game
            development. I am afraid I also must include in my attack,
            traditional books; for they too, fall into the realm of rather
            linearly-interactive conceptual explorations.
          </p>
          <p>
            My point simply, is that I am sure there is a different, more
            compelling way to do ideas justice. Perhaps this is not the correct
            course - for example, solutions to accessbility have not yet been
            considered; but I'll be damned if I didn't try.
          </p>
          <p>Some other questions hoped to be explored in a near future:</p>
          <ol>
            <li>Learning via questioning; the larger role of questions.</li>
            <li>A more graphical approach to writing.</li>
          </ol>

          <p style={{ paddingBottom: 0, marginBottom: 0 }}>
            Distillation of your thoughts into writing for MetaSite will
            probably be appreciated ^.
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
