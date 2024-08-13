import "../styles/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../imgs/Group.svg";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const loc = window.location.pathname;
  const navlink = [
    { id: 1, location: "/", name: "Home" },
    { id: 2, location: "/#our-project-id", name: "Our Projects" },
    {
      id: 3,
      location: "/#our-process",
      name: "Our Process",
    },
    {
      id: 4,
      location: "/Careers",
      name: "Careers",
    },
    {
      id: 5,
      location: "/AboutPage",
      name: "About us",
    },
  ];

  return (
    <>
      <div className="content-nav">
        <nav className="nav navbar">
          <motion.img
            animate={{ x: 10 }}
            transition={{ type: "spring", delay: 0.25 }}
            className="logo"
            src={logo}
          ></motion.img>
          <motion.ul
            animate={{ y: 10 }}
            transition={{ type: "spring", delay: 0.25 }}
          >
            {" "}
            {navlink.map((item) => (
              <li className={ loc === item.location?"active":"nav-item"} key={item.id}>
                <Link
                  to={item.location}
                  className="nav-link"
                  onClick={() => {
                    window.location.href = item.location;
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </motion.ul>
          <motion.button
            animate={{ x: -10 }}
            transition={{ type: "spring", delay: 0.25 }}
            className="btn btn-primary"
            onClick={() => {
              window.location.href = "/JoinUs";
            }}
          >
            <Icon.ChatLeftDots size={25} className="chat" />{" "}
            <span>Hire Us</span>
          </motion.button>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
