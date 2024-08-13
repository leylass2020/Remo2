import "bootstrap/dist/css/bootstrap.css";
import "../styles/serviceList.css";
import a1 from "../imgs/icons/globe.svg";
import a2 from "../imgs/icons/settings.svg";
import a3 from "../imgs/icons/figma.svg";
import a4 from "../imgs/icons/Group2936.svg";
import a5 from "../imgs/icons/server.svg";
import a6 from "../imgs/icons/git-merge.svg";
import a7 from "../imgs/icons/Group2937-2.png";
import a8 from "../imgs/icons/database.svg";
import a9 from "../imgs/icons/Group2938num2.png";
import a10 from "../imgs/icons/chevrons-right.svg";
import { motion } from "framer-motion";

function ListServices() {
  const list = [
    {
      icon: a1,
      text: "Software engineering",
      id: 1,
    },
    {
      icon: a2,
      text: "DEVops service",
      id: 2,
    },
    {
      icon: a3,
      text: "UI / UX Design",
      id: 3,
    },
    {
      icon: a4,
      text: "Web Development",
      id: 4,
    },
    {
      icon: a5,
      text: "MVP Development",
      id: 5,
    },
    {
      icon: a6,
      text: "Branding Design",
      id: 6,
    },
    {
      icon: a7,
      text: "Mobile Development",
      id: 7,
    },
    {
      icon: a8,
      text: "Databases",
      id: 8,
    },
    {
      icon: a9,
      text: "Let's Hire Us",
      id: 9,
    },
  ];
  return (
    <>
      <motion.div
        className="l-bg"
        whileInView={{ y: 10 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <div className="container text-center">
          <div className="row justify-content-center align-items-center">
            <h1>
              <a href="#">Services</a>
            </h1>
            <hr className="ti"></hr>
          </div>
          <div className="row service-row">
            {list.map((item) => (
              <button className="col col-lg-3 col-md-4 col-sm-6" key={item.id}>
                <div className="ser-row">
                  <img src={item.icon}></img>
                  <span>{item.text}</span>
                  <img src={a10}></img>
                </div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default ListServices;
