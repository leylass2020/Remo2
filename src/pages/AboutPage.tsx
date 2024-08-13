import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "../styles/aboutPage.css";
import im1 from "../imgs/AdobeStock_170801444 1.svg";
import im2 from "../imgs/AdobeStock_227421922 1.svg";
import arr from "../imgs/icons/Arrow2.svg";
import arr1 from "../imgs/icons/Arrow22.svg";
import a9 from "../imgs/icons/Group2938.svg";
import a10 from "../imgs/icons/chevrons-right.svg";
import impro from "../imgs/iPhone13Pro.svg";
import impro1 from "../imgs/robot.svg";
import impro3 from "../imgs/HeroWrapperimage.svg";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutPage() {
  const text = "Let's Hire Us";
  const ProductsArr = [
    {
      id: 1,
      img: impro,
      txt: "hello Lorem ipsum dolor sit amet consectetur adipisicing elit,Nesciunt ratione vel voluptas a magni voluptatibus in illum? Itaque tenetur vero, provident natus, quaerat blanditiispraesentium nemo ut dolorem debitis corrupti. Lorem ipsumdolor sit amet consectetur adipisicing elit. Nesciunt rationevel voluptas a magni voluptatibus in illum? Itaque teneturvero, provident natus, quaerat blanditiis praesentium nemo utdolorem debitis corrupti.",
    },
    {
      id: 2,
      img: impro1,
      txt: "Nesciunt ratione vel voluptas a magni voluptatibus in illum? Itaque tenetur vero, provident natus, quaerat blanditiispraesentium nemo ut dolorem debitis corrupti. Lorem ipsumdolor sit amet consectetur adipisicing elit. Nesciunt rationevel voluptas a magni voluptatibus in illum? Itaque teneturvero, provident natus, quaerat blanditiis praesentium nemo utdolorem debitis corrupti.",
    },
    {
      id: 3,
      img: impro3,
      txt: "consectetur adipisicing elit,Nesciunt ratione vel voluptas a magni voluptatibus in illum? Itaque tenetur vero, provident natus, quaerat blanditiispraesentium nemo ut dolorem debitis corrupti. Lorem ipsumdolor sit amet consectetur adipisicing elit. Nesciunt rationevel voluptas a magni voluptatibus in illum? Itaque teneturvero, provident natus, quaerat blanditiis praesentium nemo utdolorem debitis corrupti.",
    },
    {
      id: 4,
      img: impro1,
      txt: "hello Lorem ipsum dolor sit amet consectetur adipisicing elit,Nesciunt ratione vel voluptas a magni voluptatibus in illum? Itaque tenetur vero, provident natus, quaerat blanditiispraesentium nemo ut dolorem debitis corrupti. Lorem ipsumdolor sit amet consectetur adipisicing elit. Nesciunt rationevel voluptas a magni voluptatibus in illum? Itaque teneturvero, provident natus",
    },
    {
      id: 5,
      img: impro3,
      txt: "hello Lorem ipsum dolor sit amet consectetur adipisicing elit,Nesciunt ratione vel voluptas a magni voluptatibus in illum? Itaque tenetur vero, provident natus, quaerat blanditiispraesentium nemo ut dolorem debitis corrupti. Lorem ipsumdolor sit amet consectetur adipisicing elit. Nesciunt rationevel voluptas a magni voluptatibus in illum? Itaque teneturvero.",
    },
  ];
  const [imagepro, setimagepro] = useState(ProductsArr[0].img);
  const [textpro, settextpro] = useState(ProductsArr[0].txt);
  const [idpro, setidpro] = useState(1);
  const [index, setindex] = useState(1);

  return (
    <>
      <Navbar />
      <div className="header">
        <motion.h1
          whileInView={{ y: 5 }}
          transition={{ type: "spring", delay: 0.25 }}
        >
          <a href="#">About Us</a>
        </motion.h1>
        <hr />
        <motion.p
          whileInView={{ x: 5 }}
          transition={{ type: "spring", delay: 0.25 }}
        >
          We help build and manage a team of world-class developers <br />
          to bring your vision to life
        </motion.p>
      </div>

      <div className="AboutP">
        <div className="container">
          <div className="row rowAb1">
            <motion.div
              className="col col-lg-4 col-md-8 col-8"
              whileInView={{ x: 5 }}
              transition={{ type: "spring", delay: 0.25 }}
            >
              <h3>
                we
                <br /> are dev
              </h3>
              <img src={arr} className="arrow"></img>
              <h2>Lorem ipsum dolor sit amet sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </motion.div>
            <div className="col col-lg-6 col-md-8 col-8">
              <motion.img
                src={im1}
                id="img1"
                whileInView={{ x: -5 }}
                transition={{ type: "spring", delay: 0.25 }}
              ></motion.img>
            </div>
          </div>
          <div className="row rowAb2">
            <div className="col col-lg-6 col-md-8 col-8">
              <motion.img
                src={im2}
                id="img2"
                whileInView={{ x: 5 }}
                transition={{ type: "spring", delay: 0.25 }}
              ></motion.img>
            </div>
            <motion.div
              className="col col-lg-4 col-md-8 col-8"
              whileInView={{ x: -5 }}
              transition={{ type: "spring", delay: 0.25 }}
            >
              <h3>
                we are
                <br /> solution
              </h3>
              <img src={arr1} className="arrow"></img>
              <h2>Lorem ipsum dolor sit amet sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </motion.div>
          </div>
          {/* sec 3 */}

          {/* products */}

          <motion.div
            className="products"
            whileInView={{ x: -10 }}
            transition={{ type: "spring", delay: 0.25 }}
          >
            <h3>
              our
              <br /> products
            </h3>
            <img src={arr} className="arrow"></img>
            <div className="row pro-row">
              <div className="col col-lg-2">
                <ul className="product-list list-group">
                  {ProductsArr.map((item) => (
                    <li
                      key={item.id}
                      className={
                        item.id === index
                          ? "list-group-item active1"
                          : "list-group-item"
                      }
                      onClick={() => {
                        setimagepro(item.img);
                        setidpro(item.id);
                        settextpro(item.txt);
                        setindex(item.id);
                      }}
                    >
                      <h4>Product {item.id}</h4>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col col-lg-5 ">
                <img className="product-img" src={imagepro}></img>
              </div>
              <div className="col col-lg-4 col-9">
                <h3 className="title">Product {idpro}</h3>
                <p className="text-body">{textpro}</p>
              </div>
            </div>
          </motion.div>
          {/* end of product */}
          <div className="end-about">
            <h1> That Great?! Let's work together!</h1>
            <Link
              className="hire-btn"
              to="/JoinUs"
              onClick={() => {
                window.location.href = "/JoinUs";
              }}
            >
              <div className="ser-row">
                <img src={a9}></img>
                <p>{text}</p>
                <img src={a10}></img>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
