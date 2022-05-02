import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  hover: {
    scale: 1.5,
    fill: "#7202F5"
  },
  tap: { scale: 1.1, fill: "#e641d6" }
};

// function RightClick() {
//   const [exit, setExit] = useState({ opacity: 0, x: 0 });
//   setExit({ opacity: 0, x: -500 });
//   return (exit)
// }
const Glow = {
  hover: {
    boxShadow: "0px 0px 20px rgb(0, 0, 255)"
  }
};

export function RightArrow(props) {
  return (
    <>
      <Link to={props.link}>
        <motion.div
          variants={variants}
          whileHover="hover"
          whileTap="tap"
          className="right-arrow arrow"
          // onClick={RightClick}
        >
          <motion.svg
            variants={Glow}
            whileHover="hover"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </motion.svg>
        </motion.div>
      </Link>
    </>
  );
}

export function LeftArrow(props2) {
  return (
    <>
      <Link to={props2.link}>
        <motion.button
          variants={variants}
          whileHover="hover"
          whileTap="tap"
          className="left-arrow arrow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>{" "}
        </motion.button>
      </Link>
    </>
  );
}

export function UpArrow(props3) {
  return (
    <>
      <Link to={props3.link}>
        <motion.button
          variants={variants}
          whileHover="hover"
          whileTap="tap"
          className="up-arrow arrow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
          </svg>
        </motion.button>
      </Link>
    </>
  );
}

export function DownArrow(props4) {
  return (
    <>
      <Link to={props4.link}>
        <motion.button
          variants={variants}
          whileHover="hover"
          whileTap="tap"
          className="down-arrow arrow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
          </svg>
        </motion.button>
      </Link>
    </>
  );
}
