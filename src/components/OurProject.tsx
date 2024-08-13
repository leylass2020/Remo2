import "bootstrap/dist/css/bootstrap.css";
import "../styles/ourproject.css";
import mop1 from "../imgs/Realme 11.svg";
import mop2 from "../imgs/Realme 10.svg";
import mop3 from "../imgs/iPhone13Pro.svg";
import vec from "../imgs/Vector.svg";
import { Link } from "react-router-dom";

import rig from "../imgs/icons/rightvector.svg";
import lef from "../imgs/icons/leftvictor.svg";
import { useState } from "react";
import { motion } from "framer-motion";

function OurProject() {
  const [counter, setCounter] = useState(2);
  const projectArray = [
    {
      id: 1,
      maintitle: "main title 1",
      title: "test1",
      text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      color1: "red",
      color2: "black",
      im1: mop1,
      im2: "",
    },
    {
      id: 2,
      maintitle: "main title 2",
      title: "test2",
      text: " Uwang Corporation, a leading provider of financial services,was struggling to keep up with the demands of its growing business.Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      color1: "aqua",
      color2: "blue",
      im1: mop2,
      im2: "",
    },
    {
      id: 3,
      maintitle: "Travel",
      title: "Case Study- Travel",
      text: " Uwang Corporation, a leading provider of financial services,was struggling to keep up with the demands of its growing business.Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      color1: "rgba(195, 145, 57, 1)",
      color2: "rgba(53, 53, 70, 1)",
      im1: mop1,
      im2: mop2,
    },
    {
      id: 4,
      maintitle: "Shop Store",
      title: "Case Study- App Store",
      text: " Uwang Corporation, a leading provider of financial services, was struggling to keep up with the demands of its growing business.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. ",
      color1: "rgba(181, 131, 141, 1)",
      color2: "rgba(245, 240, 237, 1)",
      im1: mop3,
      im2: "",
    },
  ];
  const handlClickRight = () => {
    if (projectArray.length - 1 > counter) {
      setCounter(counter + 1);
    }
  };
  const handlClickLeft = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="container our-proj">
        <div className="row first">
          <h1 className="proj-title">Our Projects</h1>
          <hr className="proj-hr"></hr>
        </div>
        <div className="row second">
          <motion.div
          key={projectArray[counter].color1}
            className="col col-3 proj-img"
            whileInView={{ x: -10, content: projectArray[counter].color1 }}
            transition={{ type: "spring", delay: 0.25 }}
          >
            <div className="circle">
              <div
                className="cir-1"
                style={{ backgroundColor: projectArray[counter].color1 }}
              ></div>
              <div
                className="cir-2"
                style={{ backgroundColor: projectArray[counter].color2 }}
              ></div>
            </div>
            <div className="picture">
              <div className="image1">
                <img src={projectArray[counter].im1} />
              </div>
              <div className="image2">
                <img src={projectArray[counter].im2} />
              </div>
            </div>
          </motion.div>
          <motion.div
            key={projectArray[counter].maintitle}
            className="col col-5 proj-text"
            whileInView={{ x: 5, contain: projectArray[counter].maintitle }}
            transition={{ type: "spring", delay: 0.25 }}
          >
            <div className="rot-title">
              <h1>{projectArray[counter].maintitle} </h1>
              <div
                className="cir-3"
                style={{ backgroundColor: projectArray[counter].color1 }}
              ></div>
            </div>
            <div className="box-tr">
              <div
                className="color-rec"
                style={{ backgroundColor: projectArray[counter].color2 }}
              ></div>
              <div className="container-white">
                <div className="swith-btn">
                  <button>
                    <img src={lef} onClick={handlClickLeft}></img>
                  </button>
                  <button>
                    <img src={rig} onClick={handlClickRight}></img>
                  </button>
                </div>
                <div className="white">
                  <motion.div
                    key={projectArray[counter].title}
                    whileInView={{
                      x: -7,
                      contain: projectArray[counter].title,
                    }}
                    transition={{ type: "spring", delay: 0.25 }}
                  >
                    <h1>{projectArray[counter].title}</h1>
                    <p>{projectArray[counter].text}</p>
                  </motion.div>
                  <button className="btn-down">
                    <Link
                      to="/CaseStudy"
                      onClick={() => {
                        window.location.href = "/CaseStudy";
                      }}
                      className="btn-link"
                    >
                      view case study<img src={rig}></img>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            {/** end proj-text */}
          </motion.div>
          {/** end section 2 for images and paragraphs */}
        </div>
        <div className="row line">
          <img src={vec} className="vec1"></img>
          <img src={vec} className="vec2"></img>
        </div>
        {/** end for the main container */}
      </div>
    </>
  );
}
export default OurProject;
