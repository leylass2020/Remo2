import "../styles/home.css";
import im from "../imgs/laptop program.svg";
import bt from "../imgs/Component 6.svg";
import logo1 from "../imgs/Logo 1.svg";
import logo2 from "../imgs/Logo 4.svg";
import logo3 from "../imgs/Logo 3.svg";
import logo4 from "../imgs/logo 2.svg";
import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
import {useState} from "react";

function Home() {
  const[foot,setfoot]=useState(false);
  return (
    <>
      <div className="container content-home">
        <div  className="row">
          <motion.div animate={{x:10}} transition={{type:"spring"}} className="col  col-lg-6">
            <h1>
              Great <span className="bold gra1">Product</span> is
              <br />
              <span className="bold">
                Build by great <span className="gra2">teams</span>
              </span>
            </h1>
            <p>
              We are a team of 150+{" "}
              <strong>software engineers & Designers</strong> ready to Build &
              maintenance your mobile and web application.{" "}
            </p>
            <a href="/">
              <img src={bt} className="price" />
            </a>
          </motion.div>
          <motion.div animate={{x:-15}} transition={{type:"spring"}} className="col col-lg-5 col-8">
            <img src={im}></img>
          </motion.div>
        </div>
        {/* end first row */}
        <section>
          <div className="home-footer">
            <motion.div animate={{y:-10}}  className="row">
              <div className="col col-lg-2"></div>
              <div className="col col-lg-2">
                <h1>500+</h1>
                <p>Successful projects</p>
              </div>
              <div className="col col-lg-2">
                <h1>98%</h1>
                <p>Satisfied Clients</p>
              </div>
              <div className="col col-lg-2">
                <h1>35+</h1>
                <p>Handled Countries</p>
              </div>
              <div className="col col-lg-2"></div>
            </motion.div>
            <div className="row logos">
              <div className="col col-lg-2">
                <img src={logo1}></img>
              </div>
              <div className="col col-lg-2">
                <img src={logo2}></img>
              </div>
              <div className="col col-lg-2">
                <img src={logo3}></img>
              </div>
              <div className="col col-lg-2">
                <img src={logo4}></img>
              </div>
            </div>
          </div>
          {/* footer end */}
        </section>
      </div>
    </>
  );
}
export default Home;
