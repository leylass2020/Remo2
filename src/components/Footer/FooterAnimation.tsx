import "./footer.css";
import { motion, useAnimate } from "framer-motion";

function FooterAnimation() {
  return (
    <>
      <div style={{ backgroundColor: "blue", padding: "50px" }}>
        <div className="container-box container">
          <motion.div
            animate={{ rotate: "360deg" }}
            transition={{ duration: 5 }}
            className="spaning-box"
          ></motion.div>
          <div className="main-box">
            <motion.span
              initial={{
                y: 0,
              }}
              animate={{
                y: -100,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              exit={{
                y: 0,
              }}
              className="sp1"
            ></motion.span>{" "}
            <h1>hello</h1>
            <span></span>
          </div>

          {/*  end main*/}
        </div>
      </div>
    </>
  );
}

export default FooterAnimation;
