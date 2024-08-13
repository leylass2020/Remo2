import "bootstrap/dist/css/bootstrap.css";
import "../styles/about2.css";
import im from "../imgs/robot.svg";
import float1 from "../imgs/fluent_comma-24-regular.svg";
import float2 from "../imgs/fluent_comma-24-regular(1).svg";
import behance from "../imgs/icons/Behance.svg";
import linked from "../imgs/icons/Linkedin.svg";
import face from "../imgs/icons/Facebook.svg";
import git from "../imgs/icons/Github.svg";
import thread from "../imgs/icons/Threads.svg";
import * as Icon from "react-bootstrap-icons";

function AboutUsComp2() {
  return (
    <>
      <div className="cover container-about2">
        <div className="container">
          <div className="row ">
            <div className="col col-txt col-lg-6 col-6">
              <h1>
                Here's what our customers <br></br>have to say about us,
              </h1>
              <p className="first-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="col col-img col-lg-4 col-7 robot">
              <img src={im}></img>
            </div>
          </div>
          <div className="row1 row">
            <div className="col col-7 col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">mohammad essa</h3>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Ceo, Itech
                  </h6>
                  <p className="card-text ">
                    <img className="img-float1" src={float1} />
                    <p className="card-text ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="card-text ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                    <p className="card-text ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt .
                      <span className="img-float2">
                        <img className="f-r" src={float2} />
                        <img src={float2} />
                      </span>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-about">
            <div className="container ">
              <div className="row ">
                <div className="col col-lg-6 col-8 ">
                  <h1>Let's build your business together</h1>
                </div>
                <div className="col col-lg-4 col-6 col-icons ">
                  <h4>Follow us on</h4>
                  <img src={behance}></img>
                  <img src={linked}></img>
                  <img src={face}></img>
                  <img src={git}></img>
                  <img src={thread}></img>
                </div>
              </div>
              <div className="row">
                <div className="col col-7">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      <Icon.ArrowRightCircle size={40} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
export default AboutUsComp2;
