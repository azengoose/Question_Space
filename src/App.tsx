import { motion } from "framer-motion";
import Paths from "./router";
import "./styles/styles.css";
import "./styles/arrows.css";

import Progress from "./components/progress";
import Settings from "./components/settings/settings";
import Timer from "./components/timer";

export default function App() {
  console.log("Mate what d'you think you're doing back here. ");
  //opens external links in new tab
  var all_links = document.querySelectorAll("a");
  for (var i = 0; i < all_links.length; i++) {
    var a = all_links[i];
    if (a.hostname != location.hostname) {
      a.rel = "noopener";
      a.target = "_blank";
    }
  }
  //hi there this is a comment
  return (
    <>
      <main role="main" className="wrapper">
        <div className="content">
          {/* <Progress /> */}

          <motion.div
            whileHover={{ opacity: 1 }}
            style={{
              opacity: 0.05,
              left: "1rem",
              top: "0",
              position: "absolute",
              color: "black"
            }}
          >
            {/* <Timer /> */}
          </motion.div>

          <Settings />

          <Paths />
        </div>
      </main>
    </>
  );
}
