import "bootstrap/dist/css/bootstrap.css";
import "../styles/careers.css";
import person1 from "../imgs/team/Rectangle80.svg";
import person2 from "../imgs/team/Rectangle83.svg";
import person3 from "../imgs/team/Rectangle84.svg";
import person4 from "../imgs/team/Rectangle82.svg";

import icon1 from "../imgs/team/depicons/Design.svg";
import icon2 from "../imgs/team/depicons/Development.svg";
import icon3 from "../imgs/team/depicons/Manager.svg";
import icon4 from "../imgs/team/depicons/gaming remote.svg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Careers() {
  const ipd = [
    {
      title: "Eng. Nawar ali",
      id: 1,
      imgp: person1,
      text: "Ceo,Remo start",
      imgs: [
        { id: 1, ims: icon2 },
        { id: 2, ims: icon3 },
      ],
    },
    {
      title: "Eng.Mohammad",
      id: 2,
      imgp: person2,
      text: "programing,Remo start",
      imgs: [{ id: 1, ims: icon4 }],
    },
    {
      title: "Eng.Ranim omar",
      id: 3,
      imgp: person3,
      text: "UI/UX, Remo start",
      imgs: [{ id: 1, ims: icon1 }],
    },
    {
      title: "Eng.sarya",
      id: 4,
      imgp: person4,
      text: "UI/UX, Remo start",
      imgs: [{ id: 1, ims: icon1 }],
    },
    {
      title: "Eng. Nawar ali",
      id: 5,
      imgp: person1,
      text: "Ceo,Remo start",
      imgs: [
        { id: 1, ims: icon2 },
        { id: 2, ims: icon3 },
      ],
    },
    {
      title: "Eng.Mohammad",
      id: 6,
      imgp: person2,
      text: "programing,Remo start",
      imgs: [{ id: 1, ims: icon4 }],
    },
    {
      title: "Eng.Ranim omar",
      id: 7,
      imgp: person3,
      text: "UI/UX, Remo start",
      imgs: [{ id: 1, ims: icon1 }],
    },
    {
      title: "Eng.sarya",
      id: 8,
      imgp: person4,
      text: "UI/UX, Remo start",
      imgs: [{ id: 1, ims: icon1 }],
    },
    {
      title: "Eng. Nawar ali",
      id: 9,
      imgp: person1,
      text: "Ceo,Remo start",
      imgs: [
        { id: 1, ims: icon2 },
        { id: 2, ims: icon3 },
      ],
    },
    {
      title: "Eng.Mohammad",
      id: 10,
      imgp: person2,
      text: "programing,Remo start",
      imgs: [{ id: 1, ims: icon4 }],
    },
    {
      title: "Eng.Ranim omar",
      id: 11,
      imgp: person3,
      text: "UI/UX, Remo start",
      imgs: [{ id: 1, ims: icon1 }],
    },
    {
      title: "Eng.sarya",
      id: 12,
      imgp: person4,
      text: "UI/UX, Remo start",
      imgs: [{ id: 1, ims: icon1 }],
    },
    {
      title: "Eng. Nawar ali",
      id: 13,
      imgp: person1,
      text: "Ceo,Remo start",
      imgs: [
        { id: 1, ims: icon2 },
        { id: 2, ims: icon3 },
      ],
    },
    {
      title: "Eng.Mohammad",
      id: 14,
      imgp: person2,
      text: "programing,Remo start",
      imgs: [{ id: 1, ims: icon4 }],
    },
    {
      title: "Eng.Ranim omar",
      id: 15,
      imgp: person3,
      text: "UI/UX, Remo start",
      imgs: [{ id: 1, ims: icon1 }],
    },
    {
      title: "Eng.sarya",
      id: 16,
      imgp: person4,
      text: "UI/UX, Remo start",
      imgs: [{ id: 1, ims: icon1 }],
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container career-container">
        <motion.h1
          whileInView={{ y: 10 }}
          transition={{ type: "spring", delay: 0.27 }}
        >
          Meet Our Team
        </motion.h1>
        <hr />
        <motion.p
          whileInView={{ x: 10 }}
          transition={{ type: "spring", delay: 0.25 }}
        >
          We help build and manage a team of world-class developers<br></br> to
          bring your vision to life
        </motion.p>
        <motion.div
          className="black-btn"
          whileInView={{ x: 10 }}
          transition={{ type: "spring", delay: 0.27 }}
        >
          <Link
            to="/JoinUs"
            className="link"
            onClick={() => {
              window.location.href = "/JoinUs";
            }}
          >
            <div className="button">Join Us</div>
          </Link>
          <div id="frame"></div>
        </motion.div>
        <motion.div
          whileInView={{ x: 10 }}
          transition={{ type: "spring", delay: 0.27 }}
        >
          <Card props={ipd} />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
export default Careers;
