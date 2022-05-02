import React, { useState } from "react";
import { UpArrow, DownArrow } from "../components/arrows";
import { motion } from "framer-motion";

export default function Design() {
  // const [scrolled, setScrolled] = useState(false)
  // window.onscroll = function(ev) {
  //   if ((window.innerHeight + window.pageYOffset ) >= document.body.offsetHeight) {
  //       setScrolled(true)
  //       console.log(scrolled)
  //   }};
  // const display = {
  //   display: scrolled ? "none" : "block"
  // }
  const [initial] = useState({ opacity: 0, x: 0 });
  var animate = { opacity: 1 };
  const [exit, setExit] = useState({ opacity: 0, x: 0, y: 0 });

  const [clicked, setClicked] = useState(false);
  function handleClickUp() {
    setExit({ opacity: 0, x: 0, y: 500 });
    setClicked(true);
  }
  function handleClickDown() {
    setExit({ opacity: 0, x: 0, y: -500 });
    setClicked(true);
  }
  const Disappear = {
    opacity: clicked ? 0 : 1
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
        <button className="arrow-btn" onClick={handleClickUp} style={Disappear}>
          <UpArrow link="/" />
        </button>

        <h1>Design</h1>
        <p>Q. How should technology be designed?</p>
        <p>
          Should we allow a machine learning program, to do it? Is that
          objectivity, though initialised by a team of developers, desired?
        </p>
        <p>
          - Accessibility &ndash; Egalitarianism - Progress &ndash;
          Utilitariansim
        </p>
        <p>Q. How should decisions be made?</p>
        <p>
          This question operates on every domain of what it means to live if you
          allow it. On a personal level, it concerns you. How should you make
          decisions? It appears that so long as you live, you must (inaction, or
          &lsquo;doing nothing&rsquo; is also a decision) make them. This can be
          troubling and also empowering. Such is the beauty, sorrow and joy of
          living.
        </p>
        <p>
          Decisions essentially contend with a variety of choices. If, for
          example, you feel overwhelmed by the variety and amount of questions
          and information being slung at you in your legendary experience with
          MetaSiteTM; well, suck it up I guess, it&rsquo;ll probably get better.
          If it doesn&rsquo;t, you can sue me.
        </p>
        <p>Recommended Unlock: [Open-Source]</p>
        <p>How do we use the internet, and how does digital media use us?</p>
        <p>
          On a public level, global and large-scale entities and companies
          manage executive functioning and management of many digital products,
          or in the case of open-source, many individuals and groups contribute
          to the internet. Yet aren&apos;t people also confined and defined by
          the limits of the very choice of mediums and tools at their disposal?
        </p>
        <p>
          It is negligent to disregard one&apos;s affiliation with affecting the
          social landscape where one situates themselves in, let alone politics
          and our contributions to the social psyche of the world. If an
          argument must be presented in this light, you can consider how
          one&apos;s happiness or energy, or one&apos;s pessimism spreads itself
          around a room or a work environment. So too, does each
          individual&apos;s existence pervade and affect their society in the
          short and long time that they live.
        </p>
        <p>
          For those that shun the politics and wider global stage of society, or
          shy away from such topics (and I believe my writer is one such a
          person too), you too, contribute to the pool of apathy towards
          politics, and instead direct public consciousness towards perhaps
          self-driven things like self-care, self-centeredness and personal
          responsibilty.
        </p>
        <p>
          It doesn&apos;t matter if you don&apos;t care about politics; you
          enact politics regardless.
        </p>
        <p>
          Value Judgement Range: (Making explicit judgements) &mdash;
          (Attempting to grapple and consider matters both public and prviate)
          &mdash; (Apathy towards controversy)
        </p>
      </motion.div>
      <button className="arrow-btn" onClick={handleClickDown} style={Disappear}>
        <DownArrow link="/" />
      </button>
    </>
  );
}
